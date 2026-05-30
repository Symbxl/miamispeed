import Image from "next/image";
import { site } from "./site-config";
import { ArrowRight, Instagram } from "./icons";

export default function CtaBand() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="relative overflow-hidden rounded-[3px] ring-line">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/images/exotic-car-2.jpg"
              alt="Exotic luxury sports car at night in Miami"
              fill
              sizes="(max-width: 1024px) 100vw, 1100px"
              className="object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(110deg, rgba(6,6,6,0.95) 0%, rgba(6,6,6,0.82) 45%, rgba(245,180,0,0.26) 100%)",
              }}
            />
          </div>

          <div className="px-7 py-16 sm:px-14 sm:py-20">
            <h2 className="max-w-2xl text-3xl font-extrabold sm:text-5xl">
              Your keys are <span className="text-gradient">one text away.</span>
            </h2>
            <p className="mt-4 max-w-lg text-lg text-cream/85">
              Send your dates and we&apos;ll send back availability and an all-in
              price — delivered to your door. McLaren, Maybach, Range Rover and
              more.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#quote" className="btn btn-primary text-base">
                Get my free quote
                <ArrowRight className="h-[18px] w-[18px]" />
              </a>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                <Instagram className="h-[18px] w-[18px]" />
                DM @{site.instagramHandle}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
