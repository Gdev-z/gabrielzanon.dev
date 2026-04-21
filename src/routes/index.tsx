import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { HeroCarousel } from "@/components/HeroCarousel";
import { ProjectsBento } from "@/components/ProjectsBento";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Automations } from "@/components/Automations";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Desenvolvedor Full Stack & Designer UI/UX" },
      {
        name: "description",
        content: "Transformando ideias em soluções digitais com design moderno e código de qualidade.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div id="inicio">
        <HeroCarousel />
      </div>
        <About />
        <ProjectsBento />
        <Automations />
        <Contact />
        <Footer />
    </main>
  );
}
