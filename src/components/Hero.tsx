import Heroimage from "../assets/hero.png";

export default function Hero() {
    return (
        <section
            className="relative mb-12 overflow-hidden rounded-3xl shadow-xl"
            style={{
                backgroundImage: `url(${Heroimage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />

            <div className="relative z-10 flex flex-col items-center px-6 py-32 text-center sm:px-12">
                <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-white backdrop-blur">
                    Descubra o melhor da sua cidade
                </span>

                <h1 className="mb-6 max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                    Encontre lugares incríveis.
                    <br />
                    <span className="text-white/90">
                        Viva experiências locais de verdade.
                    </span>
                </h1>

                <p className="mb-10 max-w-2xl text-lg text-white/90 sm:text-xl">
                    Explore restaurantes, cafés, lojas e serviços perto de você.
                    Apoie negócios locais e conecte-se com a sua comunidade de forma
                    simples e confiável.
                </p>

                <div className="flex flex-col items-center gap-4 sm:flex-row">
                    <button className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-semibold text-black shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl">
                        Explorar agora
                    </button>

                    <button className="inline-flex items-center justify-center rounded-full border border-white/40 px-8 py-3 text-base font-semibold text-white backdrop-blur transition hover:bg-white/10">
                        Ver destaques
                    </button>
                </div>
            </div>

            <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        </section>
    );
}
