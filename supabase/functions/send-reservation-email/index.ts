const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

type Reservation = {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  request: string | null;
};

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const reservation = (await request.json()) as Reservation;
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    const recipient = Deno.env.get("RESERVATION_NOTIFICATION_EMAIL") ?? "metiabera24@gmail.com";

    if (!resendApiKey) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Crave Cafe bookings <onboarding@resend.dev>",
        to: [recipient],
        subject: `New table reservation for ${reservation.date}`,
        text: [
          "New reservation request",
          `Name: ${reservation.name}`,
          `Phone: ${reservation.phone}`,
          `Date: ${reservation.date}`,
          `Time: ${reservation.time}`,
          `Guests: ${reservation.guests}`,
          `Special request: ${reservation.request ?? "None"}`,
        ].join("\n"),
      }),
    });

    if (!response.ok) {
      throw new Error(`Resend returned ${response.status}`);
    }

    return new Response(JSON.stringify({ ok: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Unable to send reservation notification" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});