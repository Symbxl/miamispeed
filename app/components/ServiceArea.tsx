import Image from "next/image";
import { site } from "./site-config";
import { MapPin } from "./icons";

export default function ServiceArea() {
  return (
    <section id="area" className="relative scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="card relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/images/miami-skyline.jpg"
              alt="Miami skyline at dusk"
              fill
              sizes="(max-width: 1024px) 100vw, 1100px"
              className="object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(100deg, rgba(6,6,10,0.95) 0%, rgba(6,6,10,0.8) 55%, rgba(6,6,10,0.55) 100%)",
              }}
            />
          </div>

          <div className="p-8 sm:p-12">
            <p className="eyebrow">
              <MapPin className="h-4 w-4" />
              Service Area
            </p>
            <h2 className="mt-3 max-w-xl text-3xl font-bold sm:text-4xl">
              Serving all of <span className="text-gradient">Miami &amp; Broward</span>
            </h2>
            <p className="mt-4 max-w-xl text-lg text-cream/80">
              From South Beach to Fort Lauderdale, we deliver to hotels, Airbnbs
              and the airport across the service area. Tell us where you&apos;re
              staying and your car is there.
            </p>

            <ul className="mt-7 flex flex-wrap gap-2.5">
              {site.areaServed.map((a) => (
                <li
                  key={a}
                  className="rounded-[3px] border border-line bg-white/5 px-3.5 py-1.5 text-sm font-medium text-cream/90 backdrop-blur"
                >
                  {a}
                </li>
              ))}
            </ul>

            <p className="mt-7 text-sm text-muted">{site.hoursNote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
