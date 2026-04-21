import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const socials = [
  { label: "LinkedIn", href: "#", icon: Linkedin },
  { label: "GitHub", href: "#", icon: Github },
  { label: "Email", href: "#", icon: Mail },
];

const secondary = [
  { label: "Projetos", href: "#projetos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-foreground/10 px-4 py-16 md:py-20">
      {/* Subtle ambient glow */}
      <div className="pointer-events-none absolute inset-x-0 -top-40 -z-10 mx-auto h-80 max-w-4xl rounded-full bg-primary/5 blur-[120px]" />

      <div className="mx-auto max-w-6xl">
        {/* Top row */}
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          {/* Brand block */}
          <div className="max-w-sm space-y-4">
            <a href="#inicio" className="group inline-flex items-center gap-2.5">
              <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/40 text-sm font-black text-background shadow-[0_0_20px_-4px_oklch(0.6_0.2_270/0.6)] transition-transform duration-500 group-hover:scale-110">
                G
              </span>
              <span className="text-base font-semibold tracking-tight text-foreground">
                Gdev<span className="text-foreground/40">.z</span>
              </span>
            </a>
            <p className="text-sm leading-relaxed text-foreground/60">
              Desenvolvedor Full Stack & Designer UI/UX. Construindo a ponte
              entre código robusto e experiências encantadoras.
            </p>
          </div>

          {/* Links grid */}
          <div className="grid grid-cols-2 gap-10 sm:gap-16">
            <div>
              <h3 className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground/50">
                Navegação
              </h3>
              <ul className="space-y-3">
                {secondary.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="group inline-flex items-center gap-1 text-sm text-foreground/80 transition-colors hover:text-foreground"
                    >
                      {item.label}
                      <ArrowUpRight className="h-3 w-3 -translate-y-px opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground/50">
                Conecte-se
              </h3>
              <ul className="space-y-3">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-2 text-sm text-foreground/80 transition-colors hover:text-foreground"
                    >
                      <s.icon className="h-3.5 w-3.5 text-foreground/50 transition-colors group-hover:text-foreground" />
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-foreground/15 to-transparent" />

        {/* Bottom row */}
        <div className="flex flex-col items-start justify-between gap-4 text-xs text-foreground/50 sm:flex-row sm:items-center">
          <p className="font-mono">
            © {year} Gdev.z — Todos os direitos reservados.
          </p>
          <p className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            Disponível para novos projetos
          </p>
        </div>
      </div>
    </footer>
  );
}
