import Image from "next/image";
import LeadForm from "./LeadForm";
import { site } from "./site-config";
import { Instagram, ShieldCheck, Star, MapPin } from "./icons";

const badges = [
  { icon: ShieldCheck, text: "Fully insured" },
  { icon: Star, text: "Verified on Instagram" },
  { icon: MapPin, text: "NYC + Tri-State" },
];

export default function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-dvh flex-col overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero.jpg"
          alt="White Bugatti Chiron on a New York City street at night"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Legibility + brand overlays */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(6,6,10,0.94) 0%, rgba(6,6,10,0.78) 42%, rgba(6,6,10,0.45) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(6,6,10,0.55) 0%, rgba(6,6,10,0) 22%, rgba(6,6,10,0) 60%, rgba(6,6,10,1) 100%)",
          }}
        />
        <div
          className="absolute -left-32 top-10 h-[40rem] w-[40rem] rounded-[3px] opacity-50 blur-[120px]"
          style={{ background: "radial-gradient(circle, rgba(255,212,0,0.42), transparent 65%)" }}
        />
      </div>

      <div className="mx-auto grid w-full max-w-6xl flex-1 items-center gap-12 px-5 pb-20 pt-32 sm:px-6 sm:pt-36 lg:grid-cols-[1.05fr_minmax(0,460px)] lg:gap-10 lg:pb-28 lg:pt-44">
        {/* Left: pitch */}
        <div className="reveal max-w-xl">
          <p className="eyebrow">
            <span className="inline-block h-1.5 w-1.5 rounded-[3px] bg-pink" />
            Exotic &amp; Luxury Car Rental · New York City
          </p>

          <h1 className="mt-4 text-[2.7rem] font-extrabold leading-[1.03] sm:text-6xl">
            The keys to New York&apos;s
            <span className="block text-gradient">most wanted cars.</span>
          </h1>

          <p className="mt-5 max-w-md text-lg leading-relaxed text-cream/80">
            Lamborghini, Ferrari, McLaren, Porsche and more — your concierge
            exotic car rental for NYC &amp; the Tri-State. Fully insured and
            delivered to your door. No surprises.
          </p>

          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2.5">
            {badges.map((b) => (
              <li key={b.text} className="flex items-center gap-2 text-sm font-medium text-cream/85">
                <b.icon className="h-[18px] w-[18px] text-blue" />
                {b.text}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#fleet" className="btn btn-ghost">
              Explore the fleet
            </a>
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cream/90 transition-colors hover:text-cream"
            >
              <Instagram className="h-[18px] w-[18px]" />
              @{site.instagramHandle}
            </a>
          </div>
        </div>

        {/* Right: conversion form */}
        <div id="quote" className="reveal relative scroll-mt-24" style={{ animationDelay: "0.08s" }}>
          {/* Soft brand glow so the solid form panel pops off the photo */}
          <div
            aria-hidden="true"
            className="absolute -inset-5 -z-10 blur-[55px] opacity-70"
            style={{
              background:
                "radial-gradient(60% 55% at 72% 18%, rgba(255,212,0,0.34), transparent 70%), radial-gradient(55% 55% at 22% 92%, rgba(245,180,0,0.3), transparent 70%)",
            }}
          />
          <LeadForm />
        </div>
      </div>
    </section>
  );
}
