import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect, useState } from "react";
import { calcDistance } from "../utils/calcDistance";
import { useUserLocation } from "../Hook/UserLocation";
import { createPhotoMarker } from "../components/L/L";
import MapHeader from "./MapHeader";
import ListaLocais from "./ListLocal";
import api from "../api/api";
import type { Estabelecimento } from "src/admin/src/components/create-estabelecimento/Types/estabelecimentos";
import { atendimentoIcons } from "../utils/iconsAtendimentos";



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
              "x-user-id": "2d06a445-d457-495f-8aa0-f8f401e08b34",
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
                <Popup
                  closeButton={false}
                  className="!rounded-xl !p-0 !shadow-xl"
                >
                  <div className="w-[220px] overflow-hidden rounded-xl bg-white font-sans">
                    {est.image_url && (
                      <div className="relative h-36 w-full">
                        <img
                          src={est.image_url}
                          alt={est.name}
                          className="h-full w-full object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                        <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
                          <h3 className="max-w-[140px] truncate text-sm font-semibold text-white">
                            {est.name}
                          </h3>

                          {est.rating && (
                            <span className="rounded-full bg-white/90 px-2 py-0.5 text-[11px] font-medium text-black">
                              ⭐ {est.rating}
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    {/* CONTEÚDO */}
                    <div className="space-y-2 px-3 py-3">

                      <span className="text-[11px] text-gray-500">
                        {est.cuisine_type}
                      </span>

                      {est.opening_hours && (
                        <div className="text-[11px] text-gray-500">
                          ⏰ {est.opening_hours}
                        </div>
                      )}

                      {/* ATENDIMENTOS */}
                      {est.atendimento_especial?.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {est.atendimento_especial.map((item) => {
                            const iconData = atendimentoIcons[item];
                            if (!iconData) return null;

                            const Icon = iconData.icon;

                            return (
                              <div
                                key={item}
                                className="group relative flex h-7 w-7 items-center justify-center rounded-full
                           bg-muted text-muted-foreground
                           transition hover:bg-primary hover:text-primary-foreground"
                              >
                                <Icon size={14} />

                                <span className="pointer-events-none absolute bottom-full mb-1 hidden
                                 whitespace-nowrap rounded bg-black px-2 py-0.5
                                 text-[10px] text-white group-hover:block">
                                  {iconData.label}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      )}

                      <p className="line-clamp-1 text-[11px] text-gray-400">
                        📍 {est.address}
                      </p>

                      <div className="flex gap-1.5 pt-2">
                        {est.website && (
                          <a
                            href={est.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 rounded-md border border-gray-200
                       px-2 py-1 text-center text-[11px]
                       transition hover:bg-gray-100"
                          >
                            Site
                          </a>
                        )}

                        {est.whatsapp && (
                          <a
                            href={`https://wa.me/55${est.whatsapp}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 rounded-md bg-green-500
                       px-2 py-1 text-center text-[11px]
                       font-medium text-white
                       transition hover:bg-green-600"
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
