import Image from "next/image";
import { Phone, MapPin, Instagram, Car, Train } from "lucide-react";
import Logo from "./components/logo";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: "Blendis Barbershop",
  image: "https://blendisbarbershop.ch/opengraph-image.png",
  url: "https://blendisbarbershop.ch",
  telephone: "+41764233322",
  priceRange: "CHF 20–60",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rösslistrasse 12",
    addressLocality: "Flawil",
    postalCode: "9230",
    addressCountry: "CH",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 47.4089,
    longitude: 9.1089,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday"],
      opens: "10:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Thursday", "Friday"],
      opens: "10:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "17:00",
    },
  ],
  sameAs: ["https://www.instagram.com/blendisbarbershop"],
};

const services = {
  adults: [
    { name: "Haarschnitt", price: "CHF 30" },
    { name: "Bartschnitt", price: "CHF 20" },
    { name: "Haar- & Bartschnitt", price: "CHF 40" },
    { name: "Haar- & Bartschnitt + Bartfärben", price: "CHF 60" },
  ],
  kids: [{ name: "Haarschnitt", price: "CHF 25" }],
};

const hours = [
  { day: "Montag", hours: null, note: null },
  { day: "Dienstag", hours: "10:00–12:00  ·  13:00–19:00", note: "Walk-in" },
  { day: "Mittwoch", hours: "10:00–12:00  ·  13:00–19:00", note: "Walk-in" },
  { day: "Donnerstag", hours: "10:00–12:00  ·  13:00–19:00", note: "Termin" },
  { day: "Freitag", hours: "10:00–12:00  ·  13:00–19:00", note: "Termin" },
  { day: "Samstag", hours: "10:00–13:00  ·  14:00–17:00", note: "Termin" },
  { day: "Sonntag", hours: null, note: null },
];

function Divider({ label }: { label?: string }) {
  return (
    <div className="flex items-center gap-5 my-14">
      <div className="h-px flex-1 bg-primary/20" />
      {label ? (
        <span className="text-[10px] tracking-[0.45em] text-primary/50 uppercase">
          {label}
        </span>
      ) : (
        <span className="text-primary/40 text-xs">✦</span>
      )}
      <div className="h-px flex-1 bg-primary/20" />
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] tracking-[0.5em] text-primary/60 uppercase mb-3">
      {children}
    </p>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-4xl md:text-5xl font-bold tracking-wide text-foreground">
      {children}
    </h2>
  );
}

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        id="hero"
        className="h-screen grid grid-cols-1 md:grid-cols-[1fr_400px_1fr] lg:grid-cols-[1fr_460px_1fr]"
      >
        {/* Left image – desktop only */}
        <div className="relative hidden md:block overflow-hidden">
          <Image
            src="/heropic.jpeg"
            alt=""
            fill
            className="object-cover scale-105"
            priority
          />
          <div className="absolute inset-0 bg-background/50" />
        </div>

        {/* Center panel */}
        <div className="relative flex flex-col items-center justify-center bg-background px-10 py-20 border-x border-primary/15">
          {/* Mobile: faint background image */}
          <div className="absolute inset-0 md:hidden overflow-hidden">
            <Image
              src="/heropic.jpeg"
              alt=""
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-background/88" />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center w-full">
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <Logo
                className="w-48 md:w-72 h-auto"
                style={{ filter: "invert(1)", opacity: 0.9 }}
              />
            </div>

            {/* Top rule */}
            <div className="flex items-center justify-center gap-4 mb-10">
              <div className="h-px w-10 bg-primary/50" />
              <span className="text-[9px] tracking-[0.5em] text-primary/60 uppercase">
                Barbershop · Flawil
              </span>
              <div className="h-px w-10 bg-primary/50" />
            </div>

            {/* Name */}
            <h1 className="font-display text-[3.5rem] md:text-[4rem] lg:text-[4.5rem] font-bold leading-none tracking-[0.06em] text-foreground mb-3">
              BLENDIS
            </h1>
            <p className="font-display text-base md:text-lg tracking-[0.55em] text-primary uppercase italic mb-10">
              Barbershop
            </p>

            {/* Bottom rule */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <div className="h-px w-10 bg-primary/50" />
              <span className="text-[9px] tracking-[0.4em] text-muted-foreground uppercase">
                9230 Flawil
              </span>
              <div className="h-px w-10 bg-primary/50" />
            </div>

            {/* CTA */}
            <a
              href="https://app.cal.eu/blendis-barbershop/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-primary/60 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-8 py-3 text-[10px] tracking-[0.4em] uppercase"
            >
              Termin buchen
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
            <div className="h-10 w-px bg-primary/30 animate-pulse" />
          </div>
        </div>

        {/* Right image – desktop only */}
        <div className="relative hidden md:block overflow-hidden">
          <Image
            src="/heropic2.jpeg"
            alt=""
            fill
            className="object-cover scale-105"
            priority
          />
          <div className="absolute inset-0 bg-background/50" />
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────── */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-14">
            <SectionLabel>Unsere</SectionLabel>
            <SectionHeading>Services & Preise</SectionHeading>
          </div>

          {/* Adults */}
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-7">
              <div className="h-px flex-1 bg-primary/20" />
              <span className="text-[9px] tracking-[0.45em] text-primary/55 uppercase">
                Erwachsene · ab 16
              </span>
              <div className="h-px flex-1 bg-primary/20" />
            </div>
            <div className="space-y-0">
              {services.adults.map((item) => (
                <div
                  key={item.name}
                  className="flex items-baseline justify-between py-4 border-b border-primary/10 group"
                >
                  <span className="text-foreground/85 group-hover:text-foreground transition-colors">
                    {item.name}
                  </span>
                  <span className="text-primary font-medium tracking-widest text-sm">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Kids */}
          <div>
            <div className="flex items-center gap-4 mb-7">
              <div className="h-px flex-1 bg-primary/20" />
              <span className="text-[9px] tracking-[0.45em] text-primary/55 uppercase">
                Kinder · unter 16
              </span>
              <div className="h-px flex-1 bg-primary/20" />
            </div>
            <div className="space-y-0">
              {services.kids.map((item) => (
                <div
                  key={item.name}
                  className="flex items-baseline justify-between py-4 border-b border-primary/10"
                >
                  <span className="text-foreground/85">{item.name}</span>
                  <span className="text-primary font-medium tracking-widest text-sm">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BOOKING ──────────────────────────────────────── */}
      <section
        id="termin"
        className="py-28 px-6 bg-card border-y border-primary/12"
      >
        <div className="max-w-lg mx-auto text-center">
          <SectionLabel>Jetzt</SectionLabel>
          <SectionHeading>Termin buchen</SectionHeading>
          <p className="text-muted-foreground mt-5 mb-12 leading-relaxed">
            Buche bequem online oder ruf uns einfach an.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://app.cal.eu/blendis-barbershop/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-primary-foreground hover:bg-primary/85 transition-colors px-10 py-3.5 text-[10px] tracking-[0.4em] uppercase w-full sm:w-auto text-center"
            >
              Online buchen
            </a>
            <a
              href="tel:+41764233322"
              className="inline-flex items-center justify-center gap-2.5 border border-primary/35 text-foreground/80 hover:border-primary hover:text-primary transition-all px-10 py-3.5 text-[10px] tracking-[0.4em] uppercase w-full sm:w-auto"
            >
              <Phone className="w-3 h-3" />
              076 423 33 22
            </a>
          </div>
        </div>
      </section>

      {/* ── HOURS ────────────────────────────────────────── */}
      <section id="oeffnungszeiten" className="py-24 px-6">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-14">
            <SectionLabel>Wann wir für euch da sind</SectionLabel>
            <SectionHeading>Öffnungszeiten</SectionHeading>
          </div>

          <div>
            {hours.map((item) => (
              <div
                key={item.day}
                className={`flex items-center justify-between py-4 border-b border-primary/10 ${
                  !item.hours ? "opacity-35" : ""
                }`}
              >
                <span className="text-sm tracking-wide w-28 shrink-0">
                  {item.day}
                </span>
                <span className="text-sm text-foreground/80 flex-1 text-center">
                  {item.hours ?? "Geschlossen"}
                </span>
                {item.note ? (
                  <span className="text-[9px] tracking-[0.4em] text-primary/60 uppercase w-16 text-right hidden sm:block">
                    {item.note}
                  </span>
                ) : (
                  <span className="w-16 hidden sm:block" />
                )}
              </div>
            ))}
          </div>

          <p className="mt-8 text-[10px] text-muted-foreground text-center tracking-[0.3em] uppercase">
            Di–Mi Walk-in &nbsp;·&nbsp; Do–Sa nur mit Termin
          </p>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────── */}
      <section
        id="kontakt"
        className="py-24 px-6 bg-card border-y border-primary/12"
      >
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-14">
            <SectionLabel>Finde uns</SectionLabel>
            <SectionHeading>Kontakt & Standort</SectionHeading>
          </div>

          <div className="grid md:grid-cols-2 gap-14 mb-14">
            {/* Contact info */}
            <div className="space-y-7">
              <div className="flex items-start gap-4">
                <MapPin className="w-3.5 h-3.5 text-primary mt-1 shrink-0" />
                <div>
                  <p className="text-foreground/85">Rösslistrasse 12</p>
                  <p className="text-foreground/85">9230 Flawil</p>
                  <p className="text-muted-foreground text-sm mt-1">Schweiz</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-3.5 h-3.5 text-primary shrink-0" />
                <a
                  href="tel:+41764233322"
                  className="text-foreground/85 hover:text-primary transition-colors"
                >
                  076 423 33 22
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Instagram className="w-3.5 h-3.5 text-primary shrink-0" />
                <a
                  href="https://www.instagram.com/blendisbarbershop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/85 hover:text-primary transition-colors"
                >
                  @blendisbarbershop
                </a>
              </div>
            </div>

            {/* Directions */}
            <div className="space-y-5">
              <p className="text-[9px] tracking-[0.45em] text-primary/55 uppercase mb-5">
                Anreise
              </p>
              <div className="flex items-start gap-3.5">
                <Train className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-foreground/75 leading-relaxed">
                  4 Minuten zu Fuss vom Bahnhof Flawil
                </p>
              </div>
              <div className="flex items-start gap-3.5">
                <Car className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-foreground/75 leading-relaxed">
                  Kostenpflichtige Parkplätze auf der Rösslistrasse
                  (weisse Markierungen)
                </p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="overflow-hidden border border-primary/15 h-64 md:h-80">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2679.8!2d9.1089!3d47.4089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479b0b0b0b0b0b0b%3A0x0!2sR%C3%B6sslistrasse%2013%2C%209230%20Flawil%2C%20Switzerland!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: "grayscale(1) invert(0.88) sepia(0.15) contrast(0.92)",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────── */}
      <footer className="py-10 px-6 text-center border-t border-primary/12">
        <p className="text-[9px] tracking-[0.45em] text-muted-foreground uppercase">
          © {new Date().getFullYear()} Blendis Barbershop &nbsp;·&nbsp; Flawil,
          Schweiz
        </p>
      </footer>
    </main>
  );
}
