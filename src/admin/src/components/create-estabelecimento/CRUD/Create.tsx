import { useState } from "react"
import api from "../../../../../api/api"
import type { Estabelecimento } from "../Types/estabelecimentos"
import { AtendimentosCheckboxGroup } from "../../../../../components/Atendimentos"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../../../../../components/ui/card"

import { Input } from "../../../../../components/ui/input"
import { Textarea } from "../../../../../components/ui/textarea"
import { Button } from "../../../../../components/ui/button"
import { Label } from "../../../../../components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../../components/ui/select"
import { Switch } from "../../../../../components/ui/switch"

type CreateEstabelecimentoDTO = Omit<
  Estabelecimento,
  "id" | "userId" | "created_at" | "updated_at" | "rating"
>

type CreateEstabelecimentoForm = Omit<
  CreateEstabelecimentoDTO,
  "latitude" | "longitude"
> & {
  latitude: string
  longitude: string
}

export default function CreateEstabelecimento() {
  const [form, setForm] = useState<CreateEstabelecimentoForm>({
    name: "",
    description: "",
    address: "",
    cuisine_type: "",
    price_range: 1,
    is_featured: false,
    latitude: "",
    longitude: "",
    image_url: "",
    phone: "",
    whatsapp: "",
    instagram: "",
    website: "",
    opening_hours: "",
    atendimento_especial: [],
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target

    if (name === "latitude" || name === "longitude") {
      if (/^-?\d*\.?\d*$/.test(value)) {
        setForm((prev) => ({ ...prev, [name]: value }))
      }
      return
    }

    if (name === "phone" || name === "whatsapp") {
      setForm((prev) => ({ ...prev, [name]: value.replace(/\D/g, "") }))
      return
    }

    setForm((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const latitude = Number(form.latitude)
    const longitude = Number(form.longitude)

    if (
      isNaN(latitude) ||
      isNaN(longitude) ||
      latitude < -90 ||
      latitude > 90 ||
      longitude < -180 ||
      longitude > 180
    ) {
      setError("Latitude ou longitude inválidas.")
      setLoading(false)
      return
    }

    try {
      await api.post("/estabelecimentos/", {
        ...form,
        latitude,
        longitude,
      }, {
        headers: {
          "x-user-id": "2d06a445-d457-495f-8aa0-f8f401e08b34",
        },
      })

      setSuccess(true)
    } catch {
      setError("Erro ao cadastrar estabelecimento.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-5">
      <Card>
        <CardHeader>
          <CardTitle>Cadastrar Estabelecimento</CardTitle>
          <CardDescription>
            Preencha as informações do local para aparecer no Inklu Map
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-8">
            <section className="space-y-4">
              <h3 className="font-semibold">Informações básicas</h3>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label>Nome</Label>
                  <Input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <Label>Tipo de culinária</Label>
                  <Input
                    name="cuisine_type"
                    value={form.cuisine_type}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <Label>Descrição</Label>
                <Textarea
                  name="description"
                  value={form.description ?? ""}
                  onChange={handleChange}
                />
              </div>
            </section>

            <section className="grid gap-4 md:grid-cols-2">
              <div>
                <Label>Faixa de preço</Label>
                <Select
                  value={String(form.price_range)}
                  onValueChange={(v) =>
                    setForm((p) => ({ ...p, price_range: Number(v) }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">$ Econômico</SelectItem>
                    <SelectItem value="2">$$</SelectItem>
                    <SelectItem value="3">$$$</SelectItem>
                    <SelectItem value="4">$$$$</SelectItem>
                    <SelectItem value="5">$$$$$ Luxo</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Endereço</Label>
                <Input
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  required
                />
              </div>
            </section>

            <section className="space-y-4">
              <h3 className="font-semibold">Contato</h3>

              <div className="grid gap-4 md:grid-cols-3">
                <Input name="phone" placeholder="Telefone" value={form.phone ?? ""} onChange={handleChange} />
                <Input name="whatsapp" placeholder="WhatsApp" value={form.whatsapp ?? ""} onChange={handleChange} />
                <Input name="instagram" placeholder="Instagram" value={form.instagram ?? ""} onChange={handleChange} />
              </div>
            </section>

            <section className="grid gap-4 md:grid-cols-2">
              <Input name="latitude" placeholder="Latitude" value={form.latitude} onChange={handleChange} />
              <Input name="longitude" placeholder="Longitude" value={form.longitude} onChange={handleChange} />
            </section>

            <div className="flex items-center justify-between rounded-lg border p-4">
              <div>
                <p className="font-medium">Estabelecimento em destaque</p>
                <p className="text-sm text-muted-foreground">
                  Aparece com prioridade no mapa
                </p>
              </div>
              <Switch
                checked={form.is_featured}
                onCheckedChange={(v) =>
                  setForm((p) => ({ ...p, is_featured: v }))
                }
              />
            </div>

            <AtendimentosCheckboxGroup
              value={form.atendimento_especial}
              onChange={(values) =>
                setForm((p) => ({ ...p, atendimento_especial: values }))
              }
            />

            <Button type="submit" disabled={loading} className="w-full">
              {loading ? "Salvando..." : "Cadastrar Estabelecimento"}
            </Button>

            {success && (
              <p className="text-sm text-green-600">
                Estabelecimento cadastrado com sucesso!
              </p>
            )}
            {error && <p className="text-sm text-red-600">{error}</p>}
          </form>
        </CardContent>
      </Card>
    </div>
  )
}