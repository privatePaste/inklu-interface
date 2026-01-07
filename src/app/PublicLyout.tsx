import estabelecimentos from "../database/estabelecimentos.json";
import Filters from "../components/Filters";
import Hero from "../components/Hero";
import { Mapa } from "../components/Mapa";
import type { Local } from "../types/Local";
import HotProducts from "../components/HotProducts";

export default function PublicLayout() {
  const locais = estabelecimentos as Local[];

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-6 pb-10">
      <Hero />

      <div className="mt-10 flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/4">
          <Filters />
        </div>

        <div className="w-full lg:w-3/4">
          <Mapa locais={locais} />

          <HotProducts />
        </div>
      </div>
    </div>
  );
}
