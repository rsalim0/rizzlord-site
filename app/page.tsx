import Image from "next/image";
import StoreBadge from "react-store-badge";

const siteUrl = "https://rizzlord.app";

const features = [
  {
    title: "AI pickup lines that don't suck",
    body: "Tap into a model trained for flirty, funny, and natural openers. No more copy-pasted lines from a 2014 Reddit thread.",
  },
  {
    title: "Reply generator for Tinder, Hinge & Bumble",
    body: "Paste a screenshot or a chat snippet and Rizzlord drafts replies that match her tone, energy, and the moment in the conversation.",
  },
  {
    title: "Context-aware rizz",
    body: "Feed it the bio, the prompt, the last message. Rizzlord reads the room and writes something only you could send.",
  },
  {
    title: "Switch the vibe in one tap",
    body: "Smooth, playful, dry, romantic, unhinged. Re-roll until it sounds like you — then send.",
  },
];

const steps = [
  {
    n: "01",
    title: "Drop the context",
    body: "Paste a chat, snap a screenshot, or describe the person. The more context, the sharper the rizz.",
  },
  {
    n: "02",
    title: "Pick a vibe",
    body: "Choose smooth, playful, dry, or romantic. Rizzlord drafts options instantly.",
  },
  {
    n: "03",
    title: "Send with confidence",
    body: "Copy the line you like, tweak it if you want, and send. Save the wins to your history.",
  },
];

const faqs = [
  {
    q: "What is Rizzlord?",
    a: "Rizzlord is an AI wingman app that generates pickup lines, openers, and replies for dating apps and real-life conversations. It runs on iOS and Android with a 3-day free trial.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes. New subscribers get a 3-day free trial. After the trial, your subscription auto-renews on the weekly or monthly plan you chose unless you cancel at least 24 hours before it ends.",
  },
  {
    q: "How much does Rizzlord cost?",
    a: "Rizzlord offers weekly and monthly auto-renewing subscriptions. The current price is shown in the App Store or Google Play at the moment of purchase.",
  },
  {
    q: "Which dating apps does Rizzlord work with?",
    a: "Anywhere you type to another human — Tinder, Hinge, Bumble, Snapchat, Instagram DMs, iMessage, or in person. Paste the context and Rizzlord drafts a line for you.",
  },
  {
    q: "Does Rizzlord work for guys and girls?",
    a: "Yes. Rizzlord works for any user 17 or older who wants help writing flirty, funny, or smooth messages.",
  },
  {
    q: "How is my chat data handled?",
    a: "Your inputs are sent to OpenAI to generate suggestions and are used to provide and improve the service. See the privacy policy for the full breakdown of what we collect, how long we keep it, and your rights.",
  },
];

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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
            <p className="hero-tag">
              AI rizz, pickup lines, and smooth replies for Tinder, Hinge, Bumble &amp; IRL.
              <br />
              Free for 3 days on iOS &amp; Android.
            </p>
          </div>

          <div className="app-store-badge">
            <StoreBadge name="Rizzlord" appStoreUrl="#" />
          </div>
        </section>
      </main>

      <section className="seo-section" aria-labelledby="features-heading">
        <div className="seo-inner">
          <p className="seo-eyebrow">Why Rizzlord</p>
          <h2 id="features-heading" className="seo-heading">
            The AI wingman built for actual conversations
          </h2>
          <p className="seo-lede">
            Other &ldquo;rizz apps&rdquo; spit out the same recycled one-liners. Rizzlord reads the
            chat, picks up on tone, and drafts replies that sound like you on a good day.
          </p>

          <ul className="feature-grid">
            {features.map((f) => (
              <li key={f.title} className="feature-card">
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-body">{f.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="seo-section" aria-labelledby="how-heading">
        <div className="seo-inner">
          <p className="seo-eyebrow">How it works</p>
          <h2 id="how-heading" className="seo-heading">
            Three taps to a smoother conversation
          </h2>

          <ol className="step-list">
            {steps.map((s) => (
              <li key={s.n} className="step-item">
                <span className="step-num">{s.n}</span>
                <div>
                  <h3 className="step-title">{s.title}</h3>
                  <p className="step-body">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="seo-section" aria-labelledby="faq-heading">
        <div className="seo-inner">
          <p className="seo-eyebrow">FAQ</p>
          <h2 id="faq-heading" className="seo-heading">
            Frequently asked questions
          </h2>

          <div className="faq-list">
            {faqs.map((f) => (
              <details key={f.q} className="faq-item">
                <summary className="faq-q">{f.q}</summary>
                <p className="faq-a">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
