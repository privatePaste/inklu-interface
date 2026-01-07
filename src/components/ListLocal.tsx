import type { Estabelecimento } from "src/admin/src/components/create-estabelecimento/Types/estabelecimentos";

interface Props {
  locais: Estabelecimento[];
}

export default function ListaLocais({ locais }: Props) {
  return (
    <div className="grid gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
      {locais.map((est) => (
        <div
          key={est.id}
          className="rounded-2xl bg-white shadow-md transition hover:shadow-lg"
        >
          {est.image_url && (
            <img
              src={est.image_url}
              alt={est.name}
              className="h-40 w-full rounded-t-2xl object-cover"
            />
          )}

          <div className="p-4">
            <h3 className="font-semibold">{est.name}</h3>

            <span className="text-xs text-gray-500">
              {est.cuisine_type}
            </span>

            {est.description && (
              <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                {est.description}
              </p>
            )}

            {est.rating && (
              <span className="mt-2 block text-sm font-medium">
                ⭐ {est.rating}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
