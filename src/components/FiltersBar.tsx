export default function FiltersBars() {
  return (
    <div className="mx-auto w-[95%] max-w-4xl rounded-full bg-white/90 backdrop-blur-md shadow-lg border border-gray-100 px-4 py-3">
      <div className="flex flex-wrap items-center gap-3">

        <input
          type="text"
          placeholder="Buscar restaurante"
          className="flex-1 min-w-[200px] rounded-full border border-gray-200 px-5 py-2 text-sm outline-none focus:border-black"
        />

        <button className="chip">⭐ Avaliação</button>
        <button className="chip">💲 Preço</button>
        <button className="chip">🕒 Horário</button>

        <button className="rounded-full bg-black px-5 py-2 text-sm font-semibold text-white hover:bg-gray-800">
          Buscar
        </button>
      </div>
    </div>
  );
}
