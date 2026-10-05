import { useCallback, useId, useState } from "react";
import { PRACTICE } from "../brand/content";
import { cx } from "../utils/cx";

/* -------------------------------------------------------------------------- */
/* Configuration                                                               */
/* -------------------------------------------------------------------------- */

/**
 * Email delivery. Point VITE_FORM_ENDPOINT at any JSON-accepting form service
 * (Formspree, Getform, Basin, Netlify Forms, or a Lovable Cloud / Supabase edge
 * function) and submissions will be POSTed there as JSON.
 *
 * Until an endpoint is configured, submissions are validated, held in the
 * browser's localStorage and surfaced with the same warm confirmation so the
 * form is never a dead end during review. See README.md.
 */
const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT ?? "";

type FormContext = "consultation" | "workshop";

type Values = {
  name: string;
  email: string;
  phone: string;
  contactMethod: "email" | "phone" | "text";
  clientType: "couple" | "individual" | "not-sure";
  timing: string;
  message: string;
  /** Honeypot — bots fill this in, humans never see it. */
  company: string;
};

const EMPTY: Values = {
  name: "",
  email: "",
  phone: "",
  contactMethod: "email",
  clientType: "couple",
  timing: "",
  message: "",
  company: "",
};

const CONTACT_OPTIONS: { value: Values["contactMethod"]; label: string }[] = [
  { value: "email", label: "Email" },
  { value: "phone", label: "Phone call" },
  { value: "text", label: "Text message" },
];

const CLIENT_OPTIONS: { value: Values["clientType"]; label: string }[] = [
  { value: "couple", label: "As a couple" },
  { value: "individual", label: "As an individual" },
  { value: "not-sure", label: "I'm not sure yet" },
];

const TIMING_OPTIONS = [
  "Mornings",
  "Midday",
  "Afternoons",
  "Evenings",
  "Weekends",
  "I'm flexible",
];

/* -------------------------------------------------------------------------- */
/* Component                                                                   */
/* -------------------------------------------------------------------------- */

export function ConsultationForm({
  context = "consultation",
  className,
}: {
  context?: FormContext;
  className?: string;
}) {
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Values, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const formId = useId();

  const update = useCallback(
    <K extends keyof Values>(key: K, value: Values[K]) => {
      setValues((previous) => ({ ...previous, [key]: value }));
      setErrors((previous) => ({ ...previous, [key]: undefined }));
    },
    [],
  );

  const validate = (): boolean => {
    const next: Partial<Record<keyof Values, string>> = {};

    if (values.name.trim().length < 2) {
      next.name = "Please tell me what to call you.";
    }
    if (!values.email.trim() && !values.phone.trim()) {
      next.email = "An email address or a phone number is enough — whichever you prefer.";
    }
    if (values.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
      next.email = "That email address doesn't look quite right.";
    }
    if (values.phone.trim() && values.phone.replace(/\D/g, "").length < 10) {
      next.phone = "Please include the area code.";
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Silently drop obvious bots
    if (values.company.trim() !== "") return;

    if (!validate()) {
      const firstError = event.currentTarget.querySelector<HTMLElement>("[aria-invalid='true']");
      firstError?.focus();
      return;
    }

    setStatus("sending");

    const payload = {
      name: values.name.trim(),
      email: values.email.trim(),
      phone: values.phone.trim(),
      preferredContact: values.contactMethod,
      clientType: values.clientType,
      preferredTime: values.timing,
      message: values.message.trim(),
      source: context === "workshop" ? "Workshop interest" : "Free consultation",
      submittedAt: new Date().toISOString(),
    };

    try {
      if (FORM_ENDPOINT) {
        const response = await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(payload),
        });
        if (!response.ok) throw new Error("Request failed");
      } else {
        // No endpoint configured yet — keep the request safely in the browser.
        const key = "carol-anderson-leads";
        const existing = JSON.parse(window.localStorage.getItem(key) ?? "[]");
        existing.push(payload);
        window.localStorage.setItem(key, JSON.stringify(existing));
        await new Promise((resolve) => window.setTimeout(resolve, 700));
      }
      setStatus("sent");
      setValues(EMPTY);
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") return <Confirmation context={context} />;

  const isWorkshop = context === "workshop";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={cx("card rounded-softer p-6 md:p-8", className)}
      aria-labelledby={`${formId}-title`}
    >
      <h3 id={`${formId}-title`} className="display text-[1.7rem] text-evergreen md:text-[2rem]">
        {isWorkshop ? "Express your interest" : "Request your free consultation"}
      </h3>
      <p className="mt-3 text-[0.98rem] leading-relaxed text-muted">
        {isWorkshop
          ? "Tell me a little about yourself and I will let you know as soon as the next workshop is scheduled. No cost and no commitment."
          : "Fifteen quiet minutes, by call or email, with no cost and no obligation. Tell me how to reach you and I will be in touch."}
      </p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <Field
          id={`${formId}-name`}
          label="Your name"
          error={errors.name}
          className="sm:col-span-2"
        >
          <input
            id={`${formId}-name`}
            name="name"
            type="text"
            autoComplete="name"
            className={cx("field", errors.name && "field-error")}
            placeholder="First name is fine"
            value={values.name}
            onChange={(event) => update("name", event.target.value)}
            aria-invalid={errors.name ? "true" : undefined}
            aria-describedby={errors.name ? `${formId}-name-error` : undefined}
          />
        </Field>

        <Field id={`${formId}-email`} label="Email" error={errors.email}>
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            autoComplete="email"
            className={cx("field", errors.email && "field-error")}
            placeholder="you@example.com"
            value={values.email}
            onChange={(event) => update("email", event.target.value)}
            aria-invalid={errors.email ? "true" : undefined}
            aria-describedby={errors.email ? `${formId}-email-error` : undefined}
          />
        </Field>

        <Field id={`${formId}-phone`} label="Phone" error={errors.phone}>
          <input
            id={`${formId}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            className={cx("field", errors.phone && "field-error")}
            placeholder="(559) 000-0000"
            value={values.phone}
            onChange={(event) => update("phone", event.target.value)}
            aria-invalid={errors.phone ? "true" : undefined}
            aria-describedby={errors.phone ? `${formId}-phone-error` : undefined}
          />
        </Field>

        <Field id={`${formId}-contact`} label="How would you like me to reach you?">
          <select
            id={`${formId}-contact`}
            name="contactMethod"
            className="field"
            value={values.contactMethod}
            onChange={(event) =>
              update("contactMethod", event.target.value as Values["contactMethod"])
            }
          >
            {CONTACT_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </Field>

        <Field id={`${formId}-type`} label="Are you reaching out as a couple or an individual?">
          <select
            id={`${formId}-type`}
            name="clientType"
            className="field"
            value={values.clientType}
            onChange={(event) =>
              update("clientType", event.target.value as Values["clientType"])
            }
          >
            {CLIENT_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </Field>

        <Field id={`${formId}-timing`} label="When is it easiest to talk?" className="sm:col-span-2">
          <select
            id={`${formId}-timing`}
            name="timing"
            className="field"
            value={values.timing}
            onChange={(event) => update("timing", event.target.value)}
          >
            <option value="">No preference</option>
            {TIMING_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>

        <Field
          id={`${formId}-message`}
          label="Anything you would like me to know? (optional)"
          className="sm:col-span-2"
        >
          <textarea
            id={`${formId}-message`}
            name="message"
            rows={4}
            className={cx("field", "resize-y")}
            placeholder="A sentence or two is plenty."
            value={values.message}
            onChange={(event) => update("message", event.target.value)}
          />
        </Field>
      </div>

      {/* Privacy note — required, and honest */}
      <p className="mt-5 rounded-2xl border border-sage/50 bg-sage-soft/40 px-4 py-3 text-[0.88rem] leading-relaxed text-charcoal">
        <strong className="font-semibold text-evergreen">Please don't share sensitive medical
        details in this form.</strong>{" "}
        A name and a way to reach you is all I need. We can talk about the rest when we speak.
      </p>

      {/* Honeypot — hidden from humans, visible to bots */}
      <div aria-hidden="true" className="absolute h-0 w-0 overflow-hidden opacity-0">
        <label htmlFor={`${formId}-company`}>Company</label>
        <input
          id={`${formId}-company`}
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.company}
          onChange={(event) => update("company", event.target.value)}
        />
      </div>

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === "sending"}
          className="btn btn-gold w-full sm:w-auto"
        >
          {status === "sending" ? "Sending…" : "Send my request"}
        </button>
        <p className="text-[0.88rem] leading-relaxed text-muted">
          Or simply call{" "}
          <a href={PRACTICE.phoneHref} className="link-quiet">
            {PRACTICE.phoneDisplay}
          </a>
          . Whichever is easier.
        </p>
      </div>

      {status === "error" && (
        <p role="alert" className="mt-4 text-[0.9rem] text-[#a4442f]">
          Something went wrong sending that. Please try once more, or call Carol directly — I
          would hate for you to have to ask twice.
        </p>
      )}
    </form>
  );
}

/* -------------------------------------------------------------------------- */
/* Pieces                                                                      */
/* -------------------------------------------------------------------------- */

function Field({
  id,
  label,
  error,
  className,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="label">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-[0.85rem] text-[#a4442f]">
          {error}
        </p>
      )}
    </div>
  );
}

/** Warm confirmation: a drawn checkmark, a soft gold pulse, and a real next step. */
function Confirmation({ context }: { context: FormContext }) {
  return (
    <div
      className="card rounded-softer bg-gradient-to-br from-ivory-soft via-cream to-blush-soft p-8 text-center md:p-12"
      role="status"
      aria-live="polite"
    >
      <div className="relative mx-auto h-20 w-20">
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-honey/25 breathe"
        />
        <span
          aria-hidden="true"
          className="absolute inset-2 rounded-full border border-gold/50"
        />
        <svg
          className="absolute inset-0 m-auto h-9 w-9 text-evergreen"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="M20 6 9 17l-5-5"
            style={{
              strokeDasharray: 30,
              animation: "drawLine 0.9s var(--ease-soft) forwards",
            }}
          />
        </svg>
      </div>

      <h3 className="display mt-7 text-[1.9rem] text-evergreen md:text-[2.3rem]">
        Thank you for reaching out.
      </h3>
      <p className="mx-auto mt-4 max-w-md text-[1.02rem] leading-relaxed text-muted">
        {context === "workshop"
          ? "Your interest is noted. I will be in touch as soon as the next workshop is scheduled — and if plans change, I will tell you that too."
          : "Your request is with me. I read every one myself, and I will be in touch within one business day to find a time that suits you."}
      </p>
      <p className="mt-4 text-[0.95rem] italic text-charcoal/80">
        You have already done the hardest part.
      </p>

      <a href={PRACTICE.phoneHref} className="btn btn-ghost mt-8">
        Prefer to talk now? {PRACTICE.phoneDisplay}
      </a>
    </div>
  );
}

export default ConsultationForm;
