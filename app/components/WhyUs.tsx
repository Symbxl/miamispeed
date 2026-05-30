import Image from "next/image";
import { whyUs } from "./site-config";
import { ShieldCheck, Sparkles, Bolt, MapPin } from "./icons";

const icons = [ShieldCheck, Sparkles, Bolt, MapPin];

export default function WhyUs() {
  return (
    <section id="why" className="relative scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:gap-16">
        {/* Visual */}
        <div className="relative order-last lg:order-first">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[3px] ring-line sm:aspect-[4/3] lg:aspect-[4/5]">
            <Image
              src="/images/garage.jpg"
              alt="Exotic cars parked under low light in a private garage"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(180deg, rgba(6,6,10,0) 50%, rgba(6,6,10,0.7) 100%)" }}
            />
          </div>
          {/* Floating proof chip */}
          <div className="card absolute -bottom-5 left-4 right-4 flex items-center gap-4 p-4 sm:left-6 sm:right-auto sm:w-72">
            <span
              className="grid h-11 w-11 shrink-0 place-items-center rounded-[3px] text-ink"
              style={{ backgroundImage: "linear-gradient(135deg, var(--color-pink), var(--color-blue))" }}
            >
              <ShieldCheck className="h-6 w-6" />
            </span>
            <p className="text-sm font-medium leading-snug">
              Fully insured &amp; <span className="text-gradient font-bold">concierge delivered</span> across NYC
            </p>
          </div>
        </div>

        {/* Copy */}
        <div>
          <p className="eyebrow">Why Timeless Autogroup</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            The team that makes exotics <span className="text-gradient">effortless</span>
          </h2>
          <p className="mt-4 text-lg text-muted">
            We&apos;re not a faceless rental desk. We&apos;re a small NYC crew
            obsessed with cars — we deliver clean, dialed-in machines and treat
            every client, and every car, like our own.
          </p>

          <div className="mt-8 grid gap-x-6 gap-y-7 sm:grid-cols-2">
            {whyUs.map((w, i) => {
              const Icon = icons[i % icons.length];
              return (
                <div key={w.title}>
                  <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-[3px] border border-line bg-white/5 text-blue">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-base font-semibold">{w.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{w.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
