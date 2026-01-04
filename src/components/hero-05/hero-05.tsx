"use client"
import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import BookingButton from "../ui/bookingbutton";

const Hero05 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden">
      <div className="grid grid-cols-3 gap-4 w-screen h-screen">
        <div className="col-span-2 row-span-1 relative">
          <Image
            src="/heropic.jpeg"
            alt="Barbershop 1"
            fill
            className="rounded-xl object-cover"
          />
        </div>
        <div className="col-span-1 row-span-2 relative">
          <Image
            src="/heropic2.jpeg"
            alt="Barbershop 2"
            fill
            className="object-cover rounded-xl"
          />
        </div>
        <div className="col-span-2 row-span-1 relative">
          <Image
            src="/heropic3.jpeg"
            alt="Barbershop 3"
            fill
            className="object-cover rounded-xl"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <div className="bg-black/75 backdrop-blur-3xl p-6 m-6 rounded-xl">
            <h1 className="mt-6 max-w-[17ch] text-4xl md:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold !leading-[1.2] tracking-tight">
              Dein Barbershop in Flawil
            </h1>
            <p className="mt-6 max-w-[60ch] text-lg">
              Professionelle Haarschnitte und Bartpflege. Ohne Schnickschnack,
              dafür mit Leidenschaft und Können.
            </p>
            <div className="mt-12 flex items-center gap-4">
              <BookingButton />
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full text-base shadow-none"
              >
                <Link href="/services">Preise</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero05;
