import { steps } from "./site-config";
import { ArrowRight } from "./icons";

export default function HowItWorks() {
  return (
    <section id="how" className="relative scroll-mt-20 border-y border-line bg-ink-2/60 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <header className="max-w-2xl">
          <p className="eyebrow">How It Works</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Booked in <span className="text-gradient">three steps</span>
          </h2>
          <p className="mt-4 text-lg text-muted">
            No accounts, no runaround. The whole thing usually starts and ends in a single conversation.
          </p>
        </header>

        <ol className="mt-12 grid gap-5 md:grid-cols-3">
          {steps.map((s) => (
            <li key={s.n} className="card relative p-7">
              <span
                className="text-5xl font-extrabold leading-none text-gradient"
                aria-hidden="true"
              >
                {s.n}
              </span>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10">
          <a href="#quote" className="btn btn-primary">
            Start my quote
            <ArrowRight className="h-[18px] w-[18px]" />
          </a>
        </div>
      </div>
    </section>
  );
}
