import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  MapPin,
  Instagram,
  Car,
  Train,
  Star,
  Navigation,
} from "lucide-react";
import Logo from "./components/logo";

const FULL_ADDRESS = "Rösslistrasse 13, 9230 Flawil, Schweiz";
const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  FULL_ADDRESS
)}`;

// Update these by hand when the Google rating changes.
const GOOGLE_RATING = 4.8;
const GOOGLE_REVIEW_COUNT = 92;
const GOOGLE_REVIEWS_URL = `https://www.google.com/search?q=${encodeURIComponent(
  "Blendi's Barbershop Flawil Bewertungen"
)}`;

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
  { day: "Dienstag", hours: "10:00–12:00  ·  13:00–19:00", note: "Ohne Termin" },
  { day: "Mittwoch", hours: "10:00–12:00  ·  13:00–19:00", note: "Ohne Termin" },
  { day: "Donnerstag", hours: "10:00–12:00  ·  13:00–19:00", note: "Termin" },
  { day: "Freitag", hours: "10:00–13:00  ·  14:00–19:00", note: "Termin" },
  { day: "Samstag", hours: "10:00–13:00  ·  14:00–17:00", note: "Termin" },
  { day: "Sonntag", hours: null, note: null },
];

const faq = [
  {
    q: "Wie kann ich bezahlen?",
    a: "Aktuell ausschliesslich bar in CHF, direkt nach der Dienstleistung vor Ort.",
  },
  {
    q: "Ich brauche kurzfristig einen Haarschnitt – geht das ohne Termin?",
    a: "Dienstag und Mittwoch kannst du ohne Termin vorbeikommen. Donnerstag bis Samstag arbeiten wir ausschliesslich nach Terminvereinbarung.",
  },
  {
    q: "Was passiert, wenn ich meinen Termin nicht wahrnehmen kann?",
    a: "Bitte sag uns mindestens 24 Stunden vorher Bescheid. Bei kurzfristigen Absagen oder Nichterscheinen behalten wir uns vor, den Termin vollständig zu berechnen.",
  },
  {
    q: "Was, wenn ich zu spät zum Termin komme?",
    a: "Bei Verspätung kann sich die Behandlungsdauer verkürzen. Bei erheblicher Verspätung behalten wir uns vor, den Termin abzusagen und wie ein Nichterscheinen zu berechnen.",
  },
  {
    q: "Gibt es Gutscheine?",
    a: "Ja, unsere Gutscheine sind übertragbar und für alle Services einlösbar. Eine Barauszahlung ist nicht möglich.",
  },
];

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-4xl md:text-5xl font-bold tracking-wide text-foreground">
      {children}
    </h2>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => {
        const fill = Math.max(0, Math.min(1, rating - i)) * 100;
        return (
          <div key={i} className="relative w-5 h-5">
            <Star className="absolute inset-0 w-5 h-5 text-primary/25" />
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${fill}%` }}
            >
              <Star className="w-5 h-5 fill-primary text-primary" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: "Blendi's Barbershop",
  image: "https://blendisbarbershop.ch/opengraph-image.png",
  url: "https://blendisbarbershop.ch",
  telephone: "+41764233322",
  priceRange: "CHF 20–60",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rösslistrasse 13",
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
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: GOOGLE_RATING,
    reviewCount: GOOGLE_REVIEW_COUNT,
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function Home() {
  return (
    <main className="bg-background text-foreground pb-16 md:pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <h1 className="sr-only">
        Blendi&apos;s Barbershop Flawil – Herrenhaarschnitt & Bartpflege
      </h1>

      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        id="hero"
        className="min-h-screen grid grid-cols-1 md:grid-cols-[1fr_400px_1fr] lg:grid-cols-[1fr_460px_1fr]"
      >
        {/* Left image – desktop only */}
        <div className="relative hidden md:block overflow-hidden">
          <Image
            src="/heropic.jpeg"
            alt="Herrenhaarschnitt bei Blendi's Barbershop in Flawil"
            fill
            className="object-cover scale-105"
            priority
          />
          <div className="absolute inset-0 bg-background/50" />
        </div>

        {/* Center panel */}
        <div className="relative flex flex-col items-center justify-center bg-background px-10 py-20">
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
                className="w-64 md:w-96 h-auto"
                style={{ filter: "invert(1)", opacity: 0.9 }}
              />
            </div>

            {/* CTA */}
            <a
              href="https://app.cal.eu/blendis-barbershop/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-primary-foreground hover:bg-primary/85 transition-colors duration-300 px-8 py-3 text-sm tracking-wide"
            >
              Termin buchen
            </a>

            {/* Secondary CTA */}
            <div className="mt-5">
              <a
                href="tel:+41764233322"
                className="inline-flex items-center gap-2 text-xs tracking-wide text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-3 h-3" />
                oder anrufen
              </a>
            </div>

            {/* Google Rating */}
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-col items-center gap-1.5 mt-8 group"
            >
              <StarRating rating={GOOGLE_RATING} />
              <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                {GOOGLE_RATING.toFixed(1).replace(".", ",")} · {GOOGLE_REVIEW_COUNT}{" "}
                zufriedene Kunden auf Google
              </span>
            </a>
          </div>

        </div>

        {/* Right image – desktop only */}
        <div className="relative hidden md:block overflow-hidden">
          <Image
            src="/heropic2.jpeg"
            alt="Barbershop-Interieur von Blendi's Barbershop in Flawil"
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
            <SectionHeading>Services & Preise</SectionHeading>
          </div>

          <div className="space-y-10">
            {/* Adults */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-display text-2xl md:text-3xl text-foreground">
                  Erwachsene
                </h3>
                <span className="text-xs text-primary border border-primary/40 rounded-full px-3 py-1">
                  ab 16
                </span>
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
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-display text-2xl md:text-3xl text-foreground">
                  Kinder
                </h3>
                <span className="text-xs text-primary border border-primary/40 rounded-full px-3 py-1">
                  unter 16
                </span>
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
        </div>
      </section>

      {/* ── BOOKING ──────────────────────────────────────── */}
      <section id="termin" className="py-28 px-6 bg-card">
        <div className="max-w-lg mx-auto text-center">
          <SectionHeading>Termin buchen</SectionHeading>
          <p className="text-muted-foreground mt-5 mb-12 leading-relaxed">
            Buche bequem online oder ruf uns einfach an.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://app.cal.eu/blendis-barbershop/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-primary-foreground hover:bg-primary/85 transition-colors px-10 py-3.5 text-sm tracking-wide w-full sm:w-auto text-center"
            >
              Online buchen
            </a>
            <a
              href="tel:+41764233322"
              className="inline-flex items-center justify-center gap-2.5 border border-primary/35 text-foreground/80 hover:border-primary hover:text-primary transition-all px-10 py-3.5 text-sm tracking-wide w-full sm:w-auto"
            >
              <Phone className="w-3 h-3" />
              076 423 33 22
            </a>
          </div>
        </div>
      </section>

      {/* ── HOURS ────────────────────────────────────────── */}
      <section id="oeffnungszeiten" className="py-24 px-6 bg-card">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-14">
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
                  <span className="text-xs text-primary/70 w-16 text-right hidden sm:block">
                    {item.note}
                  </span>
                ) : (
                  <span className="w-16 hidden sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section id="faq" className="py-24 px-6">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-14">
            <SectionHeading>Häufige Fragen</SectionHeading>
          </div>
          <div>
            {faq.map((item) => (
              <details
                key={item.q}
                className="group border-b border-primary/10 py-5"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none text-foreground/90 font-medium">
                  {item.q}
                  <span className="shrink-0 text-primary/60 text-xl leading-none transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="text-sm text-foreground/70 leading-relaxed mt-3">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────── */}
      <section id="kontakt" className="py-24 px-6 bg-card">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-14">
            <SectionHeading>Kontakt & Standort</SectionHeading>
          </div>

          <div className="grid md:grid-cols-2 gap-14 mb-14">
            {/* Contact info */}
            <div className="space-y-7">
              <div className="flex items-start gap-4">
                <MapPin className="w-3.5 h-3.5 text-primary mt-1 shrink-0" />
                <div>
                  <p className="text-foreground/85">Rösslistrasse 13</p>
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
              <a
                href={DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary hover:underline underline-offset-4"
              >
                <Navigation className="w-3.5 h-3.5 shrink-0" />
                Route planen
              </a>
            </div>

            {/* Directions */}
            <div className="space-y-5">
              <h4 className="text-sm font-medium text-primary/80 mb-5">
                Anreise
              </h4>
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
          <div className="overflow-hidden border border-primary/15 bg-card h-64 md:h-80">
            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                `Blendi's Barbershop, ${FULL_ADDRESS}`
              )}&output=embed`}
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: "grayscale(1) invert(0.92) contrast(0.9) brightness(0.95)",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────── */}
      <footer className="border-t border-primary/12 bg-card">
        <div className="max-w-4xl mx-auto px-6 py-16 grid gap-10 sm:grid-cols-3">
          {/* Brand */}
          <div>
            <Logo
              className="w-32 h-auto mb-4"
              style={{ filter: "invert(1)", opacity: 0.9 }}
            />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Rösslistrasse 13
              <br />
              9230 Flawil, Schweiz
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-medium text-primary/80 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#services"
                  className="text-foreground/75 hover:text-primary transition-colors"
                >
                  Services & Preise
                </a>
              </li>
              <li>
                <a
                  href="#termin"
                  className="text-foreground/75 hover:text-primary transition-colors"
                >
                  Termin buchen
                </a>
              </li>
              <li>
                <a
                  href="#oeffnungszeiten"
                  className="text-foreground/75 hover:text-primary transition-colors"
                >
                  Öffnungszeiten
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-foreground/75 hover:text-primary transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#kontakt"
                  className="text-foreground/75 hover:text-primary transition-colors"
                >
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium text-primary/80 mb-4">
              Kontakt
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="tel:+41764233322"
                  className="flex items-center gap-2 text-foreground/75 hover:text-primary transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 shrink-0" />
                  076 423 33 22
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/blendisbarbershop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-foreground/75 hover:text-primary transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5 shrink-0" />
                  @blendisbarbershop
                </a>
              </li>
            </ul>
          </div>

          <div className="sm:col-span-3 flex flex-col-reverse sm:flex-row items-center justify-between gap-3 mt-8">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Blendi&apos;s Barbershop
            </p>
            <Link
              href="/agb"
              className="text-sm text-foreground/80 hover:text-primary transition-colors"
            >
              AGB
            </Link>
          </div>
        </div>
      </footer>

      {/* ── STICKY MOBILE CTA ────────────────────────────── */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 p-3 bg-background/95 backdrop-blur shadow-[0_-8px_24px_-12px_rgba(0,0,0,0.6)]">
        <a
          href="https://app.cal.eu/blendis-barbershop/"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center bg-primary text-primary-foreground py-3 text-sm tracking-wide"
        >
          Termin buchen
        </a>
      </div>
    </main>
  );
}
