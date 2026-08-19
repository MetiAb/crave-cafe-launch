import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { QuickInfo } from "@/components/site/QuickInfo";
import { About } from "@/components/site/About";
import { Menu } from "@/components/site/Menu";
import { Reservation } from "@/components/site/Reservation";
import { Footer } from "@/components/site/Footer";

const title = "Crave Cafe & Restaurant | Italian Dining on Gabon St, Addis Ababa";
const description =
  "Handmade pasta, stone-baked pizza and perfectly seasoned chicken on Gabon Street, Addis Ababa. View the menu and reserve your table at Crave Cafe & Restaurant.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "restaurant" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <Hero />
      <QuickInfo />
      <About />
      <Menu />
      <Reservation />
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            name: "Crave Cafe & Restaurant",
            servesCuisine: "Italian",
            telephone: "+251905363336",
            priceRange: "$$",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Gabon St",
              addressLocality: "Addis Ababa",
              addressCountry: "ET",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.3",
              reviewCount: "195",
            },
          }),
        }}
      />
    </main>
  );
}
