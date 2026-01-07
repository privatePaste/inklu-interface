import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect, useState } from "react";
import {
  Wifi,
  Accessibility,
  PawPrint,
  Truck,
  ParkingCircle,
   Users,
  Baby,
  Trees
} from "lucide-react";

import { calcDistance } from "../utils/calcDistance";
import { useUserLocation } from "../Hook/UserLocation";
import { createPhotoMarker } from "../components/L/L";
import MapHeader from "./MapHeader";
import ListaLocais from "./ListLocal";
import api from "../api/api";
import type { Estabelecimento } from "src/admin/src/components/create-estabelecimento/Types/estabelecimentos";


const atendimentoIcons: Record<
  string,
  { icon: React.ElementType; label: string }
> = {
  wifi: { icon: Wifi, label: "Wi-Fi" },
  acessibilidade: { icon: Accessibility, label: "Acessibilidade" },
  pet_friendly: { icon: PawPrint, label: "Pet Friendly" },
  delivery: { icon: Truck, label: "Delivery" },
  estacionamento: { icon: ParkingCircle, label: "Estacionamento" },
  familia: { icon: Users, label: "Família" },
  criancas: { icon: Baby, label: "Crianças" },
  area_externa: { icon: Trees, label: "Área externa" },
};


export function Mapa() {
  const { location, error } = useUserLocation();
  const [viewMode, setViewMode] = useState<"map" | "list">("map");
  const [estabelecimentos, setEstabelecimentos] = useState<Estabelecimento[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEstabelecimentos() {
      try {
        const response = await api.get<Estabelecimento[]>(
          "/estabelecimentos/",
          {
            headers: {
              "x-user-id": "e98f8b94-192f-47bd-8da6-8399cfc007bf",
            },
          }
        );

        setEstabelecimentos(response.data);
      } catch (err) {
        console.error("Erro ao buscar estabelecimentos:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchEstabelecimentos();
  }, []);

  const center: [number, number] = location
    ? [location.latitude, location.longitude]
    : [-14.235, -51.9253];

  const locaisProximos = location
    ? estabelecimentos.filter(
      (est) =>
        calcDistance(
          location.latitude,
          location.longitude,
          est.latitude,
          est.longitude
        ) <= 10
    )
    : estabelecimentos;

  if (loading) {
    return (
      <div className="flex h-[60vh] items-center justify-center rounded-2xl bg-white shadow-md">
        Carregando estabelecimentos...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-[60vh] items-center justify-center rounded-2xl bg-white shadow-md">
        {error}
      </div>
    );
  }

  return (
    <section className="relative w-full rounded-2xl bg-gray-50 shadow-md">
      <MapHeader
        total={locaisProximos.length}
        viewMode={viewMode}
        onChangeView={setViewMode}
      />

      {viewMode === "map" ? (
        <div className="h-[65vh] overflow-hidden rounded-b-2xl">
          <MapContainer center={center} zoom={13} className="h-full w-full">
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            {locaisProximos.map((est) => (
              <Marker
                key={est.id}
                position={[est.latitude, est.longitude]}
                icon={createPhotoMarker(est.image_url || "IMAGEM_PADRAO_URL")}
              >
                <Popup className="rounded-xl">
                  <div className="w-[240px] overflow-hidden rounded-xl font-sans">
                    {est.image_url && (
                      <img
                        src={est.image_url}
                        alt={est.name}
                        className="h-32 w-full object-cover"
                      />
                    )}

                    <div className="space-y-2 p-3">
                      <div>
                        <h3 className="text-sm font-semibold leading-tight">
                          {est.name}
                        </h3>
                        <span className="text-xs text-gray-500">
                          {est.cuisine_type}
                        </span>
                      </div>

                      {est.rating && (
                        <div className="flex items-center text-xs">
                          ⭐ <span className="ml-1 font-medium">{est.rating}</span>
                        </div>
                      )}

                      {est.opening_hours && (
                        <p className="text-xs text-gray-600">
                          ⏰ {est.opening_hours}
                        </p>
                      )}

                      {/* Atendimentos especiais */}
                      {est.atendimento_especial?.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-2">
                          {est.atendimento_especial.map((item) => {
                            const iconData = atendimentoIcons[item];
                            if (!iconData) return null;

                            const Icon = iconData.icon;

                            return (
                              <div
                                key={item}
                                className="group relative flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-700"
                              >
                                <Icon size={16} />

                                {/* Tooltip */}
                                <span className="pointer-events-none absolute bottom-full mb-1 hidden whitespace-nowrap rounded bg-black px-2 py-1 text-[10px] text-white group-hover:block">
                                  {iconData.label}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      )}


                      {/* Endereço */}
                      <p className="line-clamp-2 text-xs text-gray-500">
                        📍 {est.address}
                      </p>

                      {/* Ações */}
                      <div className="flex gap-2 pt-2">
                        {est.website && (
                          <a
                            href={est.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 rounded-lg bg-black px-2 py-1 text-center text-xs font-medium text-white hover:bg-gray-800"
                          >
                            Site
                          </a>
                        )}

                        {est.whatsapp && (
                          <a
                            href={`https://wa.me/55${est.whatsapp}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 rounded-lg bg-green-500 px-2 py-1 text-center text-xs font-medium text-white hover:bg-green-600"
                          >
                            WhatsApp
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </Popup>

              </Marker>
            ))}
          </MapContainer>
        </div>
      ) : (
        <ListaLocais locais={locaisProximos} />
      )}
    </section>
  );
}
