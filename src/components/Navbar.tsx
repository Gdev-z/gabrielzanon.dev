import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

type NavItem = {
  label: string;
  href: string;
  soon?: boolean;
};

const navItems: NavItem[] = [
  { label: "Início", href: "#inicio" },
  { label: "Projetos", href: "#projetos" },
  { label: "Sobre", href: "#sobre", soon: true },
  { label: "Contato", href: "#contato", soon: true },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => {
    if (item.soon) {
      e.preventDefault();
      return;
    }
    setOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 md:pt-6"
    >
      <nav
        className={cn(
          "relative flex w-full max-w-6xl items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-500 md:px-6 md:py-3",
          scrolled
            ? "border-foreground/10 bg-background/70 shadow-[0_8px_32px_-12px_oklch(0_0_0/0.5)] backdrop-blur-xl"
            : "border-foreground/5 bg-background/30 backdrop-blur-md",
        )}
      >
        {/* Logo */}
        <a
          href="#inicio"
          className="group flex items-center gap-2"
          aria-label="Ir para o início"
        >
          <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/40 text-sm font-black text-background shadow-[0_0_20px_-4px_oklch(0.6_0.2_270/0.6)] transition-transform duration-500 group-hover:scale-110">
            G
          </span>
          <span className="hidden text-sm font-semibold tracking-tight text-foreground sm:inline">
            Gdev<span className="text-foreground/40">.z</span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                aria-disabled={item.soon}
                className={cn(
                  "group relative inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300",
                  item.soon
                    ? "cursor-not-allowed text-foreground/40"
                    : "text-foreground/70 hover:text-foreground",
                )}
              >
                {item.label}
                {item.soon && (
                  <span className="rounded-full border border-foreground/10 bg-foreground/5 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-foreground/50">
                    em breve
                  </span>
                )}
                {!item.soon && (
                  <span className="absolute inset-x-4 -bottom-px h-px origin-left scale-x-0 bg-gradient-to-r from-transparent via-foreground/60 to-transparent transition-transform duration-300 group-hover:scale-x-100" />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-2">
          <a
            href="#contato"
            onClick={(e) => e.preventDefault()}
            className="hidden rounded-full border border-foreground/15 bg-foreground/5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-foreground/80 backdrop-blur-sm transition-all duration-300 hover:border-foreground/30 hover:bg-foreground/10 hover:text-foreground md:inline-flex"
          >
            Vamos conversar
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-foreground/10 bg-foreground/5 text-foreground transition-colors hover:bg-foreground/10 md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute inset-x-4 top-full mt-2 overflow-hidden rounded-3xl border border-foreground/10 bg-background/90 p-2 shadow-2xl backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item)}
                    aria-disabled={item.soon}
                    className={cn(
                      "flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium transition-colors",
                      item.soon
                        ? "cursor-not-allowed text-foreground/40"
                        : "text-foreground/80 hover:bg-foreground/5 hover:text-foreground",
                    )}
                  >
                    {item.label}
                    {item.soon && (
                      <span className="rounded-full border border-foreground/10 bg-foreground/5 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-foreground/50">
                        em breve
                      </span>
                    )}
                  </a>
                </li>
              ))}
              <li className="mt-1 border-t border-foreground/10 pt-2">
                <a
                  href="#contato"
                  onClick={(e) => e.preventDefault()}
                  className="flex items-center justify-center rounded-2xl bg-foreground/10 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-foreground"
                >
                  Vamos conversar
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
