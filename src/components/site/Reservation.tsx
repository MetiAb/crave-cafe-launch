import { Clock3, MapPin, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESTAURANT } from "@/data/menu";

const options = [
  {
    icon: Phone,
    title: "Call Us",
    copy: "Speak directly with our team and make your reservation over the phone.",
    action: "090 536 3336",
    href: RESTAURANT.phoneHref,
  },
  {
    icon: MessageCircle,
    title: "Message Us",
    copy: "Prefer messaging? Contact us and send us your preferred date, time, and number of guests.",
    action: "Email the restaurant",
    href: `mailto:${RESTAURANT.email}`,
  },
  {
    icon: MapPin,
    title: "Visit Us",
    copy: "Want to stop by first? Find us, check our opening hours, and plan your visit.",
    action: "Get directions",
    href: RESTAURANT.mapsHref,
  },
];

export function Reservation() {
  return (
    <section id="reserve" className="scroll-mt-20 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <span className="eyebrow">Reservations</span>
          <h2 className="mt-5 font-display text-4xl leading-tight md:text-5xl">
            Reserve Your Table
          </h2>
          <div className="rule-gold my-7 w-40" />
          <p className="text-muted-foreground leading-relaxed">
            Planning a visit to Crave Café? We recommend reserving your table in advance so we can
            have everything ready for you.
          </p>
          <p className="mt-6 font-display text-xl">Choose how you&apos;d like to reserve:</p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {options.map(({ icon: Icon, title, copy, action, href }) => (
            <article key={title} className="flex flex-col rounded-xl p-7 surface-card">
              <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
              <h3 className="mt-6 font-display text-2xl">{title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{copy}</p>
              <Button asChild variant="outline" className="mt-7 w-full">
                <a
                  href={href}
                  target={title === "Visit Us" ? "_blank" : undefined}
                  rel={title === "Visit Us" ? "noreferrer" : undefined}
                >
                  {action}
                </a>
              </Button>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
          <a href={RESTAURANT.phoneHref} className="flex items-center gap-2 hover:text-foreground">
            <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
            {RESTAURANT.phone}
          </a>
          <a href={RESTAURANT.phoneAltHref} className="flex items-center gap-2 hover:text-foreground">
            <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
            {RESTAURANT.phoneAlt}
          </a>
          <span className="flex items-center gap-2">
            <Clock3 className="h-4 w-4 text-primary" aria-hidden="true" />
            {RESTAURANT.hours}
          </span>
        </div>
      </div>
    </section>
  );
}
