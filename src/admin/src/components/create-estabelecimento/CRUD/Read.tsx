import { useEffect, useState } from "react";
import api from "../../../../../api/api";
import type { Estabelecimento } from "../Types/estabelecimentos";

export default function ReadEstabelecimento() {
  const [estabelecimentos, setEstabelecimentos] = useState<Estabelecimento[] | null>(null);

  useEffect(() => {
    async function fetchEstabelecimentos() {
      try {
        const response = await api.get<Estabelecimento[]>("/estabelecimentos/", {
          headers: {
            "x-user-id": "e98f8b94-192f-47bd-8da6-8399cfc007bf",
          },
        });

        setEstabelecimentos(response.data);
      } catch (error) {
        console.error("Error fetching estabelecimento:", error);
      }
    }

    fetchEstabelecimentos();
  }, []);

  if (!estabelecimentos) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-4">
      {estabelecimentos.map((est) => (
        <div
          key={est.id}
          className="rounded-lg border bg-white p-4 shadow-sm"
        >
          <h2 className="text-lg font-semibold">{est.name}</h2>

          <p className="text-sm text-gray-600">{est.address}</p>

          {est.description && (
            <p className="mt-2 text-sm">{est.description}</p>
          )}

          <div className="mt-2 text-sm text-gray-500">
            🍽 {est.cuisine_type} • 💰 {est.price_range}
          </div>

          {est.rating && (
            <div className="mt-1 text-sm">⭐ {est.rating}</div>
          )}
        </div>
      ))}
    </div>
  );
}
