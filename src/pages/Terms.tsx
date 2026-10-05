import { LegalPage, LegalSection } from "../components/LegalPage";
import { PRACTICE } from "../brand/content";
import { useSeo } from "../hooks/useSeo";

export default function Terms() {
  useSeo({
    title: "Terms of Use & Disclaimer",
    description:
      "Terms of use and professional disclaimer for the website of Carol A. Anderson, MS, LMFT, Fresno, California.",
    path: "/terms",
  });

  return (
    <LegalPage
      eyebrow="Terms"
      title="Terms of Use & Disclaimer"
      intro="The short version: this website is information, not therapy, and it is not a substitute for talking to a human being who can help you right now."
      updated="Last updated: January 2026 · Carol to confirm before launch"
    >
      <LegalSection heading="This website is not therapy">
        <p>
          Nothing on this website constitutes psychotherapy, psychological advice, diagnosis or
          treatment. Reading a page here is not the same as being in a room with a therapist, and it
          is not intended to replace that.
        </p>
      </LegalSection>

      <LegalSection heading="No therapeutic relationship is created by using this site">
        <p>
          A therapeutic relationship between you and Carol A. Anderson, MS, LMFT begins only when you
          and Carol have met, agreed to work together, and entered into that professional
          relationship. Visiting this website, sending a message, or booking a free consultation does
          not by itself create that relationship.
        </p>
      </LegalSection>

      <LegalSection heading="This site does not provide emergency services">
        <p>
          <strong className="font-semibold text-evergreen">
            If you are in crisis or need immediate help, call or text 988 or dial 911.
          </strong>{" "}
          Messages sent through the contact form are not monitored around the clock and may not be
          read immediately. If you or someone else is in danger, please contact emergency services or
          go to your nearest emergency department.
        </p>
      </LegalSection>

      <LegalSection heading="Accuracy of the information here">
        <p>
          Every effort has been made to keep the information on this site accurate and current,
          including fees, services and availability. Fees and availability can change, and details
          such as office hours are confirmed by telephone. Nothing on this site should be treated as
          a guarantee of a particular outcome.
        </p>
      </LegalSection>

      <LegalSection heading="Professional licensing">
        <p>
          Carol A. Anderson is a Licensed Marriage and Family Therapist in the State of California,
          license {PRACTICE.license}. She is a Certified Imago Relationship Therapist (Advanced
          Therapist, Couples Workshop Presenter and Singles Workshop Presenter) and is EMDR
          Institute Level 2 trained.
        </p>
      </LegalSection>

      <LegalSection heading="Links to other websites">
        <p>
          This site links to third-party services including Psychology Today, Headway and Google
          Maps. Those sites are operated by other organisations and are governed by their own terms
          and privacy policies, which I encourage you to read.
        </p>
      </LegalSection>

      <LegalSection heading="Client reviews and endorsements">
        <p>
          Client reviews are not published on this website. The only endorsement shown is a
          professional peer endorsement from Tineka Murphy-Burgess, LCSW. Any future client
          reflection will appear only with that client&rsquo;s explicit written permission.
        </p>
      </LegalSection>

      <LegalSection heading="Limitation of liability">
        <p>
          To the fullest extent permitted by law, Carol A. Anderson, MS, LMFT accepts no liability
          for any loss or damage arising from the use of, or inability to use, this website or the
          information it contains.
        </p>
      </LegalSection>

      <LegalSection heading="Governing law">
        <p>
          These terms are governed by the laws of the State of California, without regard to its
          conflict-of-law provisions.
        </p>
      </LegalSection>

      <LegalSection heading="Contact">
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
