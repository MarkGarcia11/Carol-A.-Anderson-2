import { LegalPage, LegalSection } from "../components/LegalPage";
import { PRACTICE } from "../brand/content";
import { useSeo } from "../hooks/useSeo";

export default function Privacy() {
  useSeo({
    title: "Privacy Policy",
    description:
      "How Carol A. Anderson, MS, LMFT collects, uses and protects information submitted through this website. Written in plain language.",
    path: "/privacy",
  });

  return (
    <LegalPage
      eyebrow="Privacy"
      title="Privacy Policy"
      intro="I have tried to write this the way I would explain it to you across a desk: plainly, and without hiding anything in a paragraph you were never meant to read."
      updated="Last updated: January 2026 · Carol to confirm before launch"
    >
      <LegalSection heading="Who I am">
        <p>
          This website belongs to Carol A. Anderson, MS, LMFT, a Licensed Marriage and Family
          Therapist practising in Fresno, California (license {PRACTICE.license}). If you have a
          question about anything on this page, you are welcome to call{" "}
          <a href={PRACTICE.phoneHref} className="link-quiet">
            {PRACTICE.phoneDisplay}
          </a>{" "}
          and ask me directly.
        </p>
      </LegalSection>

      <LegalSection heading="What I collect">
        <p>
          Very little, on purpose. If you use the consultation or workshop form, I collect the name,
          email address, phone number, contact preference and message you choose to give me. If you
          simply browse the site, I collect nothing at all.
        </p>
        <p>
          Please do not include sensitive medical information in the contact form. It is not a
          secure clinical channel, and I would rather hear those details from you in person.
        </p>
      </LegalSection>

      <LegalSection heading="How your information is used">
        <p>
          Only to reply to you, to arrange a consultation, and — if we decide to work together — to
          keep the ordinary records that California law requires of a licensed therapist. I do not
          sell, rent or trade your information, and I do not use it for advertising.
        </p>
      </LegalSection>

      <LegalSection heading="Where your information goes">
        <p>
          Form submissions are delivered to my own inbox through the form service configured for this
          site. No advertising or tracking pixels are attached to them. Until a delivery provider is
          connected, submissions are held only in your own browser so that nothing is lost.
        </p>
      </LegalSection>

      <LegalSection heading="Cookies">
        <p>
          This site does not use advertising cookies or cross-site trackers. Your browser may store
          ordinary technical data — such as whether you have seen the introductory screen — so that
          the site behaves consistently between visits. If analytics are added later, this page will
          be updated first.
        </p>
      </LegalSection>

      <LegalSection heading="Embedded services">
        <p>
          Two pages use services provided by other companies: Google Maps (to show the office
          location) and Google Fonts (to load the typefaces). Those providers may receive your IP
          address and basic browser information in the ordinary course of serving their content, and
          their own privacy policies apply.
        </p>
      </LegalSection>

      <LegalSection heading="How long information is kept">
        <p>
          Messages from people who do not become clients are deleted once they are no longer needed.
          Clinical records for people who do become clients are retained for the period required by
          California law and professional regulation.
        </p>
      </LegalSection>

      <LegalSection heading="Your rights">
        <p>
          Under California law you may ask to see the personal information I hold about you, ask for
          it to be corrected, or ask for it to be deleted where the law allows. Write to me at the
          address below and I will respond.
        </p>
      </LegalSection>

      <LegalSection heading="Children">
        <p>
          This website is intended for adults. I do not knowingly collect information from anyone
          under the age of eighteen.
        </p>
      </LegalSection>

      <LegalSection heading="Changes to this policy">
        <p>
          If this policy changes, the date at the top of the page will change with it. Material
          changes will be described here in plain language.
        </p>
      </LegalSection>

      <LegalSection heading="How to reach me">
        <p>
          Carol A. Anderson, MS, LMFT
          <br />
          {PRACTICE.street}
          <br />
          {PRACTICE.cityLine}
          <br />
          <a href={PRACTICE.phoneHref} className="link-quiet">
            {PRACTICE.phoneDisplay}
          </a>
        </p>
      </LegalSection>
    </LegalPage>
  );
}
