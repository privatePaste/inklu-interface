import { ATENDIMENTOS } from "../admin/src/components/create-estabelecimento/Types/estabelecimentos";

interface Props {
  value: string[];
  onChange: (values: string[]) => void;
}

export function AtendimentosCheckboxGroup({ value, onChange }: Props) {
  const items = Object.values(ATENDIMENTOS).flat();

  function toggle(itemValue: string) {
    onChange(
      value.includes(itemValue)
        ? value.filter((v) => v !== itemValue)
        : [...value, itemValue]
    );
  }

  return (
    <div className="space-y-3">
      <p className="text-sm font-semibold text-gray-700">
        Atendimentos
      </p>

      <div className="flex max-h-40 flex-wrap gap-2 overflow-y-auto">
        {items.map((item) => {
          const active = value.includes(item.value);

          return (
            <button
              key={item.value}
              type="button"
              onClick={() => toggle(item.value)}
              className={`rounded-full border px-3 py-1 text-sm transition
                ${
                  active
                    ? "border-black bg-black text-white"
                    : "border-gray-300 text-gray-700 hover:border-black"
                }
              `}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
