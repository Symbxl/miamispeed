"use client";

import { useEffect, useState } from "react";
import { nav, site } from "./site-config";
import { Close, Instagram, Menu } from "./icons";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-line bg-ink/85 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-[68px] max-w-6xl items-center justify-between px-5 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5" aria-label={`${site.name} home`}>
          <Logo />
          <span className="text-[0.95rem] font-bold leading-none tracking-tight">
            Timeless<span className="text-gradient"> Auto</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-muted transition-colors hover:text-cream"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hidden h-10 w-10 items-center justify-center rounded-[3px] border border-line text-muted transition-colors hover:border-white/25 hover:text-cream sm:flex"
          >
            <Instagram className="h-[18px] w-[18px]" />
          </a>
          <a href="#quote" className="btn btn-primary hidden px-5 py-2.5 sm:inline-flex">
            Book now
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-[3px] border border-line text-cream md:hidden"
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      {open && (
        <div className="border-t border-line bg-ink/95 backdrop-blur-xl md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-5 py-3" aria-label="Mobile">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="border-b border-line/60 py-3.5 text-base font-medium text-cream/90"
              >
                {n.label}
              </a>
            ))}
            <a href="#quote" onClick={() => setOpen(false)} className="btn btn-primary mt-4 w-full">
              Get my free quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Logo() {
  return (
    <span
      className="grid h-9 w-9 place-items-center rounded-[3px] text-[0.95rem] font-black"
      style={{
        color: "#0a0410",
        backgroundImage: "linear-gradient(135deg, var(--color-pink), var(--color-blue))",
      }}
      aria-hidden="true"
    >
      TA
    </span>
  );
}
