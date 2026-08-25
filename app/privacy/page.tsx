import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Rizzlord",
  description:
    "How Rizzlord collects, uses, shares, and protects information when you use the Rizzlord AI Wingman app and website.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicy() {
  return (
    <main className="legal-shell">
      <header className="legal-header">
        <h1 className="legal-title">Privacy Policy</h1>
        <p className="legal-meta">Effective date: August 25, 2026</p>
      </header>

      <section className="legal-section">
        <h2>1. Introduction</h2>
        <p>
          This Privacy Policy explains how <strong>Revokslab</strong> (&ldquo;Rizzlord,&rdquo;
          &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses, discloses, and
          protects information about you when you use the Rizzlord mobile application, our website at
          rizzlordai.app, and any related services that link to this Policy (together, the
          &ldquo;Service&rdquo;). Rizzlord is an AI &ldquo;wingman&rdquo; that generates pickup lines,
          openers, replies, and other conversation suggestions to help you communicate in dating and
          social contexts.
        </p>
        <p>
          We know the content you bring to Rizzlord can be personal and sensitive. We&rsquo;ve tried
          to write this Policy in plain English so you know exactly what happens with that
          information. By using the Service you agree to the practices described here. If you do not
          agree with this Policy, please do not use the Service.
        </p>
        <p>
          Questions, requests, or complaints can be sent at any time to{" "}
          <a href="mailto:hi@revoks.dev">hi@revoks.dev</a>.
        </p>
      </section>

      <section className="legal-section">
        <h2>2. Information we collect</h2>
        <p>
          Rizzlord collects far less than most apps, so it is worth being precise about the short
          list. We collect what you give us when you ask for a suggestion, a small amount of
          technical data needed to operate and bill the Service, and anything you choose to put in an
          email to us. That is all.
        </p>

        <h3 className="legal-subhead">No account, and no sign-in</h3>
        <p>
          Rizzlord has <strong>no accounts</strong>. There is no sign-up, no login, no password, and
          no profile on our servers. We never ask for your name, your email address, or your phone
          number in order to use the app, and we do not receive an identifier from Apple, Google, or
          any other identity provider. We cannot identify you from your use of the app.
        </p>

        <h3 className="legal-subhead">Content you submit</h3>
        <p>
          This is the most sensitive category and we treat it that way. To generate suggestions
          Rizzlord needs context &mdash; typically chat snippets, screenshots of dating-app
          conversations, profile bios, or short notes describing the person you&rsquo;re talking to.
          Anything you type, paste, or upload into the app is &ldquo;Content.&rdquo; Content is sent
          to an AI service to produce a suggestion, and only with your permission; Section 4 explains
          that in full.
        </p>
        <p>
          Please do not submit Content you do not have the right to share, content involving
          minors, intimate images of another person without their consent, or material that would
          violate someone&rsquo;s privacy or safety.
        </p>

        <h3 className="legal-subhead">Your onboarding answers</h3>
        <p>
          When you first open the app it asks a short series of questions &mdash; your gender, the
          gender of the person you are messaging, your age range, what you are looking for, how your
          chats usually go, your usual opener, and your texting style. These answers are stored on
          your device and are sent alongside your Content so that suggestions match your voice.
        </p>

        <h3 className="legal-subhead">AI-generated outputs</h3>
        <p>
          The lines, openers, replies, and analyses Rizzlord generates in response to your Content
          (&ldquo;Outputs&rdquo;) are written to your device&rsquo;s local storage so you can see
          your history and favourites. They are stored on your phone only. We do not receive a copy,
          we do not keep them on our servers, and we cannot read them.
        </p>

        <h3 className="legal-subhead">Subscription and purchase metadata</h3>
        <p>
          When you subscribe we receive purchase metadata through our subscription partner{" "}
          <strong>RevenueCat, Inc.</strong>, which manages subscription state on our behalf &mdash;
          which plan you bought (weekly or monthly), whether you are in the 3-day free trial,
          renewal and cancellation status, an opaque transaction identifier, and an anonymous app
          user ID that RevenueCat generates for your installation. To operate that, RevenueCat also
          receives basic device and network information including your IP address. We do{" "}
          <strong>not</strong> receive or store your full payment card number, bank details, or
          billing address; Apple handles that information directly under its own policies.
        </p>

        <h3 className="legal-subhead">Relay logs</h3>
        <p>
          Requests for AI suggestions pass through a relay server we operate (see Section 4). It
          records operational metadata about each request &mdash; a request identifier, the country
          the request came from, which model was requested, the response status, how long it took,
          and the size of the request. It does <strong>not</strong> record your Content.
        </p>

        <h3 className="legal-subhead">What we do not collect</h3>
        <p>
          Rizzlord contains no analytics SDK, no advertising SDK, and no crash-reporting SDK. We do
          not track which screens you view or which features you use. We do not collect your
          contacts, your location, your photo library, or your device advertising identifier. When
          you attach a screenshot, the app reads only the single image you pick.
        </p>

        <h3 className="legal-subhead">Communications</h3>
        <p>
          If you contact us for support, share feedback, or respond to surveys, we keep a copy of
          that correspondence and any information you include &mdash; including your email address,
          which you are giving us voluntarily in that moment.
        </p>
      </section>

      <section className="legal-section">
        <h2>3. How we use your information</h2>
        <p>
          We use your Content and onboarding answers for one purpose: to generate the suggestion you
          asked for, by sending them to the AI service described in Section 4 and returning the
          result to your device. We do not use your Content for any other purpose, and because we do
          not retain it, we could not.
        </p>
        <p>
          We use subscription metadata to manage subscriptions and free trials &mdash; verifying
          eligibility for the 3-day free trial, unlocking access after a purchase, restoring
          purchases on request, processing renewals through Apple, handling cancellations, and
          preventing trial abuse.
        </p>
        <p>
          We use relay logs to keep the Service running and to protect it &mdash; diagnosing faults,
          measuring reliability, and defending against fraud, abuse, and automated scraping of our
          AI capacity.
        </p>
        <p>We use support correspondence to answer you, and to fix whatever you told us about.</p>
        <p>
          Finally, we use information to comply with our legal obligations and to establish or
          defend legal claims.
        </p>
        <p>
          We do not use your Content to train any AI model, our own or anyone else&rsquo;s. We do not
          send you marketing email, because we do not have your email address unless you write to us
          first.
        </p>
      </section>

      <section className="legal-section">
        <h2>4. AI processing and third-party model providers</h2>
        <p>
          Rizzlord cannot suggest a reply without reading the conversation you want a reply for.
          Doing that means sending your Content off your device. This section explains exactly what
          is sent, who receives it, and what they may do with it.
        </p>

        <h3 className="legal-subhead">What we send</h3>
        <p>
          When you tap the generate button, and only then, we transmit the chat transcript or profile
          bio you pasted in; the screenshot you chose, if you used the screenshot input; and the
          onboarding answers described in Section 2, which we use to match the suggestion to your
          voice.
        </p>

        <h3 className="legal-subhead">What we do not send</h3>
        <p>
          We do not transmit your name, email address, or any account identifier, because Rizzlord
          has no accounts and never asks you to create one. We do not transmit your contacts, your
          photo library, your location, or your device advertising identifier. Your saved replies,
          favourites, and generation history are written to your device only and are never uploaded.
        </p>

        <h3 className="legal-subhead">Who receives it</h3>
        <p>Your Content passes through three parties, in this order:</p>
        <ul>
          <li>
            <strong>Revokslab (us).</strong> Your request first reaches a relay server we operate on
            Cloudflare&rsquo;s network. It exists so that our AI provider credentials never ship
            inside the app. The relay forwards your request and does not store your Content; it
            records only the operational metadata listed in Section 2, which we keep for up to 30
            days to detect abuse and diagnose faults.
          </li>
          <li>
            <strong>OpenRouter, Inc.</strong>, a routing service that passes the request on to the
            selected model provider, under its own privacy policy and terms.
          </li>
          <li>
            <strong>OpenAI, L.L.C.</strong>, which operates the GPT-4o mini model that generates
            your suggestions, under its own privacy policy and API terms.
          </li>
        </ul>

        <h3 className="legal-subhead">What they may do with it</h3>
        <p>
          We access OpenAI through OpenRouter under API terms which provide that inputs and outputs
          submitted through the API are <strong>not</strong> used to train their general-purpose
          models. Both providers may retain prompts and outputs for a limited period for abuse
          monitoring, safety review, and their own legal compliance, after which they are deleted in
          line with their published retention practices.
        </p>
        <p>
          We have reviewed the privacy commitments of each provider named above, and we share Content
          with them only under agreements that require confidentiality, restrict use of the Content
          to performing the service we have asked them to perform, and provide protections for your
          information that are the same as or equal to those described in this Policy. We do not
          authorise any of them to sell your Content or to use it for their own advertising.
        </p>

        <h3 className="legal-subhead">Your permission comes first</h3>
        <p>
          The first time you ask Rizzlord for an AI suggestion, the app shows you a screen that names
          the data listed above and every recipient listed above, and asks you to agree. Nothing is
          transmitted unless you tap <strong>Agree &amp; continue</strong>. If you decline, no
          Content leaves your device, and the rest of the app &mdash; the built-in pickup line
          library, your favourites, and your history &mdash; keeps working.
        </p>
        <p>
          You can review that disclosure and withdraw your permission at any time under{" "}
          <strong>Settings → AI &amp; your data</strong> in the app. Withdrawing it stops all further
          transmission immediately. It cannot retrieve Content already sent, which is then governed
          by the retention practices described above.
        </p>

        <h3 className="legal-subhead">Please use your judgement</h3>
        <p>
          Anything you paste is read by a third-party AI service. Treat it the way you would treat
          anything handed to a software vendor: do not paste passwords, financial account numbers,
          government identifiers, medical records, or other people&rsquo;s private content without
          their consent. Remember that a chat transcript contains another person&rsquo;s words as
          well as your own. AI outputs may also be inaccurate, biased, or inappropriate &mdash;
          always read a suggestion before sending it to anyone.
        </p>
      </section>

      <section className="legal-section">
        <h2>5. Legal bases for processing (EEA, UK, and similar regions)</h2>
        <p>
          If you are located in the European Economic Area, the United Kingdom, or a comparable
          jurisdiction, we rely on the following legal bases under the GDPR / UK GDPR:
        </p>
        <ul>
          <li>
            <strong>Consent</strong> &mdash; to transmit your Content and onboarding answers to the
            AI providers named in Section 4. We ask for this in the app before the first
            transmission, and you may withdraw it at any time in Settings without losing access to
            the rest of the Service.
          </li>
          <li>
            <strong>Performance of a contract</strong> &mdash; to operate subscriptions and the free
            trial, unlock paid access, and restore purchases.
          </li>
          <li>
            <strong>Legitimate interests</strong> &mdash; to secure the Service, prevent fraud and
            abuse of our AI capacity, and diagnose faults. We balance these interests against your
            rights and freedoms.
          </li>
          <li>
            <strong>Legal obligation</strong> &mdash; to comply with applicable laws, respond to
            lawful requests, and protect rights and safety.
          </li>
        </ul>
      </section>

      <section className="legal-section">
        <h2>6. How we share information</h2>
        <p>
          We do <strong>not</strong> sell your personal information, and we do not &ldquo;share&rdquo;
          it for cross-context behavioral advertising as those terms are defined under the
          California Consumer Privacy Act. We do disclose information in the limited circumstances
          below.
        </p>
        <p>
          <strong>Service providers.</strong> Vendors that help us run the Service receive only what
          they need to perform their function. The complete list is:{" "}
          <strong>Cloudflare, Inc.</strong> (hosting for our website and the relay server described
          in Section 4), <strong>OpenRouter, Inc.</strong> and <strong>OpenAI, L.L.C.</strong> (AI
          routing and model inference &mdash; see Section 4), and <strong>RevenueCat, Inc.</strong>{" "}
          (subscription management). They are contractually required to protect the information and
          to use it only for the services they provide to us.
        </p>
        <p>
          <strong>Apple.</strong> When you subscribe through the App Store, Apple processes the
          payment, manages the auto-renewal, and shares purchase metadata back to us so we can grant
          access. Apple&rsquo;s privacy policy governs that transaction.
        </p>
        <p>
          <strong>Legal, safety, and compliance.</strong> We may disclose information when we
          believe in good faith that disclosure is necessary to comply with a legal obligation,
          respond to lawful requests from public authorities, enforce our Terms of Service,
          investigate suspected fraud, or protect the rights, property, or safety of Rizzlord,
          our users, or others.
        </p>
        <p>
          <strong>Business transfers.</strong> If Rizzlord is involved in a merger, acquisition,
          financing, reorganization, bankruptcy, or sale of assets, information may be transferred
          as part of that transaction. We will give notice through the Service before personal
          information becomes subject to a different privacy policy.
        </p>
        <p>
          <strong>With your direction.</strong> If you choose to export or share Outputs outside
          the app (for example, by copying a suggestion into a third-party messenger), that
          disclosure is under your control and subject to the receiving service&rsquo;s policies.
        </p>
      </section>

      <section className="legal-section">
        <h2>7. Data retention</h2>
        <p>
          Because Rizzlord has no accounts, we hold almost nothing about you. Your Content, your
          Outputs, your favourites, your history, and your onboarding answers are stored{" "}
          <strong>on your device only</strong>, for as long as you keep them. Deleting an item,
          using <strong>Settings → Delete account</strong>, or deleting the app removes them
          immediately. We cannot delete them for you, because we never had them.
        </p>
        <p>
          Relay logs, which contain operational metadata and no Content, are retained for up to{" "}
          <strong>30 days</strong>. Subscription metadata is retained by us and by RevenueCat for as
          long as needed to honour your purchase and meet tax and accounting obligations. Support
          correspondence is retained for up to two years. Content transmitted to the AI providers is
          subject to their retention practices as described in Section 4.
        </p>
        <p>
          Some information may persist for a limited additional period in encrypted backups, in logs
          needed for security and abuse detection, and where retention is required by law or to
          establish or defend legal claims.
        </p>
      </section>

      <section className="legal-section">
        <h2>8. Your rights and choices</h2>
        <p>
          Depending on where you live, you may have the following rights with respect to your
          personal information: access, correction, deletion, portability, restriction of
          processing, objection to processing, and the right to withdraw consent. You also have
          the right not to be discriminated against for exercising any of these rights.
        </p>
        <p>
          You can exercise most of these rights directly in the app, without asking us: delete
          individual items from your history or favourites, erase everything with{" "}
          <strong>Settings → Delete account</strong>, and grant or withdraw your consent to AI
          processing under <strong>Settings → AI &amp; your data</strong>. Because your data lives on
          your device, these actions take effect immediately and completely.
        </p>
        <p>
          For anything we do hold &mdash; subscription metadata, relay logs, support correspondence
          &mdash; email us at <a href="mailto:hi@revoks.dev">hi@revoks.dev</a> and we will respond
          within the timeframe required by law (typically within 30 days). Note that because we hold
          no account identifiers, we may need information from you, such as your transaction ID, to
          locate any record at all.
        </p>
        <p>
          <strong>California residents (CCPA / CPRA).</strong> You have the right to know what
          personal information we collect about you, the categories of sources and third parties,
          and the purposes of collection; to request deletion or correction of your personal
          information; to opt out of any &ldquo;sale&rdquo; or &ldquo;sharing&rdquo; of personal
          information (we do not engage in either as defined by the CCPA); and to limit our use of
          sensitive personal information. You may make a request yourself or through an authorized
          agent.
        </p>
        <p>
          <strong>EEA, UK, and similar regions.</strong> In addition to the rights above, you have
          the right to lodge a complaint with your local data protection authority. We would
          appreciate the chance to address your concern first &mdash; please contact us before
          escalating.
        </p>
      </section>

      <section className="legal-section">
        <h2>9. Children&rsquo;s privacy</h2>
        <p>
          Rizzlord is intended for users <strong>17 years of age or older</strong>. The Service is
          not directed to children, and we do not knowingly collect personal information from
          anyone under 17.
        </p>
        <p>
          If you are a parent or guardian and believe a child under 17 has provided us with
          personal information, please contact us at{" "}
          <a href="mailto:hi@revoks.dev">hi@revoks.dev</a>. If we become aware that we have
          collected personal information from a child under 17 without verified parental consent
          (where applicable), we will delete that information promptly.
        </p>
      </section>

      <section className="legal-section">
        <h2>10. International data transfers</h2>
        <p>
          Rizzlord is operated from <strong>Rwanda</strong>, and the providers we work with
          process data in multiple countries including the United States. Where personal
          information is transferred out of your home jurisdiction, we rely on appropriate
          safeguards such as the European Commission&rsquo;s Standard Contractual Clauses, the UK
          International Data Transfer Addendum, or equivalent mechanisms.
        </p>
      </section>

      <section className="legal-section">
        <h2>11. Security</h2>
        <p>
          We use administrative, technical, and physical safeguards designed to protect personal
          information against loss, theft, and unauthorized access, disclosure, or modification.
          These include encryption of data in transit, keeping our AI provider credentials on the
          server rather than inside the app, restricted access to production systems, logging and
          monitoring, and routine security reviews. Keeping your Content on your device rather than
          on our servers is itself a deliberate security choice.
        </p>
        <p>
          No system is ever perfectly secure. We cannot guarantee absolute security and you use
          the Service at your own risk. If we become aware of a breach affecting your personal
          information, we will notify you as required by applicable law.
        </p>
      </section>

      <section className="legal-section">
        <h2>12. Third-party links and services</h2>
        <p>
          The Service may link to or rely on third-party services such as the App Store, the AI
          providers named in Section 4, our subscription provider RevenueCat, and any external
          messenger you copy Outputs into. We are not responsible for the privacy practices of those
          services. Please read their policies before using them.
        </p>
      </section>

      <section className="legal-section">
        <h2>13. Changes to this Privacy Policy</h2>
        <p>
          We may update this Policy from time to time as the Service evolves or as law requires.
          When we do, we will update the &ldquo;Effective date&rdquo; at the top of the page and,
          for material changes, give additional notice through the Service. If we change what data
          is sent to the AI providers, or add a new recipient, the app will ask for your permission
          again before sending anything under the new terms. Your continued use of the Service after
          the changes take effect means you accept the updated Policy.
        </p>
      </section>

      <section className="legal-section">
        <h2>14. Contact us</h2>
        <p>
          If you have questions about this Policy or our privacy practices, or to exercise any of
          your rights, contact us at:
        </p>
        <p>
          <strong>Revokslab</strong>
          <br />
          Kigali, Rwanda
          <br />
          <a href="mailto:hi@revoks.dev">hi@revoks.dev</a>
        </p>
        <p>
          For help with the app itself &mdash; subscriptions, refunds, bugs &mdash; see our{" "}
          <Link href="/support">Support page</Link>.
        </p>
      </section>

      <p className="legal-back">
        <Link href="/">← Back to Rizzlord</Link>
      </p>
    </main>
  );
}
