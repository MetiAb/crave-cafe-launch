import interiorAsset from "@/assets/interior-night.jpg.asset.json";
import trioAsset from "@/assets/pasta-trio.jpg.asset.json";
import lasagnaAsset from "@/assets/lasagna.jpg.asset.json";
import loftAsset from "@/assets/interior-loft.jpg.asset.json";
import windowAsset from "@/assets/cafe-window.jpg.asset.json";
import mezzanineAsset from "@/assets/cafe-mezzanine.jpg.asset.json";
import { RESTAURANT } from "@/data/menu";

const highlights = [
  { img: trioAsset.url, title: "The pasta trio", copy: "Ragu, pesto penne and ravioli on one plate." },
  { img: lasagnaAsset.url, title: "Bubbling lasagna", copy: "Baked golden, layered with rich ragu." },
  { img: loftAsset.url, title: "Loft seating", copy: "Mezzanine tables above the café floor." },
  { img: windowAsset.url, title: "Window counter", copy: "Bar stools with a view over Gabon Street." },
  { img: mezzanineAsset.url, title: "The café floor", copy: "Marble tables, open kitchen, easy light." },
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
            src={interiorAsset.url}
            alt="Glass-fronted dining room at Crave Cafe & Restaurant on Gabon Street"
            loading="lazy"
            width={1360}
            height={1020}
            className="w-full rounded-xl object-cover shadow-[var(--shadow-lush)]"
          />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
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
          <a
            href={RESTAURANT.instagramHref}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-block text-sm text-primary underline-offset-4 transition-colors hover:text-gold hover:underline"
          >
            Follow us on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
