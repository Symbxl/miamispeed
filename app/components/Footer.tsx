import { nav, services, site } from "./site-config";
import { Instagram, MapPin, Phone, Clock } from "./icons";

export default function Footer() {
  const year = 2026; // build-time constant (avoids hydration drift)
  return (
    <footer className="border-t border-line bg-ink">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span
                className="grid h-9 w-9 place-items-center rounded-[3px] text-sm font-black text-ink"
                style={{ backgroundImage: "linear-gradient(135deg, var(--color-pink), var(--color-blue))" }}
              >
                MS
              </span>
              <span className="text-[0.95rem] font-bold tracking-tight">
                Miami<span className="text-gradient"> Speed</span> Rentals
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Veteran-owned exotic &amp; luxury car rental — McLaren, Lamborghini,
              Maybach, Range Rover and more, delivered across Miami &amp; Broward.
            </p>
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-[3px] border border-line px-3.5 py-2 text-sm font-medium text-cream/90 transition-colors hover:border-white/25"
            >
              <Instagram className="h-[18px] w-[18px] text-blue" />
              @{site.instagramHandle}
            </a>
          </div>

          {/* Explore */}
          <nav aria-label="Footer">
            <h3 className="text-sm font-semibold">Explore</h3>
            <ul className="mt-4 space-y-2.5">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-sm text-muted transition-colors hover:text-cream">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Fleet */}
          <div>
            <h3 className="text-sm font-semibold">Fleet</h3>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <a href="#fleet" className="text-sm text-muted transition-colors hover:text-cream">
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold">Get in touch</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-[18px] w-[18px] shrink-0 text-blue" />
                {site.city}, {site.region} · Miami &amp; Broward
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="mt-0.5 h-[18px] w-[18px] shrink-0 text-blue" />
                {site.hoursNote}
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-[18px] w-[18px] shrink-0 text-blue" />
                {site.phone ? (
                  <a href={`tel:${site.phone.replace(/[^\d+]/g, "")}`} className="hover:text-cream">
                    {site.phone}
                  </a>
                ) : (
                  <span className="italic opacity-70">[ add your phone number ]</span>
                )}
              </li>
            </ul>
            <a href="#quote" className="btn btn-primary mt-5 w-full">
              Request a quote
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-line pt-7 text-xs text-muted sm:flex-row">
          <p>© {year} {site.name}. All rights reserved. Proudly veteran-owned.</p>
          <p>Miami · Miami Beach · Brickell · Wynwood · Fort Lauderdale</p>
        </div>
      </div>
    </footer>
  );
}
