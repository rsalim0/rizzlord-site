import Image from "next/image";
import StoreBadge from "react-store-badge";

export default function Home() {
  return (
    <main className="hero-shell">
      <div className="hero-glow hero-glow-top" aria-hidden="true" />
      <div className="hero-glow hero-glow-bottom" aria-hidden="true" />

      <section className="hero-card">
        <Image
          src="/rizzlord-logo.svg"
          alt="Rizzlord logo"
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
  );
}
