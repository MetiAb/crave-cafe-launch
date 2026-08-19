import { Clock, MapPin, Phone, Utensils } from "lucide-react";
import { RESTAURANT } from "@/data/menu";

const items = [
  {
    icon: MapPin,
    label: "Find us",
    value: RESTAURANT.address,
    href: RESTAURANT.mapsHref,
    action: "Get directions",
  },
  {
    icon: Phone,
    label: "Call or order",
    value: RESTAURANT.phone,
    href: RESTAURANT.phoneHref,
    action: "Tap to call",
  },
  {
    icon: Clock,
    label: "Opening hours",
    value: RESTAURANT.hours,
    action: "Breakfast · Lunch · Dinner",
  },
  {
    icon: Utensils,
    label: "Good to know",
    value: "Reservations required",
    action: "All you can eat · Happy-hour food",
  },
];

export function QuickInfo() {
  return (
    <section aria-label="Visitor information" className="relative z-20 -mt-16 px-6">
      <div className="mx-auto grid max-w-6xl gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, label, value, href, action }) => {
          const body = (
            <div className="flex h-full flex-col gap-3 bg-surface p-6 transition-colors hover:bg-accent">
              <Icon className="h-5 w-5 text-primary" strokeWidth={1.6} />
              <div>
                <p className="eyebrow">{label}</p>
                <p className="mt-2 font-display text-lg leading-snug">{value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{action}</p>
              </div>
            </div>
          );
          return href ? (
            <a key={label} href={href} target="_blank" rel="noreferrer" className="block">
              {body}
            </a>
          ) : (
            <div key={label}>{body}</div>
          );
        })}
      </div>
    </section>
  );
}
