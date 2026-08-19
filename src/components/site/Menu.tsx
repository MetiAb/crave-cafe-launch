import { useMemo, useState } from "react";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { MENU_CATEGORIES, MENU_ITEMS, type MenuCategory } from "@/data/menu";

type Filter = "All" | MenuCategory;
const FILTERS: Filter[] = ["All", ...MENU_CATEGORIES];

export function Menu() {
  const [active, setActive] = useState<Filter>("All");

  const items = useMemo(
    () => (active === "All" ? MENU_ITEMS : MENU_ITEMS.filter((i) => i.category === active)),
    [active],
  );

  return (
    <section id="menu" className="scroll-mt-20 bg-surface/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="eyebrow">The menu</span>
          <h2 className="mt-5 font-display text-4xl md:text-5xl">Cooked fresh, priced in Birr</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Browse by course — from breakfast plates to hand-rolled pasta and stone-baked pizza.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              aria-pressed={active === f}
              className={cn(
                "rounded-full border px-5 py-2 text-sm transition-all",
                active === f
                  ? "border-transparent bg-primary text-primary-foreground shadow-[var(--shadow-glow)]"
                  : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground",
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <ul className="mt-12 grid gap-x-12 gap-y-8 md:grid-cols-2">
          {items.map((item) => (
            <li
              key={`${item.category}-${item.name}`}
              className="group border-b border-border/60 pb-5"
            >
              <div className="flex items-baseline gap-3">
                <h3 className="font-display text-lg transition-colors group-hover:text-gold">
                  {item.name}
                </h3>
                {item.signature && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-accent px-2 py-0.5 text-[10px] tracking-widest text-accent-foreground uppercase">
                    <Sparkles className="h-3 w-3" /> Signature
                  </span>
                )}
                <span className="mx-2 hidden h-px flex-1 bg-border sm:block" />
                <span className="ml-auto shrink-0 font-display text-base text-primary sm:ml-0">
                  {item.price ? `Birr ${item.price.toLocaleString()}` : "Ask us"}
                </span>
              </div>
              {item.description && (
                <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
