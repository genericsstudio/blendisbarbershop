import Link from "next/link";
import SvgComponent from "./2logo";

export const Logo = () => (
    <Link href="/" className="font-bold text-xs md:text-lg lg:font-black">
      <SvgComponent className="w-full h-full" />
    </Link>
);
