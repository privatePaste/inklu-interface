import { useState } from "react";
import { AtendimentosCheckboxGroup } from "../components/Atendimentos";

interface FiltersState {
  atendimentos: string[];
  minRating: number | null;
  priceRange: number | null;
  onlyFeatured: boolean;
}

export default function Filters() {
  const [filters, setFilters] = useState<FiltersState>({
    atendimentos: [],
    minRating: null,
    priceRange: null,
    onlyFeatured: false,
  });

  function applyFilters() {
    console.log("Filtros aplicados:", filters);
  }

  function clearFilters() {
    setFilters({
      atendimentos: [],
      minRating: null,
      priceRange: null,
      onlyFeatured: false,
    });
  }

  return (
    <aside className="sticky top-6 w-full max-w-sm rounded-2xl bg-white p-6 shadow-lg">
      <h2 className="mb-6 text-xl font-bold">Filtros</h2>

      {/* ATENDIMENTOS */}
      <div className="mb-6 border-b pb-6">
        <AtendimentosCheckboxGroup
          value={filters.atendimentos}
          onChange={(values) =>
            setFilters((prev) => ({ ...prev, atendimentos: values }))
          }
        />
      </div>

      {/* AVALIAÇÃO */}
      <div className="mb-6 border-b pb-6">
        <label className="mb-2 block text-sm font-semibold">
          Avaliação mínima
        </label>

        <select
          className="w-full rounded-xl border p-2"
          value={filters.minRating ?? ""}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              minRating: e.target.value
                ? Number(e.target.value)
                : null,
            }))
          }
        >
          <option value="">Qualquer</option>
          <option value="3">⭐ 3+</option>
          <option value="4">⭐ 4+</option>
          <option value="5">⭐ 5</option>
        </select>
      </div>

      {/* PREÇO */}
      <div className="mb-6 border-b pb-6">
        <label className="mb-2 block text-sm font-semibold">
          Faixa de preço
        </label>

        <select
          className="w-full rounded-xl border p-2"
          value={filters.priceRange ?? ""}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              priceRange: e.target.value
                ? Number(e.target.value)
                : null,
            }))
          }
        >
          <option value="">Qualquer</option>
          <option value="1">$</option>
          <option value="2">$$</option>
          <option value="3">$$$</option>
          <option value="4">$$$$</option>
          <option value="5">$$$$$</option>
        </select>
      </div>

      {/* DESTAQUE */}
      <div className="mb-6 flex items-center justify-between">
        <span className="text-sm font-semibold">
          Apenas destaques
        </span>

        <input
          type="checkbox"
          checked={filters.onlyFeatured}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              onlyFeatured: e.target.checked,
            }))
          }
          className="h-5 w-5 accent-black"
        />
      </div>

      {/* AÇÕES */}
      <div className="flex flex-col gap-3">
        <button
          onClick={applyFilters}
          className="w-full rounded-xl bg-black py-3 font-semibold text-white transition hover:bg-gray-800"
        >
          Aplicar filtros
        </button>

        <button
          onClick={clearFilters}
          className="w-full rounded-xl border py-3 text-sm font-medium hover:bg-gray-100"
        >
          Limpar tudo
        </button>
      </div>
    </aside>
  );
}
