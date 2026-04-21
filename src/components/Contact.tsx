import { motion } from "framer-motion";
import { MessageCircle, ArrowUpRight, Sparkles } from "lucide-react";

const WHATSAPP_NUMBER = "5513996711519";
const WHATSAPP_DISPLAY = "+55 13 99671-1519";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá! Vim pelo seu portfólio e gostaria de conversar sobre um projeto.",
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export function Contact() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden px-4 py-24 md:py-32"
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-primary/15 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 -z-10 h-[280px] w-[420px] rounded-full bg-primary/10 blur-[120px]" />

      <div className="mx-auto max-w-5xl">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 flex items-center justify-center gap-2"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-foreground/60 backdrop-blur-sm">
            <Sparkles className="h-3 w-3 text-primary" />
            Contato
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-balance text-center text-4xl font-bold leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl"
        >
          Vamos transformar sua{" "}
          <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/40 bg-clip-text text-transparent">
            ideia em realidade
          </span>
          .
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-foreground/60 md:text-lg"
        >
          Conte-me sobre o projeto que está na sua cabeça. Respondo rápido e
          adoro discutir ideias — mesmo as ainda mal definidas.
        </motion.p>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-14 max-w-2xl"
        >
          <div className="group relative overflow-hidden rounded-3xl border border-foreground/10 bg-gradient-to-br from-foreground/[0.04] to-foreground/[0.01] p-8 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 md:p-10">
            {/* Hover glow */}
            <div className="pointer-events-none absolute -inset-px -z-10 rounded-3xl bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

            <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
              <div className="space-y-2">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-foreground/50">
                  Resposta rápida
                </p>
                <p className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                  WhatsApp direto
                </p>
                <p className="font-mono text-sm text-foreground/60">
                  {WHATSAPP_DISPLAY}
                </p>
              </div>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="group/btn relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-foreground px-7 py-4 text-sm font-semibold text-background transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_20px_60px_-20px_oklch(0.6_0.2_270/0.6)] md:w-auto"
              >
                {/* Animated shine */}
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-background/30 to-transparent transition-transform duration-1000 group-hover/btn:translate-x-full" />

                <MessageCircle className="h-4 w-4" />
                <span>Falar no WhatsApp</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
              </a>
            </div>

            {/* Status row */}
            <div className="mt-8 flex items-center gap-2 border-t border-foreground/10 pt-5 text-xs text-foreground/50">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Online agora — normalmente respondo em poucos minutos.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
