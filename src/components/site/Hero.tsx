import { Star } from "lucide-react";
import heroImg from "@/assets/hero-pasta.jpg";
import { Button } from "@/components/ui/button";
import { RESTAURANT } from "@/data/menu";

export function Hero() {
  return (
    <header className="relative isolate min-h-[92vh] overflow-hidden">
      <img
        src={heroImg}
        alt="Handmade tagliatelle with slow-cooked ragu served at Crave Cafe & Restaurant"
        width={1600}
        height={1104}
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="hero-veil absolute inset-0 -z-10" />

      <nav className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-7">
        <span className="font-display text-xl tracking-wide">
          Crave<span className="text-gradient-ember"> Cafe</span>
        </span>
        <div className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#menu" className="transition-colors hover:text-foreground">
            Menu
          </a>
          <a href="#about" className="transition-colors hover:text-foreground">
            Our Story
          </a>
          <a href="#reserve" className="transition-colors hover:text-foreground">
            Reservations
          </a>
        </div>
        <Button asChild size="sm">
          <a href={RESTAURANT.phoneHref}>Call us</a>
        </Button>
      </nav>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col justify-center px-6 pt-16 pb-28 md:pt-28">
        <span className="eyebrow">Italian kitchen · Gabon Street, Addis Ababa</span>
        <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[1.05] md:text-7xl">
          Pasta made by hand,
          <span className="block text-gradient-ember">served like family.</span>
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
          A true Italian gem tucked away on Gabon Street — expertly crafted pasta, perfectly
          seasoned chicken, crisp vibrant salads and an ambiance that blends comfort with style.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <Button asChild size="lg">
            <a href="#reserve">Reserve a table</a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="#menu">Explore the menu</a>
          </Button>
        </div>

        <div className="mt-10 flex items-center gap-3 text-sm text-muted-foreground">
          <span className="flex items-center gap-1 text-gold">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="h-4 w-4"
                fill={i < 4 ? "currentColor" : "none"}
                strokeWidth={1.5}
              />
            ))}
          </span>
          <span>
            {RESTAURANT.rating} · {RESTAURANT.reviews} Google reviews
          </span>
        </div>
      </div>
    </header>
  );
}
