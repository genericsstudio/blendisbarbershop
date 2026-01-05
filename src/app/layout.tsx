import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar04Page from "@/components/navbar-04/navbar-04";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://blendisbarbershop.ch"),
  title: {
    default: "Blendis Barbershop Flawil",
    template: "%s | Blendis Barbershop Flawil",
  },
  description:
    "Blendis Barbershop in Flawil – professionelle Haarschnitte, Bartpflege und klassische Barber-Services. Jetzt Termin online buchen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar04Page />
        {children}
      </body>
    </html>
  );
}
