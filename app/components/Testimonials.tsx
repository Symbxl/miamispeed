import { testimonials } from "./site-config";
import { Star } from "./icons";

export default function Testimonials() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <header className="max-w-2xl">
          <p className="eyebrow">Driver Stories</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Trusted by drivers <span className="text-gradient">across the city</span>
          </h2>
          <p className="mt-4 text-lg text-muted">
            From Manhattan to the Hamptons — clients book with us again and
            again.
          </p>
        </header>

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <li key={t.origin} className="card flex flex-col p-7">
              <div className="flex gap-0.5 text-pink" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-[0.98rem] leading-relaxed text-cream/90">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5 text-sm font-semibold text-blue-soft">
                — {t.origin}
              </figcaption>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
