import { Search, Star, DollarSign, Clock } from "lucide-react"

export default function Navbar() {
  return (
    <div className="mx-auto w-[95%] max-w-5xl rounded-2xl border border-border bg-background/80 backdrop-blur-md shadow-sm">
      <div className="flex flex-wrap items-center gap-3 p-3">

        <div className="flex flex-1 items-center gap-2 rounded-xl border border-input bg-background px-4 py-2">
          <Search className="size-4 text-muted-foreground" />

          <input
            type="text"
            placeholder="Buscar restaurante acessível"
            className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
        </div>

        <select className="flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-2 text-sm text-foreground transition hover:bg-accent hover:text-accent-foreground">
          <option>Regiões</option>
          <option>São paulo</option>
          <option>Rio de janeiro</option>
          <option>Mato grosso</option>
          <option>Caribe</option>
        </select>

        <button className="flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-2 text-sm text-foreground transition hover:bg-accent hover:text-accent-foreground">
          <DollarSign className="size-4" />
          Preço
        </button>

        <button className="flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-2 text-sm text-foreground transition hover:bg-accent hover:text-accent-foreground">
          <Clock className="size-4" />
          Horário
        </button>

        <button className="rounded-full bg-primary px-6 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-90">
          Buscar
        </button>
      </div>
    </div>
  )
}
