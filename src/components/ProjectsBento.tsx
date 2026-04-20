import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import projectMario from "@/assets/project-mario.jpg";

// Slots fixos do bento grid — definem o TAMANHO de cada posição.
// O conteúdo (projetos) gira entre esses slots, assumindo o tamanho da posição.
const slots = [
  "md:col-span-2 md:row-span-2",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-2",
];

const projects = [
  {
    id: 1,
    title: "Sovereign Strategy",
    description:
      "Landing page premium para consultoria de patrimônio, com design responsivo e identidade sofisticada em dark mode.",
    tags: ["Next.js", "Tailwind", "Responsive"],
    gradient: "from-primary/30 via-primary/10 to-transparent",
    image: project1,
    link: "https://github.com/Gdev-z/sovereign-strategy-refined",
  },
  {
    id: 2,
    title: "Mario Brothers",
    description:
      "Landing page temática dos irmãos encanadores Mario e Luigi, com visual divertido e CTA de contato.",
    tags: ["HTML", "CSS", "JavaScript"],
    gradient: "from-chart-2/30 via-chart-2/10 to-transparent",
    image: projectMario,
    link: "https://gdev-z.github.io/Mario-Brothers/",
  },
  {
    id: 3,
    title: "Mario Brothers",
    description:
      "Landing page temática dos irmãos encanadores Mario e Luigi, com visual divertido e CTA de contato.",
    tags: ["HTML", "CSS", "JavaScript"],
    gradient: "from-chart-4/30 via-chart-4/10 to-transparent",
    image: projectMario,
    link: "https://gdev-z.github.io/Mario-Brothers/",
  },
  {
    id: 4,
    title: "Mario Brothers",
    description:
      "Landing page temática dos irmãos encanadores Mario e Luigi, com visual divertido e CTA de contato.",
    tags: ["HTML", "CSS", "JavaScript"],
    gradient: "from-chart-3/30 via-chart-3/10 to-transparent",
    image: projectMario,
    link: "https://gdev-z.github.io/Mario-Brothers/",
  },
  {
    id: 5,
    title: "Mario Brothers",
    description:
      "Landing page temática dos irmãos encanadores Mario e Luigi, com visual divertido e CTA de contato.",
    tags: ["HTML", "CSS", "JavaScript"],
    gradient: "from-chart-5/30 via-chart-5/10 to-transparent",
    image: projectMario,
    link: "https://gdev-z.github.io/Mario-Brothers/",
  },
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  if (a.every((v, i) => v === arr[i]) && a.length > 1) {
    [a[0], a[1]] = [a[1], a[0]];
  }
  return a;
}

export function ProjectsBento() {
  // Guarda apenas a ORDEM dos projetos. Os slots permanecem fixos.
  const [order, setOrder] = useState(projects);

  const reshuffle = useCallback(() => {
    setOrder((prev) => shuffle(prev));
  }, []);

  useEffect(() => {
    const id = setInterval(reshuffle, 5000);
    return () => clearInterval(id);
  }, [reshuffle]);

  const handleCardClick = () => {
    reshuffle();
  };

  return (
    <section id="projetos" className="relative w-full bg-background py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-16">
        <div className="mb-16 max-w-2xl">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.3em] text-primary-foreground/60">
            Portfólio
          </span>
          <h2 className="text-4xl font-black leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Projetos em destaque
          </h2>
          <p className="mt-4 text-base text-foreground/70 md:text-lg">
            Uma seleção de trabalhos que combinam design pensado com código de qualidade.
          </p>
        </div>

        <div className="grid auto-rows-[14rem] grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {order.map((project, index) => {
            const slotClass = slots[index] ?? "md:col-span-1";
            return (
              <motion.article
                key={project.id}
                layout
                whileTap={{ scale: 0.98 }}
                transition={{
                  layout: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
                  scale: { duration: 0.3 },
                }}
                onClick={handleCardClick}
                className={`group relative cursor-pointer overflow-hidden rounded-3xl border border-foreground/10 bg-foreground/[0.03] p-6 transition-colors duration-500 hover:border-foreground/20 hover:bg-foreground/[0.06] md:p-8 ${slotClass}`}
              >
                {project.image && (
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-40 transition-all duration-700 group-hover:scale-105 group-hover:opacity-60"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                )}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60 transition-opacity duration-500 group-hover:opacity-100`}
                />
                {project.image && (
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                )}
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-foreground/5 blur-3xl transition-all duration-700 group-hover:scale-150" />

                <motion.div layout="position" className="relative z-10 flex h-full flex-col justify-between">
                  <div className="flex items-start justify-end">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Abrir projeto ${project.title}`}
                        onClick={(e) => e.stopPropagation()}
                        className="rounded-full border border-foreground/10 bg-background/40 p-2 backdrop-blur-sm transition-all duration-500 group-hover:rotate-45 group-hover:border-foreground/30"
                      >
                        <ArrowUpRight className="h-4 w-4 text-foreground" />
                      </a>
                    ) : (
                      <div className="rounded-full border border-foreground/10 bg-background/40 p-2 backdrop-blur-sm transition-all duration-500 group-hover:rotate-45 group-hover:border-foreground/30">
                        <ArrowUpRight className="h-4 w-4 text-foreground" />
                      </div>
                    )}
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold leading-tight tracking-tight text-foreground md:text-3xl">
                      {project.title}
                    </h3>
                    <p className="max-w-md text-sm text-foreground/70 md:text-base">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-foreground/10 bg-background/40 px-3 py-1 text-xs font-medium text-foreground/80 backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
