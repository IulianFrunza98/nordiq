import { MenuIcon } from "lucide-react";
import DesktopMenu from "./DesktopMenu";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav className="bg-black w-full px-4 py-1 flex items-center justify-between">
      <Logo />
      <MenuIcon className="text-white sm:hidden block cursor-pointer" />
      <DesktopMenu />
    </nav>
  );
}

function MobileMenu() {}
