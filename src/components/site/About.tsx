import interiorImg from "@/assets/interior.jpg";
import chickenImg from "@/assets/dish-chicken.jpg";
import saladImg from "@/assets/dish-salad.jpg";
import pizzaImg from "@/assets/dish-pizza.jpg";

const highlights = [
  { img: chickenImg, title: "Seasoned to perfection", copy: "Grilled chicken with fresh pesto." },
  { img: saladImg, title: "Crisp and vibrant", copy: "Salads built on market-fresh produce." },
  { img: pizzaImg, title: "Stone-baked", copy: "Blistered crusts, generous cheese." },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <div>
          <span className="eyebrow">Our story</span>
          <h2 className="mt-5 font-display text-4xl leading-tight md:text-5xl">
            A neighbourhood table with an Italian heart
          </h2>
          <div className="rule-gold my-7 w-40" />
          <p className="text-muted-foreground leading-relaxed">
            Every plate at Crave is a celebration of authentic flavors, made even more memorable by
            the warm, attentive service from the owners and team. Guests are treated to crisp,
            vibrant salads and an inviting ambiance that blends comfort with style.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Whether you're stopping by for a leisurely lunch or a special dinner, Crave delivers a
            dining experience that is consistently delicious, delightfully cozy, and absolutely
            worth savoring.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6">
            {[
              ["4.3", "Google rating"],
              ["195", "Reviews"],
              ["70+", "Dishes served"],
            ].map(([n, l]) => (
              <div key={l}>
                <p className="font-display text-3xl text-gradient-ember">{n}</p>
                <p className="mt-1 text-xs tracking-wide text-muted-foreground uppercase">{l}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <img
            src={interiorImg}
            alt="Warm, candle-lit dining room at Crave Cafe & Restaurant"
            loading="lazy"
            width={1400}
            height={900}
            className="w-full rounded-xl object-cover shadow-[var(--shadow-lush)]"
          />
          <div className="grid grid-cols-3 gap-4">
            {highlights.map((h) => (
              <figure key={h.title} className="overflow-hidden rounded-xl surface-card">
                <img
                  src={h.img}
                  alt={h.title}
                  loading="lazy"
                  width={1000}
                  height={1000}
                  className="h-28 w-full object-cover md:h-32"
                />
                <figcaption className="p-3">
                  <p className="font-display text-sm">{h.title}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{h.copy}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
