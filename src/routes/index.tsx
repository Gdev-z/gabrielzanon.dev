import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { HeroCarousel } from "@/components/HeroCarousel";
import { ProjectsBento } from "@/components/ProjectsBento";

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
      <ProjectsBento />
    </main>
  );
}
