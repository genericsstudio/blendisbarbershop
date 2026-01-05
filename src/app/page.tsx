import Hero05 from "@/components/hero-05/hero-05";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Barbershop in Flawil – Haarschnitt & Bartpflege",
  description:
    "Blendis Barbershop in Flawil. Professionelle Herrenhaarschnitte, Bartpflege und klassische Barber-Services. Buche deinen Termin online.",
};

export default function Home() {
  return (
    <main>
      <Hero05 />
    </main>
  );
}
