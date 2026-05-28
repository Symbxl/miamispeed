import Image from "next/image";
import { services } from "./site-config";
import { ArrowRight, Check } from "./icons";

export default function Fleet() {
  return (
    <section id="fleet" className="relative scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <header className="max-w-2xl">
          <p className="eyebrow">The Fleet</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Everything Miami, <span className="text-gradient">under one roof</span>
          </h2>
          <p className="mt-4 text-lg text-muted">
            Stop juggling five vendors. From our signature slingshots to yachts
            on the bay, it&apos;s one text and one trusted local crew.
          </p>
        </header>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <li key={s.slug} className="card group overflow-hidden">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(6,6,10,0) 35%, rgba(6,6,10,0.85) 100%)",
                  }}
                />
                <span className="absolute left-3 top-3 rounded-[3px] border border-line bg-ink/60 px-2.5 py-1 text-[0.7rem] font-semibold uppercase tracking-wider text-blue-soft backdrop-blur">
                  {s.short}
                </span>
                <h3 className="absolute bottom-3 left-4 right-4 text-xl font-bold drop-shadow">
                  {s.name}
                </h3>
              </div>

              <div className="p-5">
                <p className="text-sm leading-relaxed text-muted">{s.blurb}</p>
                <ul className="mt-4 grid grid-cols-2 gap-x-3 gap-y-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-1.5 text-[0.8rem] text-cream/85">
                      <Check className="h-3.5 w-3.5 shrink-0 text-pink" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#quote"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue transition-colors hover:text-blue-soft"
                >
                  Request a quote
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
