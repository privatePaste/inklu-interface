"use client"

import { motion } from "framer-motion"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Mail } from "lucide-react"
import { fadeUp, stagger } from "../utils/motion"

export default function NewsletterSection() {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="rounded-3xl border bg-background px-6 py-12 shadow-sm"
    >
      <motion.div
        variants={stagger}
        className="mx-auto max-w-4xl space-y-6 text-center"
      >
        <motion.div variants={fadeUp} className="flex justify-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-muted">
            <Mail className="h-6 w-6 text-muted-foreground" />
          </div>
        </motion.div>

        <motion.h3
          variants={fadeUp}
          className="text-xl font-semibold md:text-2xl"
        >
          Receba novidades sobre locais acessíveis
        </motion.h3>

        <motion.p
          variants={fadeUp}
          className="mx-auto max-w-xl text-sm text-muted-foreground"
        >
          Novos estabelecimentos, recursos de acessibilidade e atualizações do
          Inklu Map direto no seu e-mail.
        </motion.p>

        <motion.form
          variants={fadeUp}
          className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <Input
            type="email"
            placeholder="Digite seu e-mail"
            className="rounded-full"
          />

          <Button className="rounded-full px-6">
            Inscrever-se
          </Button>
        </motion.form>

        <motion.span
          variants={fadeUp}
          className="block text-xs text-muted-foreground"
        >
          Prometemos não enviar spam.
        </motion.span>
      </motion.div>
    </motion.section>
  )
}
