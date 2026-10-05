import { Button } from "../components/Button";
import { useSeo } from "../hooks/useSeo";

export default function NotFound() {
  useSeo({
    title: "Page not found",
    description: "The page you were looking for could not be found.",
    path: "/404",
  });

  return (
    <section className="section flex min-h-[70svh] items-center">
      <div className="shell">
        <div className="mx-auto max-w-xl text-center">
          <p className="eyebrow">404</p>
          <h1 className="display mt-4 text-[2.4rem] leading-tight text-evergreen md:text-[3rem]">
            This page has wandered off.
          </h1>
          <p className="mx-auto mt-5 max-w-md text-[1.05rem] leading-[1.8] text-muted">
            Rather like most of us some days. Let me walk you back to somewhere useful.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
            <Button to="/" variant="primary" arrow>
              Back to the beginning
            </Button>
            <Button to="/contact" variant="ghost">
              Book a free consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
