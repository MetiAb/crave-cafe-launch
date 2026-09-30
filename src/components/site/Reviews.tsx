import { Star } from "lucide-react";
import { RESTAURANT } from "@/data/menu";

const reviews = [
  {
    name: "Selam T.",
    rating: 5,
    text: "A true Italian gem. The handmade pasta is expertly crafted and the chicken is perfectly seasoned — easily the best in the area.",
  },
  {
    name: "Daniel M.",
    rating: 5,
    text: "Warm, attentive service from the owners themselves. Cozy ambiance that blends comfort with style. We keep coming back.",
  },
  {
    name: "Hana G.",
    rating: 4,
    text: "Crisp, vibrant salads and a lovely lasagna. Great spot for a leisurely lunch on Gabon Street.",
  },
];

function Stars({ n }: { n: number }) {
  return (
    <span className="flex items-center gap-0.5 text-gold" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4" fill={i < n ? "currentColor" : "none"} strokeWidth={1.5} />
      ))}
    </span>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <div className="max-w-2xl">
        <span className="eyebrow">Guest reviews</span>
        <h2 className="mt-5 font-display text-4xl leading-tight md:text-5xl">
          Rated <span className="text-gradient-ember">{RESTAURANT.rating}</span> on Google
        </h2>
        <div className="rule-gold my-7 w-40" />
        <p className="text-muted-foreground leading-relaxed">
          {RESTAURANT.reviews} reviews from guests who came for the pasta and stayed for the
          welcome.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {reviews.map((r) => (
          <figure key={r.name} className="flex flex-col gap-4 rounded-xl p-6 surface-card">
            <Stars n={r.rating} />
            <blockquote className="text-sm leading-relaxed text-muted-foreground">
              “{r.text}”
            </blockquote>
            <figcaption className="mt-auto font-display text-sm">{r.name}</figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <div className="overflow-hidden rounded-xl border border-border lg:col-span-2">
          <iframe
            title="Caffè Bella & Restaurant on Google Maps"
            src="https://www.google.com/maps?q=Caff%C3%A8+Bella+%26+Restaurant+Gabon+St+Addis+Ababa&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-72 w-full border-0"
          />
        </div>
        <a
          href={RESTAURANT.mapsHref}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col justify-center gap-3 rounded-xl p-8 text-center transition-colors surface-card hover:bg-accent"
        >
          <p className="font-display text-5xl text-gradient-ember">{RESTAURANT.rating}</p>
          <div className="flex justify-center">
            <Stars n={4} />
          </div>
          <p className="text-sm text-muted-foreground">
            Based on {RESTAURANT.reviews} Google reviews
          </p>
          <p className="text-sm text-primary">Read all reviews on Google →</p>
        </a>
      </div>
    </section>
  );
}
