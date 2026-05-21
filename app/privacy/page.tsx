import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Rizzlord",
  description:
    "How Rizzlord collects, uses, shares, and protects information when you use the Rizzlord AI Wingman app and website.",
  robots: { index: true, follow: true },
};

export default function PrivacyPolicy() {
  return (
    <main className="legal-shell">
      <header className="legal-header">
        <h1 className="legal-title">Privacy Policy</h1>
        <p className="legal-meta">Effective date: May 21, 2026</p>
      </header>

      <section className="legal-section">
        <h2>1. Introduction</h2>
        <p>
          This Privacy Policy explains how <strong>[LEGAL ENTITY NAME]</strong> (&ldquo;Rizzlord,&rdquo;
          &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses, discloses, and
          protects information about you when you use the Rizzlord mobile application, our website at
          rizzlord.app, and any related services that link to this Policy (together, the
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
          <a href="mailto:[contact email]">[contact email]</a>.
        </p>
      </section>

      <section className="legal-section">
        <h2>2. Information we collect</h2>
        <p>
          We collect information in three broad ways: information you give us, information we
          collect automatically when you use the Service, and information we receive from third
          parties (such as Apple and Google when you subscribe).
        </p>

        <h3 className="legal-subhead">Account information</h3>
        <p>
          When you create an account or sign in we collect identifiers such as your email address,
          a display name if you set one, and any sign-in tokens we receive from Apple, Google, or
          other identity providers you choose to use. We do not store passwords for third-party
          identity providers.
        </p>

        <h3 className="legal-subhead">Content you submit</h3>
        <p>
          This is the most sensitive category and we treat it that way. To generate suggestions
          Rizzlord needs context — typically chat snippets, screenshots of dating-app
          conversations, profile bios, or short notes describing the person you&rsquo;re talking to.
          Anything you type, paste, or upload into the app is &ldquo;Content.&rdquo; We use Content
          to produce AI suggestions for you and, in limited cases described below, to operate,
          secure, and improve the Service.
        </p>
        <p>
          Please do not submit Content you do not have the right to share, content involving
          minors, intimate images of another person without their consent, or material that would
          violate someone&rsquo;s privacy or safety.
        </p>

        <h3 className="legal-subhead">AI-generated outputs</h3>
        <p>
          The lines, openers, replies, and other text Rizzlord generates in response to your
          Content (&ldquo;Outputs&rdquo;) are stored with your account so you can view your history,
          regenerate, or refine. Outputs are also used in aggregate and de-identified form to
          monitor quality and improve the Service.
        </p>

        <h3 className="legal-subhead">Subscription and purchase metadata</h3>
        <p>
          When you subscribe we receive purchase metadata from Apple App Store or Google Play —
          which plan you bought (weekly or monthly), whether you are in the 3-day free trial,
          renewal and cancellation status, and an opaque transaction identifier. We do{" "}
          <strong>not</strong> receive or store your full payment card number, bank details, or
          billing address; Apple and Google handle that information directly under their own
          policies.
        </p>

        <h3 className="legal-subhead">Device and technical data</h3>
        <p>
          We automatically collect technical data needed to deliver and secure the Service,
          including device model, operating system and version, app version, language and region
          settings, time zone, mobile carrier, network type, anonymous device identifiers, crash
          and diagnostic logs, and IP address.
        </p>

        <h3 className="legal-subhead">Usage analytics</h3>
        <p>
          We collect product analytics about how you interact with the Service — which features you
          use, screens you view, prompts you select, session length, and similar in-app events —
          so we can understand which parts of Rizzlord are useful and which are not.
        </p>

        <h3 className="legal-subhead">Communications</h3>
        <p>
          If you contact us for support, share feedback, or respond to surveys, we keep a copy of
          that correspondence and any information you include.
        </p>
      </section>

      <section className="legal-section">
        <h2>3. How we use your information</h2>
        <p>
          We use the information described above to provide and personalize the Service: to
          generate AI suggestions in response to your Content, to remember your preferences and
          history, to manage your account, and to deliver the features you ask for.
        </p>
        <p>
          We also use information to manage subscriptions and free trials, including verifying
          eligibility for the 3-day free trial, processing renewals through Apple or Google,
          handling cancellations, and preventing trial abuse such as repeat sign-ups designed to
          dodge billing.
        </p>
        <p>
          We use technical and usage data to keep the Service running smoothly — debugging crashes,
          identifying performance regressions, defending against fraud, abuse, spam, and security
          threats, and enforcing our Terms of Service.
        </p>
        <p>
          With your permission where required, we may use your email to send service announcements
          and, separately, product updates or tips. You can opt out of marketing messages at any
          time without losing access to the Service.
        </p>
        <p>
          We use aggregated and de-identified data to evaluate model quality, train and improve our
          prompts and post-processing, and develop new features. Where we use Content to improve
          AI quality, we apply minimization and de-identification before doing so, and you can
          object as described in &ldquo;Your rights&rdquo; below.
        </p>
        <p>
          Finally, we use information to comply with our legal obligations and to establish or
          defend legal claims.
        </p>
      </section>

      <section className="legal-section">
        <h2>4. AI processing and third-party model providers</h2>
        <p>
          Rizzlord generates suggestions by sending your Content to one or more third-party AI
          model providers (such as <strong>[AI provider(s)]</strong>). These providers run
          inference on the prompts we build from your Content and return generated text that we
          then process and display to you. Without this transmission the Service cannot function.
        </p>
        <p>
          AI providers process Content under their own terms and privacy commitments. They may
          retain prompts and outputs for limited periods for abuse monitoring, safety review, and
          their own legal compliance. We choose providers that offer enterprise or developer
          contracts which restrict the use of customer data for training their general-purpose
          models, but we cannot eliminate the fact that your Content is transmitted to and briefly
          processed by a third party.
        </p>
        <p>
          Please treat Rizzlord like any other online service that processes what you type:
          don&rsquo;t paste anything you would not be comfortable sharing with a software vendor.
          Specifically, do not submit government identifiers, financial account numbers, medical
          records, login credentials, or other people&rsquo;s private content without their
          consent. AI outputs may also be inaccurate, biased, or inappropriate &mdash; always read
          a suggestion before sending it to anyone.
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
            <strong>Performance of a contract</strong> &mdash; to provide the Service you have
            asked for, including generating suggestions, managing your account, and operating
            subscriptions and the free trial.
          </li>
          <li>
            <strong>Legitimate interests</strong> &mdash; to secure the Service, prevent fraud and
            abuse, debug and improve product quality, and develop new features. We balance these
            interests against your rights and freedoms.
          </li>
          <li>
            <strong>Consent</strong> &mdash; where required, such as for certain marketing
            communications or analytics. You may withdraw consent at any time.
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
          <strong>Service providers.</strong> Vendors that help us run the Service receive only
          what they need to perform their function. This includes cloud hosting and storage
          providers, AI model providers (see Section 4), analytics and crash-reporting providers,
          email delivery providers, and customer-support tools. They are contractually required to
          protect the information and to use it only for the services they provide to us.
        </p>
        <p>
          <strong>Apple and Google.</strong> When you subscribe through the App Store or Google
          Play, Apple or Google processes the payment, manages the auto-renewal, and shares
          purchase metadata back to us so we can grant access. Their privacy policies govern that
          transaction.
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
          We retain account information for as long as your account is active. Content and Outputs
          tied to your account are retained while the account is active so your history remains
          available to you.
        </p>
        <p>
          When you delete your account or specific Content, we remove it from our active systems
          within approximately <strong>[retention window, e.g. 30 days]</strong>. Some information
          may persist for a limited additional period in encrypted backups, in logs needed for
          security and abuse detection, and where retention is required by law or to establish or
          defend legal claims. De-identified or aggregated data, which is not associated with you,
          may be retained longer to evaluate and improve the Service.
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
          You can exercise most of these rights from within the app (for example, by editing your
          profile, deleting individual conversations, or deleting your account in Settings). You
          may also email us at <a href="mailto:[contact email]">[contact email]</a> and we will
          respond within the timeframe required by law (typically within 30 days). We may need to
          verify your identity before acting on a request.
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
          <a href="mailto:[contact email]">[contact email]</a>. If we become aware that we have
          collected personal information from a child under 17 without verified parental consent
          (where applicable), we will delete that information promptly.
        </p>
      </section>

      <section className="legal-section">
        <h2>10. International data transfers</h2>
        <p>
          Rizzlord is operated from <strong>[country]</strong>, and the providers we work with
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
          These include encryption of data in transit, restricted access to production systems,
          logging and monitoring, and routine security reviews.
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
          The Service may link to or rely on third-party services such as the App Store, Google
          Play, AI model providers, analytics providers, and any external messenger you copy
          Outputs into. We are not responsible for the privacy practices of those services. Please
          read their policies before using them.
        </p>
      </section>

      <section className="legal-section">
        <h2>13. Changes to this Privacy Policy</h2>
        <p>
          We may update this Policy from time to time as the Service evolves or as law requires.
          When we do, we will update the &ldquo;Effective date&rdquo; at the top of the page and,
          for material changes, give additional notice through the Service or by email. Your
          continued use of the Service after the changes take effect means you accept the updated
          Policy.
        </p>
      </section>

      <section className="legal-section">
        <h2>14. Contact us</h2>
        <p>
          If you have questions about this Policy or our privacy practices, or to exercise any of
          your rights, contact us at:
        </p>
        <p>
          <strong>[LEGAL ENTITY NAME]</strong>
          <br />
          [Business address]
          <br />
          <a href="mailto:[contact email]">[contact email]</a>
        </p>
      </section>

      <p className="legal-back">
        <Link href="/">← Back to Rizzlord</Link>
      </p>
    </main>
  );
}
