import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const paragraphs = [
  "Sou um Desenvolvedor Full Stack que acredita que um software excepcional vai muito além de um código limpo no back-end. Ele precisa ser sentido.",
  "Minha paixão é construir a ponte perfeita entre lógicas complexas e interfaces visivelmente impressionantes. Transito com a mesma naturalidade entre a arquitetura de dados em Node.js e a criação de componentes interativos e responsivos em React e TypeScript.",
  "Para mim, a usabilidade não é um detalhe, é a fundação. Desenvolvo sistemas robustos por baixo dos panos e experiências altamente intuitivas e fluídas na tela, garantindo que cada clique faça sentido e cada tela encante o usuário.",
];

export function About() {
  return (
    <section
      id="sobre"
      className="relative overflow-hidden px-4 py-24 md:py-32"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-[20rem] w-[20rem] rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-5xl">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="mb-8 flex items-center gap-3"
        >
          <span className="inline-flex h-8 items-center gap-2 rounded-full border border-foreground/10 bg-foreground/5 px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground/70 backdrop-blur-sm">
            <Sparkles className="h-3 w-3" />
            Sobre
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-foreground/15 to-transparent" />
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
          className="mb-12 text-balance text-4xl font-black leading-[1.05] tracking-tight text-foreground md:mb-16 md:text-6xl lg:text-7xl"
        >
          Entendo{" "}
          <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/40 bg-clip-text text-transparent">
            o
          </span>
          <br />
          Design que{" "}
          <span className="italic font-light text-foreground/60">funciona.</span>
        </motion.h2>

        {/* Paragraphs */}
        <div className="grid gap-10 md:grid-cols-12 md:gap-12">
          {/* Left rail with index */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:col-span-2 md:block"
          >
            <div className="sticky top-32 space-y-2">
              <div className="text-[10px] font-mono uppercase tracking-widest text-foreground/40">
                / 01
              </div>
              <div className="h-px w-8 bg-foreground/30" />
              <div className="pt-2 text-xs font-medium text-foreground/50">
                Sobre
              </div>
            </div>
          </motion.div>

          {/* Text column */}
          <div className="space-y-6 md:col-span-10 md:space-y-8">
            {paragraphs.map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.7,
                  ease: [0.4, 0, 0.2, 1],
                  delay: 0.15 + i * 0.1,
                }}
                className={
                  i === 0
                    ? "text-pretty text-xl font-light leading-relaxed text-foreground md:text-2xl lg:text-3xl"
                    : "text-pretty text-base font-light leading-relaxed text-foreground/70 md:text-lg lg:text-xl"
                }
              >
                {text}
              </motion.p>
            ))}

            {/* Signature line */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="mt-12 flex items-center gap-4 pt-4 origin-left"
            >
              <div className="h-px w-16 bg-foreground/40" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-foreground/50">
                Gdev.z — Full Stack & UI/UX
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
