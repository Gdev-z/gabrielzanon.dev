import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Play, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroSlide from "@/assets/hero-slide.png";
import heroSlide1 from "@/assets/hero-slide-1.png";
import heroSlide3 from "@/assets/hero-slide-3.jpg";
import heroSlide4 from "@/assets/hero-slide-4.jpg";

const slides = [
  {
    id: 1,
    image: heroSlide,
    title: "Criando o futuro digital da sua empresa",
    subtitle: "Interfaces modernas, intuitivas e centradas no usuário.",
  },
  {
    id: 2,
    image: heroSlide1,
    title: "Desenvolvedor Full Stack",
    subtitle:
      "Criando soluções digitais que conectam pessoas e negócios.",
  },
  {
    id: 3,
    image: heroSlide3,
    title: "Visuais Chamativos",
    subtitle:
      "Deixe de falar e comece a Mostrar",
  },
  {
    id: 4,
    image: heroSlide4,
    title: "Sua Loja Online Completa",
    subtitle:
      "E-commerce Developer · Integrações de Pagamento · Soluções escaláveis para vender mais.",
  },
  
];

export function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 6000, stopOnInteraction: false }),
  ]);
  const [selected, setSelected] = useState(0);

  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-background select-none">
      <div ref={emblaRef} className="h-full overflow-hidden">
        <div className="flex h-full">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="relative h-full min-w-0 flex-[0_0_100%]"
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: "var(--hero-overlay)" }}
              />
              <div
                className="absolute inset-0"
                style={{ background: "var(--hero-side)" }}
              />

              <div className="relative z-10 flex h-full items-end pb-32 md:items-center md:pb-0">
                <div className="container mx-auto px-6 md:px-16">
                  <div className="max-w-2xl space-y-6">
                    <span className="inline-block text-xs font-semibold uppercase tracking-[0.3em] text-primary-foreground/80">
                      Em destaque · #{slide.id}
                    </span>
                    <h1 className="text-4xl font-black leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl">
                      {slide.title}
                    </h1>
                    <p className="max-w-xl text-base text-foreground/80 md:text-lg">
                      {slide.subtitle}
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                      <a
                        href="#contato"
                        // target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block" // Garante que o link tenha o tamanho do botão
                      >
                        <Button size="lg" className="gap-2 bg-foreground text-background hover:bg-foreground/90 cursor-pointer">
                          <Play className="h-5 w-5 fill-current" />
                          Quero tirar minha ideia do papel
                        </Button>
                      </a>
                      <Button
                        size="lg"
                        variant="secondary"
                        className="gap-2 bg-foreground/20 text-foreground backdrop-blur-sm hover:bg-foreground/30"
                      >
                        <Info className="h-5 w-5" />
                        Mais Informações
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*<button
        onClick={scrollPrev}
        aria-label="Slide anterior"
        className="group absolute left-4 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-background/30 p-3 backdrop-blur-md transition hover:bg-background/60 md:block"
      >
        <ChevronLeft className="h-6 w-6 text-foreground transition group-hover:scale-110" />
      </button>
       <button
        onClick={scrollNext}
        aria-label="Próximo slide"
        className="group absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-background/30 p-3 backdrop-blur-md transition hover:bg-background/60 md:block"
      >
        <ChevronRight className="h-6 w-6 text-foreground transition group-hover:scale-110" />
      </button> */}

      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Ir para slide ${i + 1}`}
            className={`h-1 rounded-full transition-all duration-500 ${
              selected === i ? "w-10 bg-foreground" : "w-5 bg-foreground/40 hover:bg-foreground/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
