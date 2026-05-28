import { faqs } from "./site-config";
import { ChevronDown } from "./icons";

export default function Faq() {
  return (
    <section id="faq" className="relative scroll-mt-20 border-t border-line bg-ink-2/60 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-6">
        <header className="text-center">
          <p className="eyebrow justify-center">FAQ</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Good <span className="text-gradient">to know</span>
          </h2>
        </header>

        <div className="mt-10 space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="card group p-0">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-base font-semibold marker:hidden">
                {f.q}
                <ChevronDown className="h-5 w-5 shrink-0 text-blue transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <p className="px-5 pb-5 text-[0.95rem] leading-relaxed text-muted">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
