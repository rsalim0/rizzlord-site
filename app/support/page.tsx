import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support | Rizzlord",
  description:
    "Get help with Rizzlord — contact support, manage or cancel your subscription, restore a purchase, delete your data, and read answers to common questions.",
  alternates: { canonical: "/support" },
  robots: { index: true, follow: true },
};

export default function Support() {
  return (
    <main className="legal-shell">
      <header className="legal-header">
        <h1 className="legal-title">Support</h1>
        <p className="legal-meta">
          Something broken, confusing, or charged twice? Write to us — a real person reads
          every message.
        </p>
      </header>

      <div className="support-card">
        <p className="support-card-label">Email us at</p>
        <a className="support-card-email" href="mailto:hi@revoks.dev">
          hi@revoks.dev
        </a>
        <p className="support-card-note">
          We reply within <strong>2 business days</strong>. Including your device model and
          the app version — shown at the bottom of the Settings screen — gets you a faster
          answer.
        </p>
      </div>

      <section className="legal-section">
        <h2>Subscriptions and billing</h2>

        <h3 className="legal-subhead">How do I cancel my subscription?</h3>
        <p>
          Subscriptions are billed by Apple, not by us, so they are cancelled in the App
          Store: open <strong>Settings → [your name] → Subscriptions → Rizzlord → Cancel
          Subscription</strong> on your iPhone. You keep access until the end of the period
          you already paid for. Cancelling during the 3-day free trial means you are never
          charged — do it at least 24 hours before the trial ends.
        </p>

        <h3 className="legal-subhead">I paid, but Rizzlord Pro isn&rsquo;t active.</h3>
        <p>
          Open <strong>Settings → Restore purchases</strong> in the app while signed in with
          the Apple ID you bought it on. If it still does not activate, email us with the
          date of purchase and we will sort it out.
        </p>

        <h3 className="legal-subhead">How do I get a refund?</h3>
        <p>
          Apple handles all refunds for App Store purchases. Request one at{" "}
          <a href="https://reportaproblem.apple.com">reportaproblem.apple.com</a>. We
          cannot issue refunds on Apple&rsquo;s behalf, but tell us what went wrong and we
          will help you make the case.
        </p>

        <h3 className="legal-subhead">Can I use Rizzlord without paying?</h3>
        <p>
          Yes. You get <strong>3 AI generations a day</strong> for free, and the built-in
          pickup line library, your favourites, and your history are unlimited and free
          forever. The subscription removes the daily cap.
        </p>
      </section>

      <section className="legal-section">
        <h2>Your data</h2>

        <h3 className="legal-subhead">What happens to my chats and screenshots?</h3>
        <p>
          To write a suggestion, Rizzlord sends the text or screenshot you provide to an AI
          service. Before that ever happens the first time, the app shows you a screen
          naming exactly what is sent and who receives it, and nothing leaves your device
          until you agree. The recipients are our own relay server,{" "}
          <strong>OpenRouter, Inc.</strong>, and <strong>OpenAI, L.L.C.</strong>, which runs
          the model. Your content is not used to train those models.
        </p>
        <p>
          You can withdraw that permission at any time under{" "}
          <strong>Settings → AI &amp; your data</strong>. The full detail is in our{" "}
          <Link href="/privacy">Privacy Policy</Link>.
        </p>

        <h3 className="legal-subhead">How do I delete my data?</h3>
        <p>
          Rizzlord has no account and no server-side profile — your history and favourites
          live on your phone. <strong>Settings → Delete account</strong> erases all of it
          immediately, and deleting the app does the same. If you would like confirmation in
          writing, email us and we will send it.
        </p>

        <h3 className="legal-subhead">Do I need an account?</h3>
        <p>
          No. There is no sign-up, no login, and no password. Rizzlord never asks for your
          email address, and we could not identify you from your usage if we wanted to.
        </p>
      </section>

      <section className="legal-section">
        <h2>Using the app</h2>

        <h3 className="legal-subhead">The AI wrote something bad.</h3>
        <p>
          Send us the screenshot. Suggestions are generated, not curated, and reports are
          how we tighten the filters. Rizzlord is entertainment — it is not relationship,
          legal, medical, or safety advice, and you should always read a suggestion before
          sending it to anyone.
        </p>

        <h3 className="legal-subhead">A generation failed or the app won&rsquo;t load.</h3>
        <p>
          Check your connection first, then close and reopen the app. If it keeps happening,
          email us with your device model, iOS version, and app version and we will look
          into it.
        </p>

        <h3 className="legal-subhead">Do you have an Android version?</h3>
        <p>Not yet. Email us and we will tell you when it lands.</p>
      </section>

      <section className="legal-section">
        <h2>Report a bug or request a feature</h2>
        <p>
          Same address: <a href="mailto:hi@revoks.dev">hi@revoks.dev</a>. For bugs, include
          what you tapped, what you expected to happen, and what happened instead.
        </p>
        <p>
          <strong>Revokslab</strong>
          <br />
          Kigali, Rwanda
        </p>
      </section>

      <p className="legal-back">
        <Link href="/">← Back to Rizzlord</Link>
      </p>
    </main>
  );
}
