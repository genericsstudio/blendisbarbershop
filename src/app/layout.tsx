import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://blendisbarbershop.ch"),
  title: {
    default: "Blendi's Barbershop Flawil – Haarschnitt & Bartpflege",
    template: "%s | Blendi's Barbershop Flawil",
  },
  description:
    "Blendi's Barbershop in Flawil (SG) – professionelle Herrenhaarschnitte, Bartschnitt und klassische Barber-Services. Online Termin buchen. Rösslistrasse 12, 9230 Flawil.",
  keywords: [
    "Barbershop Flawil",
    "Barbershop St. Gallen",
    "Haarschnitt Flawil",
    "Bartpflege Flawil",
    "Barber Flawil",
    "Herrenfriseur Flawil",
    "Blendi's Barbershop",
    "Blendis Barbershop",
    "Haarschnitt 9230",
    "Termin buchen Barbershop",
  ],
  authors: [{ name: "Blendi's Barbershop" }],
  creator: "Blendi's Barbershop",
  openGraph: {
    type: "website",
    locale: "de_CH",
    url: "https://blendisbarbershop.ch",
    siteName: "Blendi's Barbershop Flawil",
    title: "Blendi's Barbershop Flawil – Haarschnitt & Bartpflege",
    description:
      "Professionelle Herrenhaarschnitte und Bartpflege in Flawil (SG). Jetzt online Termin buchen.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Blendi's Barbershop Flawil",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blendi's Barbershop Flawil – Haarschnitt & Bartpflege",
    description:
      "Professionelle Herrenhaarschnitte und Bartpflege in Flawil (SG). Jetzt online Termin buchen.",
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://blendisbarbershop.ch",
  },
  verification: {
    google: "UZajhpF9SKqBcn4rxEU2eNFREHCOQwGXYWkTdNxhND8",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
