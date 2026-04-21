import { motion } from "framer-motion";
import { Workflow, Zap, Clock, TrendingUp, Bot, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Custom n8n-inspired logo (workflow nodes connected by lines).
 * Built as inline SVG for crisp rendering at any size and full theme control.
 */
function N8nLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Connecting lines */}
      <path
        d="M16 32 H28 M36 32 H48"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M32 16 V28 M32 36 V48"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.5"
      />
      {/* Outer nodes */}
      <circle cx="10" cy="32" r="5" fill="currentColor" opacity="0.85" />
      <circle cx="54" cy="32" r="5" fill="currentColor" opacity="0.85" />
      <circle cx="32" cy="10" r="5" fill="currentColor" opacity="0.85" />
      <circle cx="32" cy="54" r="5" fill="currentColor" opacity="0.85" />
      {/* Center node */}
      <circle cx="32" cy="32" r="7" fill="currentColor" />
      <circle cx="32" cy="32" r="2.5" fill="oklch(0.08 0.01 260)" />
    </svg>
  );
}

const benefits = [
  {
    icon: Clock,
    title: "Economize horas por semana",
    description:
      "Elimine tarefas repetitivas. Deixe os fluxos rodarem 24/7 enquanto você foca no que realmente importa.",
  },
  {
    icon: Zap,
    title: "Integre tudo, sem código",
    description:
      "Conecte WhatsApp, Gmail, Notion, Sheets, CRMs, IAs e +400 ferramentas em fluxos visuais e poderosos.",
  },
  {
    icon: TrendingUp,
    title: "Escale sem contratar",
    description:
      "Aumente sua capacidade operacional sem inflar a folha. Cada automação é um colaborador silencioso.",
  },
  {
    icon: Bot,
    title: "IA integrada nos processos",
    description:
      "Combine agentes de IA com seus dados para qualificar leads, responder clientes e gerar conteúdo automaticamente.",
  },
];

export function Automations() {
  return (
    <section
      id="automacoes"
      className="relative overflow-hidden px-4 py-24 md:py-32"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-1/4 top-20 h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-10 left-10 h-[20rem] w-[20rem] rounded-full bg-primary/5 blur-[100px]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="mx-auto max-w-6xl">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="mb-8 flex items-center gap-3"
        >
          <span className="inline-flex h-8 items-center gap-2 rounded-full border border-foreground/10 bg-foreground/5 px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground/70 backdrop-blur-sm">
            <Workflow className="h-3 w-3" />
            Automações
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-foreground/15 to-transparent" />
          <span className="text-[10px] font-mono uppercase tracking-widest text-foreground/40">
            / 03
          </span>
        </motion.div>

        {/* Hero block */}
        <div className="grid gap-12 md:grid-cols-12 md:gap-10">
          {/* Left: Headline + copy */}
          <div className="md:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
              className="mb-6 text-balance text-4xl font-black leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl"
            >
              Seu negócio rodando{" "}
              <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/40 bg-clip-text text-transparent">
                no piloto automático.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mb-4 max-w-xl text-pretty text-lg font-light leading-relaxed text-foreground/80 md:text-xl"
            >
              Construo automações sob medida com{" "}
              <span className="font-medium text-foreground">n8n</span> que
              eliminam trabalho manual, conectam suas ferramentas favoritas e
              integram IA nos pontos certos do seu fluxo.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mb-8 max-w-xl text-pretty text-base font-light leading-relaxed text-foreground/60"
            >
              Da captação de leads no WhatsApp ao envio de relatórios diários:
              cada processo que se repete pode (e deve) virar um fluxo
              inteligente.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a
                href="#contato"
                className="group inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-foreground/5 px-5 py-3 text-sm font-semibold text-foreground backdrop-blur-sm transition-all duration-300 hover:border-foreground/30 hover:bg-foreground/10"
              >
                Automatizar meu processo
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>

          {/* Right: n8n logo card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="relative md:col-span-5"
          >
            <div className="group relative aspect-square overflow-hidden rounded-3xl border border-foreground/10 bg-gradient-to-br from-foreground/[0.04] to-transparent p-8 backdrop-blur-sm">
              {/* Glow */}
              <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,oklch(0.6_0.2_270/0.15),transparent_70%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

              {/* Animated rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute h-2/3 w-2/3 rounded-full border border-foreground/5" />
                <div className="absolute h-1/2 w-1/2 rounded-full border border-foreground/10" />
                <div className="absolute h-1/3 w-1/3 rounded-full border border-foreground/15" />
              </div>

              {/* Logo */}
              <div className="relative flex h-full w-full items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="text-foreground"
                >
                  <N8nLogo className="h-40 w-40 md:h-48 md:w-48" />
                </motion.div>
              </div>

              {/* Bottom label */}
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between border-t border-foreground/10 bg-background/40 px-5 py-3 backdrop-blur-sm">
                <span className="text-[10px] font-mono uppercase tracking-widest text-foreground/50">
                  powered by
                </span>
                <span className="text-sm font-bold tracking-tight text-foreground">
                  n8n
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Benefits grid */}
        <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: 0.1 + i * 0.08,
                ease: [0.4, 0, 0.2, 1],
              }}
              className={cn(
                "group relative overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/[0.02] p-6 backdrop-blur-sm",
                "transition-all duration-500 hover:-translate-y-1 hover:border-foreground/20 hover:bg-foreground/[0.04]",
              )}
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute -inset-px -z-10 rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-foreground/10 bg-foreground/5 text-foreground transition-colors duration-300 group-hover:border-foreground/20 group-hover:bg-foreground/10">
                <benefit.icon className="h-4 w-4" />
              </div>

              <h3 className="mb-2 text-base font-semibold leading-tight text-foreground">
                {benefit.title}
              </h3>
              <p className="text-sm leading-relaxed text-foreground/60">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
