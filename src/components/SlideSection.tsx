import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { carouselItem } from "../utils/motion"

const slides = [
    {
        image: "https://m.ahstatic.com/is/image/accorhotels/baladas-em-sp-os-melhores-lugares-para-aproveitar-a-noite-paulistana-2024-2:3by2?fmt=jpg&op_usm=1.75,0.3,2,0&resMode=sharp2&iccEmbed=true&icc=sRGB&dpr=on,1.3&wid=335&hei=223&qlt=80",
        title: "Baladas",
        description: "Encontre restaurantes preparados para receber todos.",
    },
    {
        image: "https://servircomrequinte.francobachot.com.br/wp-content/uploads/2018/10/230521-decoracao-de-bistro-o-que-um-restaurante-frances-deve-ter-825x540.jpg",
        title: "Bistrôs",
        description: "Filtros inteligentes focados em acessibilidade.",
    },
    {
        image: "https://b3577058.smushcdn.com/3577058/wp-content/uploads/2025/05/Melhores-restaurantes-em-Novo-Hamburgo-Beni-Cozinha-Criativa-720x511.webp?lossy=1&strip=0&webp=1",
        title: "Restaurantes",
        description: "Mais do que mapas, cuidamos de pessoas.",
    },
    {
        image: "https://img.freepik.com/fotos-gratis/parque-com-um-caminho-de-madeira-e-bancos_1137-254.jpg?semt=ais_hybrid&w=740&q=80",
        title: "Parques",
        description: "Tecnologia feita para pessoas reais.",
    },
    {
        image: "https://revistaprojeto.com.br/wp-content/uploads/2018/05/pdt_ft1_13964-770x458.jpg",
        title: "Praças",
        description: "Encontre restaurantes preparados para receber todos.",
    }
]

export default function SlideCarousel() {
    const carouselRef = useRef<HTMLDivElement>(null)
    const [width, setWidth] = useState(0)

    useEffect(() => {
        if (!carouselRef.current) return

        setWidth(
            carouselRef.current.scrollWidth -
            carouselRef.current.offsetWidth
        )
    }, [])

    return (
        <section className="mt-20">
            <div className="mb-8 max-w-4xl">
                <h2 className="text-3xl font-semibold tracking-tight">
                    Descubra tambem na Inklu Map
                </h2>
                <p className="mt-2 text-muted-foreground">
                    Inclusão, tecnologia e experiência em cada detalhe.
                </p>
            </div>

            <div className="overflow-hidden">
                <motion.div
                    ref={carouselRef}
                    className="flex gap-6 cursor-grab active:cursor-grabbing"
                    drag="x"
                    dragConstraints={{ left: -width, right: 0 }}
                >
                    {slides.map((slide, index) => (
                        <motion.div
                            key={index}
                            variants={carouselItem}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="relative min-w-[320px] overflow-hidden rounded-3xl shadow-xl"
                        >
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="h-[420px] w-full object-cover"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                            <div className="absolute bottom-0 p-6 text-white">
                                <h3 className="text-xl font-semibold">
                                    {slide.title}
                                </h3>
                                <p className="mt-2 text-sm text-white/90">
                                    {slide.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
