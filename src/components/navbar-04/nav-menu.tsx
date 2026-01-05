import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import Link from "next/link";

export const NavMenu = (props: NavigationMenuProps) => (
  <NavigationMenu {...props}>
    <NavigationMenuList className="gap-6 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start">
      <NavigationMenuItem>
        <NavigationMenuLink
          className="rounded-full px-4"
          asChild
          onClick={(e) => {
            // Blur the link to remove focus/hover state after click
            e.currentTarget.blur();
            // Optionally, close the menu if needed (if NavigationMenu supports it)
            // You may need to trigger a state change or call a close function here
          }}
        >
          <Link href="/services">Services und Preise</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink
          className="rounded-full px-4"
          asChild
          onClick={(e) => {
            // Blur the link to remove focus/hover state after click
            e.currentTarget.blur();
            // Optionally, close the menu if needed (if NavigationMenu supports it)
            // You may need to trigger a state change or call a close function here
          }}
        >
          <Link href="/location">Standort</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
);
