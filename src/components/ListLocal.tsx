import type { Estabelecimento } from "src/admin/src/components/create-estabelecimento/Types/estabelecimentos";
import { atendimentoIcons } from "../utils/iconsAtendimentos";


interface Props {
  locais: Estabelecimento[];
}

export default function ListaLocais({ locais }: Props) {
  return (
    <div className="grid gap-6 p-4 sm:grid-cols-2 lg:grid-cols-3">
      {locais.map((est) => {
        const temAcessibilidade =
          est.atendimento_especial?.some((a) =>
            a.startsWith("rampa") ||
            a.startsWith("banheiro") ||
            a.startsWith("piso") ||
            a.startsWith("libras") ||
            a.startsWith("braille")
          );

        return (
          <div
            key={est.id}
            className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-lg"
          >
            {est.image_url && (
              <img
                src={est.image_url}
                alt={est.name}
                className="h-40 w-full object-cover transition group-hover:scale-105"
              />
            )}

            <div className="space-y-3 p-4">
              <div>
                <h3 className="font-semibold leading-tight">{est.name}</h3>
                <span className="text-xs text-muted-foreground">
                  {est.cuisine_type}
                </span>
              </div>

              {est.description && (
                <p className="text-sm text-gray-600 line-clamp-2">
                  {est.description}
                </p>
              )}

              {est.rating && (
                <span className="block text-sm font-medium">
                  ⭐ {est.rating}
                </span>
              )}

              {est.atendimento_especial?.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {est.atendimento_especial.map((item) => {
                    const iconData = atendimentoIcons[item];
                    if (!iconData) return null;

                    const Icon = iconData.icon;

                    return (
                      <div
                        key={item}
                        className="group relative flex h-8 w-8 items-center justify-center rounded-full
                                   bg-muted text-muted-foreground
                                   transition hover:bg-primary hover:text-primary-foreground"
                      >
                        <Icon size={16} />

                        <span className="pointer-events-none absolute bottom-full mb-1 hidden whitespace-nowrap
                                         rounded bg-black px-2 py-1 text-[10px] text-white
                                         group-hover:block">
                          {iconData.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}

              {temAcessibilidade && (
                <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                  ♿ Local acessível
                </span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
