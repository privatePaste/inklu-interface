import { useState } from "react"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card"

import { Badge } from "../components/ui/badge"

const fakeProducts = [
  {
    id: 1,
    name: "Product 1",
    imageUrl: "https://opopular.com.br/image/policy:1.2323780:1676230271/image.jpg?f=3x2",
    price: "$19.99",
  },
  {
    id: 2,
    name: "Product 2",
    imageUrl: "https://opopular.com.br/image/policy:1.2323780:1676230271/image.jpg?f=3x2",
    price: "$29.99",
  },
  {
    id: 3,
    name: "Product 3",
    imageUrl: "https://opopular.com.br/image/policy:1.2323780:1676230271/image.jpg?f=3x2",
    price: "$39.99",
  },
  {
    id: 4,
    name: "Product 4",
    imageUrl: "https://opopular.com.br/image/policy:1.2323780:1676230271/image.jpg?f=3x2",
    price: "$49.99",
  },
]

export default function HotProducts() {
  const [products] = useState(fakeProducts)

  return (
    <section className="mb-12 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">
          Mais visitados
        </h2>

        <Badge variant="secondary">
          Destaques
        </Badge>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <Card
            key={product.id}
            className="group overflow-hidden transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="h-48 w-full object-cover"
              />

              <Badge className="absolute left-3 top-3 bg-primary text-primary-foreground">
                Popular
              </Badge>
            </div>

            <CardHeader className="pb-2">
              <CardTitle className="text-base">
                {product.name}
              </CardTitle>
            </CardHeader>

            <CardContent className="text-sm text-muted-foreground">
              Experiência bem avaliada pelos usuários
            </CardContent>

            <CardFooter className="flex items-center justify-between">
              <span className="text-lg font-semibold">
                {product.price}
              </span>

              <button className="text-sm font-medium text-primary hover:underline">
                Ver mais
              </button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
