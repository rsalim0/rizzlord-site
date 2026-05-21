import Image from "next/image";
import StoreBadge from "react-store-badge";

const siteUrl = "https://rizzlord.app";

const appSchema = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "Rizzlord",
  alternateName: "Rizzlord AI Wingman",
  applicationCategory: "LifestyleApplication",
  operatingSystem: "iOS, Android",
  description:
    "Rizzlord is the #1 AI wingman app. Generate rizz, pickup lines, and smooth replies for Tinder, Hinge, Bumble, and IRL conversations. 3-day free trial.",
  url: siteUrl,
  offers: [
    {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "3-day free trial, then weekly or monthly auto-renewing subscription.",
    },
  ],
  publisher: {
    "@type": "Organization",
    name: "Revokslab",
    url: siteUrl,
    email: "hi@revoks.dev",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kigali",
      addressCountry: "RW",
    },
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Revokslab",
  url: siteUrl,
  logo: `${siteUrl}/rizzlord-logo.svg`,
  email: "hi@revoks.dev",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kigali",
    addressCountry: "RW",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />

      <main className="hero-shell">
        <div className="hero-glow hero-glow-top" aria-hidden="true" />
        <div className="hero-glow hero-glow-bottom" aria-hidden="true" />

        <section className="hero-card">
          <Image
            src="/rizzlord-logo.svg"
            alt="Rizzlord — AI Wingman app logo"
            className="hero-logo"
            width={240}
            height={240}
            priority
          />

          <div className="hero-copy">
            <h1 className="hero-title">Rizzlord</h1>
            <p className="hero-subtitle">#1 AI Wingman</p>
          </div>

          <div className="app-store-badge">
            <StoreBadge name="Rizzlord" appStoreUrl="#" />
          </div>
        </section>
      </main>
    </>
  );
}
