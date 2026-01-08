"use client"

import { motion } from "framer-motion"
import { Button } from "../components/ui/button"
import { ArrowRight, Store } from "lucide-react"
import { fadeUp, stagger } from "../utils/motion"

export default function CtaSection() {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary/80 px-6 py-14 text-white shadow-xl"
    >
      <motion.div
        variants={stagger}
        className="mx-auto max-w-5xl text-center space-y-6"
      >
        <motion.div variants={fadeUp} className="flex justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20">
            <Store className="h-7 w-7" />
          </div>
        </motion.div>

        <motion.h2 variants={fadeUp} className="text-2xl font-bold md:text-3xl">
          Seu estabelecimento é acessível?
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="mx-auto max-w-xl text-sm text-white/90 md:text-base"
        >
          Cadastre seu espaço no Inklu Map e ajude milhares de pessoas a
          encontrarem locais inclusivos com confiança.
        </motion.p>

        <motion.div variants={fadeUp}>
          <Button
            size="lg"
            className="group gap-2 rounded-full bg-white px-8 text-primary hover:bg-white/90"
          >
            Cadastrar estabelecimento
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
