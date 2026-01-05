"use client"
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import BookingButton from "../ui/bookingbutton";

const Navbar04Page = () => {
  return (
    <nav className="h-16 fixed top-6 inset-x-4 text-background bg-foreground/75 backdrop-blur-xl border rounded-full z-50">
      <div className="h-full flex items-center md:justify-between justify-around mx-auto px-4 gap-4">
        <div className="flex items-center w-48 lg:ml-4">
          <Logo />
        </div>

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-3">
          <BookingButton />
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <NavigationSheet />
        </div>
      </div>
    </nav>
  );
};

export default Navbar04Page;
