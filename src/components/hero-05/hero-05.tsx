"use client"
import React from "react";
import Image from "next/image";

const Hero05 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden">
      <div className="grid grid-cols-3 w-screen h-screen">
        <div className="col-span-3 lg:col-span-1 relative">
          <Image
            src="/heropic.jpeg"
            alt="Barbershop 1"
            fill
            className="object-cover"
          />
        </div>
        <div className="col-span-3 lg:col-span-1 relative">
          <Image
            src="/heropic2.jpeg"
            alt="Barbershop 2"
            fill
            className="object-cover"
          />
        </div>
        <div className="col-span-3 lg:col-span-1 relative">
          <Image
            src="/heropic3.jpeg"
            alt="Barbershop 3"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero05;
