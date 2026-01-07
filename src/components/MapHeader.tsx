export default function MapHeader({
    total,
    viewMode,
    onChangeView
}: {
    total: number;
    viewMode: "map" | "list";
    onChangeView: (mode: "map" | "list") => void;
}) {
    return (
        <div className="flex items-center justify-between px-4 py-3">
            <div>
                <h1 className="text-lg font-semibold">Restaurantes próximos</h1>
                <span className="text-sm text-gray-500">
                    {total} resultados encontrados
                </span>
            </div>

            <div className="flex rounded-full border border-gray-200 bg-white p-1 shadow-sm">
                <button
                    onClick={() => onChangeView("map")}
                    className={`rounded-full px-4 py-1.5 text-sm transition ${viewMode === "map"
                            ? "bg-black text-white"
                            : "text-gray-600 hover:text-black"
                        }`}
                >
                    🗺️ Mapa
                </button>

                <button
                    onClick={() => onChangeView("list")}
                    className={`rounded-full px-4 py-1.5 text-sm transition ${viewMode === "list"
                            ? "bg-black text-white"
                            : "text-gray-600 hover:text-black"
                        }`}
                >
                    📋 Lista
                </button>
            </div>
        </div>
    );
}
