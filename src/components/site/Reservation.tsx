import { useState, useRef, type FormEvent } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RESTAURANT } from "@/data/menu";
import { supabase } from "@/integrations/supabase/client";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80, "Name is too long"),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a reachable phone number")
    .max(25, "Phone number is too long"),
  date: z.string().min(1, "Please choose a date"),
  time: z.string().min(1, "Please choose a time"),
  guests: z.coerce.number().int().min(1, "At least 1 guest").max(40, "Please call us for 40+"),
  request: z.string().trim().max(500, "Please keep it under 500 characters").optional(),
});

const fieldClass = "mt-2 bg-background/60";

export function Reservation() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const parsed = schema.safeParse(Object.fromEntries(form));

    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      toast.error("Please check the highlighted fields");
      return;
    }

    setErrors({});
    const d = parsed.data;
    setSubmitting(true);

    const { error } = await supabase.from("reservations").insert({
      name: d.name,
      phone: d.phone,
      reservation_date: d.date,
      reservation_time: d.time,
      guests: d.guests,
      request: d.request?.trim() ? d.request.trim() : null,
    });

    setSubmitting(false);

    if (error) {
      toast.error("We couldn't send your request", {
        description: `Please call ${RESTAURANT.phone} and we'll book you in.`,
      });
      return;
    }

    formRef.current?.reset();
    toast.success("Reservation request received", {
      description: `Our team will confirm shortly. Need it faster? Call ${RESTAURANT.phone}.`,
    });
  }

  return (
    <section id="reserve" className="scroll-mt-20 px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span className="eyebrow">Reservations</span>
          <h2 className="mt-5 font-display text-4xl leading-tight md:text-5xl">
            Save your table at Crave
          </h2>
          <div className="rule-gold my-7 w-40" />
          <p className="text-muted-foreground leading-relaxed">
            Reservations are required, so send us your details and our team will confirm your
            booking. Prefer to speak with us? Call{" "}
            <a href={RESTAURANT.phoneHref} className="text-primary hover:underline">
              {RESTAURANT.phone}
            </a>
            .
          </p>
          <p className="mt-6 text-sm text-muted-foreground">
            {RESTAURANT.address} · {RESTAURANT.hours}
          </p>
        </div>

        <form ref={formRef} onSubmit={onSubmit} noValidate className="rounded-xl surface-card p-7 md:p-9">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <Label htmlFor="name">Full name</Label>
              <Input id="name" name="name" maxLength={80} placeholder="Your name" className={fieldClass} />
              {errors['name'] && <p className="mt-1 text-xs text-destructive">{errors['name']}</p>}
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" name="phone" type="tel" maxLength={25} placeholder="09xx xxx xxx" className={fieldClass} />
              {errors['phone'] && <p className="mt-1 text-xs text-destructive">{errors['phone']}</p>}
            </div>
            <div>
              <Label htmlFor="guests">Guests</Label>
              <Input id="guests" name="guests" type="number" min={1} max={40} defaultValue={2} className={fieldClass} />
              {errors['guests'] && <p className="mt-1 text-xs text-destructive">{errors['guests']}</p>}
            </div>
            <div>
              <Label htmlFor="date">Date</Label>
              <Input id="date" name="date" type="date" className={fieldClass} />
              {errors['date'] && <p className="mt-1 text-xs text-destructive">{errors['date']}</p>}
            </div>
            <div>
              <Label htmlFor="time">Time</Label>
              <Input id="time" name="time" type="time" className={fieldClass} />
              {errors['time'] && <p className="mt-1 text-xs text-destructive">{errors['time']}</p>}
            </div>
            <div className="sm:col-span-2">
              <Label htmlFor="request">Special request</Label>
              <Textarea
                id="request"
                name="request"
                rows={3}
                maxLength={500}
                placeholder="Birthday table, dietary needs, seating preference…"
                className={fieldClass}
              />
              {errors['request'] && <p className="mt-1 text-xs text-destructive">{errors['request']}</p>}
            </div>
          </div>

          <Button type="submit" size="lg" disabled={submitting} className="mt-7 w-full">
            {submitting ? "Sending request…" : "Reserve table"}
          </Button>
        </form>
      </div>
    </section>
  );
}
