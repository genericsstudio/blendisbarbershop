import type { Metadata } from "next";
import Link from "next/link";
import Logo from "../components/logo";

export const metadata: Metadata = {
  title: "Allgemeine Geschäftsbedingungen",
  description:
    "AGB von Blendis Barbershop Flawil – Allgemeine Geschäftsbedingungen für unsere Dienstleistungen.",
  robots: { index: false, follow: false },
};

const sections = [
  {
    title: "1. Geltungsbereich",
    content: [
      "Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für sämtliche Dienstleistungen und Terminvereinbarungen zwischen Blendis Barbershop (nachfolgend „Barbershop“) und seinen Kundinnen und Kunden.",
      "Mit der Buchung eines Termins – online, telefonisch oder vor Ort – erklärt sich die Kundin bzw. der Kunde mit diesen AGB einverstanden.",
    ],
  },
  {
    title: "2. Dienstleistungen",
    content: [
      "Blendis Barbershop bietet professionelle Barber- und Pflegedienstleistungen an, insbesondere: Herrenhaarschnitte, Bartschnitt, Bartrasur, weitere Diensleistungen gemäss aktuellem Angebot.",
      "Alle Dienstleistungen werden fachgerecht und mit grösster Sorgfalt ausgeführt.",
    ],
  },
  {
    title: "3. Terminvereinbarung",
    content: [
      "Termine können online, telefonisch oder direkt im Geschäft vereinbart werden.",
      "Die Kundschaft verpflichtet sich, bei der Terminbuchung korrekte Angaben zu machen.",
      "Blendis Barbershop behält sich das Recht vor, Termine aus wichtigen Gründen zu verschieben oder abzusagen, insbesondere bei Krankheit, technischen Problemen oder anderen unvorhersehbaren Umständen.",
    ],
  },
  {
    title: "4. Terminabsagen und Nichterscheinen",
    content: [
      "Vereinbarte Termine müssen mindestens 24 Stunden im Voraus abgesagt oder verschoben werden.",
      "Bei: verspäteter Absage (weniger als 24 Stunden vor dem Termin oder, Nichterscheinen ohne Mitteilung",
      "behält sich Blendis Barbershop das Recht vor, den reservierten Termin vollständig in Rechnung zu stellen.",
      "Die Rechnung ist innerhalb von 10 Tagen zahlbar.",
    ],
  },
  {
    title: "5. Verspätungen",
    content: [
      "Erscheint eine Kundin oder ein Kunde verspätet zum Termin, kann die Behandlungsdauer entsprechend verkürzt werden, sofern dies aus organisatorischen Gründen erforderlich ist.",
      "Bei erheblicher Verspätung kann der Termin abgesagt und gemäss Abschnitt 4 verrechnet werden.",
    ],
  },
  {
    title: "6. Preise und Zahlung",
    content: [
      "Es gelten die jeweils aktuellen Preise im Geschäft oder auf der Website von Blendis Barbershop.",
      "Die Zahlung erfolgt unmittelbar nach der Dienstleistung ausschliesslich in bar (CHF).",
      "Alle Preise verstehen sich in Schweizer Franken (CHF).",
    ],
  },
  {
    title: "7. Gutscheine",
    content: [
      "Gutscheine sind übertragbar und können für sämtliche Dienstleistungen von Blendis Barbershop verwendet werden.",
      "Eine Barauszahlung von Gutscheinen ist ausgeschlossen.",
    ],
  },
  {
    title: "8. Hygiene und Verhalten",
    content: [
      "Blendis Barbershop legt grossen Wert auf Hygiene, Professionalität und ein respektvolles Miteinander.",
      "Kundinnen und Kunden werden gebeten: pünktlich zu erscheinen, hygienische Grundstadards einzuhalten, respektvoll gegenüber Mitarbeitenden und anderen Kundinnen und Kunden aufzutreten.",
      "Bei unangemessenem Verhalten kann die Dienstleistung verweigert werden.",
    ],
  },
  {
    title: "9. Haftung",
    content: [
      "Blendis Barbershop haftet ausschliesslich für Schäden, die vorsätzlich oder grobfahrlässig verursacht wurden.",
      "Für allergische Reaktionen oder individuelle Unverträglichkeiten wird keine Haftung übernommen, sofern keine grobe Fahrlässigkeit vorliegt.",
      "Für persönliche Gegenstände der Kundschaft übernimmt Blendis Barbershop keine Haftung.",
    ],
  },
  {
    title: "10. Datenschutz",
    content: [
      "Personenbezogene Daten werden ausschliesslich zur Terminverwaltung und Kundenbetreuung verwendet und vertraulich behandelt.",
      "Die Bearbeitung personenbezogener Daten erfolgt gemäss den geltenden Datenschutzbestimmungen der Schweiz.",
    ],
  },
  {
    title: "11. Änderungen der AGB",
    content: [
      "Blendis Barbershop behält sich das Recht vor, diese AGB jederzeit zu ändern.",
      "Es gilt die jeweils aktuelle Version auf der Website.",
    ],
  },
  {
    title: "Gerichtsstand und anwendbares Recht",
    content: [
      "Es gilt ausschliesslich schweizerisches Recht.",
      "Gerichtsstand ist der Sitz von Blendis Barbershop in der Schweiz.",
    ],
  },
];

export default function AgbPage() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      {/* Header */}
      <div className="border-b border-primary/12 py-8 px-6">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <Link href="/" aria-label="Zurück zur Startseite">
            <Logo
              className="w-28 h-auto opacity-80 hover:opacity-100 transition-opacity"
              style={{ filter: "invert(1)" }}
            />
          </Link>
          <Link
            href="/"
            className="text-[9px] tracking-[0.4em] text-muted-foreground uppercase hover:text-primary transition-colors"
          >
            ← Startseite
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-6 py-20">
        {/* Title */}
        <div className="mb-16">
          <p className="text-[10px] tracking-[0.5em] text-primary/60 uppercase mb-3">
            Rechtliches
          </p>
          <h1 className="font-display text-4xl md:text-5xl tracking-wide text-foreground">
            Allgemeine Geschäfts&shy;bedingungen
          </h1>
          <p className="text-muted-foreground text-sm mt-5">
            Stand: Mai 2025 &nbsp;·&nbsp; Blendis Barbershop, Rösslistrasse 12,
            9230 Flawil
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-12">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-[10px] tracking-[0.45em] text-primary/70 uppercase mb-4">
                {section.title}
              </h2>
              <div className="space-y-3 border-l border-primary/15 pl-5">
                {section.content.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-sm text-foreground/75 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-5 my-16">
          <div className="h-px flex-1 bg-primary/20" />
          <span className="text-primary/40 text-xs">✦</span>
          <div className="h-px flex-1 bg-primary/20" />
        </div>

        {/* Contact */}
        <div className="text-center">
          <p className="text-[9px] tracking-[0.45em] text-primary/55 uppercase mb-3">
            Fragen zu diesen AGB?
          </p>
          <a
            href="tel:+41764233322"
            className="text-sm text-foreground/70 hover:text-primary transition-colors"
          >
            076 423 33 22
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-10 px-6 text-center border-t border-primary/12">
        <p className="text-[9px] tracking-[0.45em] text-muted-foreground uppercase">
          © {new Date().getFullYear()} Blendis Barbershop &nbsp;·&nbsp; Flawil,
          Schweiz
        </p>
      </footer>
    </main>
  );
}
