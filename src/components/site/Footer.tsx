import { Instagram, MapPin, Phone } from "lucide-react";
import { RESTAURANT } from "@/data/menu";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-14 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/images/favicon.png"
              alt="Caffè Bella & Restaurant logo"
              width={96}
              height={96}
              loading="lazy"
              className="h-12 w-12 rounded-full object-cover"
            />
            <p className="font-display text-2xl">
              Caffè Bella<span className="text-gradient-ember"> &amp; Restaurant</span>
            </p>
          </div>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            Italian kitchen and café on Gabon Street, Addis Ababa. Breakfast, lunch and dinner 
            served with warmth.
          </p>
        </div>

        <div className="space-y-2 text-sm">
          <a
            href={RESTAURANT.mapsHref}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <MapPin className="h-4 w-4 text-primary" /> {RESTAURANT.address}
          </a>
          <a
            href={RESTAURANT.phoneHref}
            className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <Phone className="h-4 w-4 text-primary" /> {RESTAURANT.phone}
          </a>
          <a
            href={RESTAURANT.phoneAltHref}
            className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <Phone className="h-4 w-4 text-primary" /> {RESTAURANT.phoneAlt}
          </a>
          <a
            href={RESTAURANT.instagramHref}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <Instagram className="h-4 w-4 text-primary" /> {RESTAURANT.instagram}
          </a>
          <p className="text-muted-foreground">{RESTAURANT.hours}</p>
        </div>
      </div>
      <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Caffè Bella &amp; Restaurant. All rights reserved.
      </div>
    </footer>
  );
}
