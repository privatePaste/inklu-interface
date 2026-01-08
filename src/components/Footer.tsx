import { Instagram, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="mt-20 border-t bg-background px-6 py-12">
      <div className="mx-auto max-w-6xl grid gap-10 md:grid-cols-4">

        {/* Marca */}
        <div className="space-y-3">
          <h3 className="text-lg font-bold">Inklu Map</h3>
          <p className="text-sm text-muted-foreground">
            Conectando pessoas a lugares acessíveis, inclusivos e confiáveis.
          </p>
        </div>

        {/* Navegação */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold">Explorar</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Mapa</li>
            <li>Estabelecimentos</li>
            <li>Destaques</li>
            <li>Categorias</li>
          </ul>
        </div>

        {/* Institucional */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold">Sobre</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Sobre o projeto</li>
            <li>Acessibilidade</li>
            <li>Contato</li>
            <li>Política de privacidade</li>
          </ul>
        </div>

        {/* Contato */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold">Contato</h4>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Mail className="h-4 w-4" />
            contato@inklumap.com
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            Brasil
          </div>

          <div className="flex gap-3 pt-2">
            <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Inklu Map. Todos os direitos reservados.
      </div>
    </footer>
  )
}
