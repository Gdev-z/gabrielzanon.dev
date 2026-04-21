import { useEffect, useState, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import projectMario from "@/assets/project-mario.jpg";

const STANDARD_GRADIENT = "from-primary/30 via-primary/10 to-transparent";
const slots = [
  "md:col-span-2 md:row-span-2",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-2",
];

const projects = [
  { id: 1, title: "Sovereign Strategy", description: "Landing page premium...", tags: ["Next.js", "Tailwind"], gradient: "from-primary/30", image: project1, link: "#" },
  { id: 2, title: "Mario Brothers", description: "Visual divertido...", tags: ["HTML", "CSS"], gradient: "from-chart-2/30", image: projectMario, link: "#" },
  { id: 3, title: "Mario Brothers 3", description: "Visual divertido...", tags: ["HTML", "CSS"], gradient: "from-chart-4/30", image: projectMario, link: "#" },
  { id: 4, title: "Mario Brothers 4", description: "Visual divertido...", tags: ["HTML", "CSS"], gradient: "from-chart-3/30", image: projectMario, link: "#" },
  { id: 5, title: "Mario Brothers 5", description: "Visual divertido...", tags: ["HTML", "CSS"], gradient: "from-chart-5/30", image: projectMario, link: "#" },
];

// Lógica de rotação corrigida para evitar sobreposição de dados
function rotateProjects(arr: typeof projects) {
  const next = [...arr];
  const [p0, p1, p2, p3, p4] = next;
  // Ciclo: 0 → 4 → 3 → 2 → 1 → 0
  return [p1, p2, p4, p0, p3]; 
}

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  return isDesktop;
}

export function ProjectsBento() {
  const [order, setOrder] = useState(projects);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isDesktop = useIsDesktop();

  const reshuffle = useCallback(() => {
    setOrder((prev) => rotateProjects(prev));
  }, []);

  const startInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(reshuffle, 7000);
  }, [reshuffle]);

  useEffect(() => {
    if (isDesktop) startInterval();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [isDesktop, startInterval]);

  const handleCardClick = () => {
    if (!isDesktop) return;
    reshuffle();
    startInterval();
  };

  return (
    <section id="projetos" className="relative w-full bg-background py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-16">
        <div className="mb-16 max-w-2xl">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.3em] text-primary-foreground/60">
            Portfólio
          </span>
          <h2 className="text-4xl font-black leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Projetos em <span className="bg-yellow-400 text-black px-2 inline-block">destaque</span>
          </h2> 
          <p className="mt-4 text-base text-foreground/70 md:text-lg">
            Uma seleção de trabalhos que combinam design pensado com código de qualidade.
          </p>
        </div>

        <div className="grid auto-rows-[14rem] grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {order.map((project, index) => {
            const slotClass = slots[index] || "md:col-span-1";
            const isMainCard = isDesktop ? index === 0 : true;

            return (
              <motion.article
                key={project.id}
                layout // Ativa o motor de layout
                transition={
                  isDesktop 
                    ? { layout: { duration: 0.8, ease: [0.4, 0, 0.2, 1] } } 
                    : { duration: 0 } // No mobile, a transição é instantânea
                }
                onClick={handleCardClick}
                className={`group relative cursor-pointer overflow-hidden rounded-3xl border border-foreground/10 bg-foreground/[0.03] p-6 md:p-8 ${slotClass}`}
              >
                {/* Background e Imagens */}
                {project.image && (
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-60 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                )}
                <div className={`absolute inset-0 bg-gradient-to-br ${STANDARD_GRADIENT} opacity-60`} />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

                {/* Conteúdo do Card */}
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div className="flex items-start justify-end">
                    <div className="rounded-full border border-foreground/10 bg-background/40 p-2 backdrop-blur-sm transition-transform group-hover:rotate-45">
                      <ArrowUpRight className="h-4 w-4 text-foreground" />
                    </div>
                  </div>

                  {/* Informações: Somente visíveis se for o card principal ou mobile */}
                  <motion.div
                    layout
                    initial={false}
                    animate={{
                      opacity: isMainCard ? 1 : 0,
                      y: isMainCard ? 0 : 20,
                    }}
                    transition={{ duration: 0.4 }}
                    className="space-y-3"
                  >
                    <h3 className="text-2xl font-bold text-foreground md:text-3xl">
                      {project.title}
                    </h3>
                    <p className="max-w-md text-sm text-foreground/70">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-foreground/10 bg-background/40 px-3 py-1 text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}