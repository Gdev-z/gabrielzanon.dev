import { ArrowUpRight, Code2, Palette, ShoppingCart, Smartphone, Sparkles } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Plataforma SaaS",
    description: "Dashboard completo com analytics em tempo real, autenticação e billing integrado.",
    tags: ["React", "TypeScript", "Stripe"],
    icon: Sparkles,
    className: "md:col-span-2 md:row-span-2",
    gradient: "from-primary/30 via-primary/10 to-transparent",
  },
  {
    id: 2,
    title: "E-commerce",
    description: "Loja online com checkout otimizado e integração de pagamentos.",
    tags: ["Next.js", "Stripe"],
    icon: ShoppingCart,
    className: "md:col-span-1",
    gradient: "from-chart-2/30 via-chart-2/10 to-transparent",
  },
  {
    id: 3,
    title: "Design System",
    description: "Biblioteca de componentes reutilizáveis e tokens semânticos.",
    tags: ["Storybook", "Figma"],
    icon: Palette,
    className: "md:col-span-1",
    gradient: "from-chart-4/30 via-chart-4/10 to-transparent",
  },
  {
    id: 4,
    title: "App Mobile",
    description: "Aplicativo cross-platform com experiência nativa fluida.",
    tags: ["React Native", "Expo"],
    icon: Smartphone,
    className: "md:col-span-1",
    gradient: "from-chart-3/30 via-chart-3/10 to-transparent",
  },
  {
    id: 5,
    title: "API & Backend",
    description: "Arquitetura escalável com APIs REST e GraphQL, banco de dados otimizado.",
    tags: ["Node.js", "PostgreSQL", "GraphQL"],
    icon: Code2,
    className: "md:col-span-2",
    gradient: "from-chart-5/30 via-chart-5/10 to-transparent",
  },
];

export function ProjectsBento() {
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
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <article
                key={project.id}
                className={`group relative overflow-hidden rounded-3xl border border-foreground/10 bg-foreground/[0.03] p-6 transition-all duration-500 hover:border-foreground/20 hover:bg-foreground/[0.06] md:p-8 ${project.className}`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60 transition-opacity duration-500 group-hover:opacity-100`}
                />
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-foreground/5 blur-3xl transition-all duration-700 group-hover:scale-150" />

                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <div className="rounded-2xl border border-foreground/10 bg-background/40 p-3 backdrop-blur-sm">
                      <Icon className="h-6 w-6 text-foreground" />
                    </div>
                    <div className="rounded-full border border-foreground/10 bg-background/40 p-2 backdrop-blur-sm transition-all duration-500 group-hover:rotate-45 group-hover:border-foreground/30">
                      <ArrowUpRight className="h-4 w-4 text-foreground" />
                    </div>
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
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
