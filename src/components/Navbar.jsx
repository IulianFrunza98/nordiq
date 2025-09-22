import { useState } from "react";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import { MenuIcon, X } from "lucide-react";
import Logo from "./Logo";

export default function Navbar() {
  const [menuOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black w-full px-4 py-1 flex items-center justify-between relative">
      <Logo />
      <MenuIcon
        onClick={() => setIsOpen((open) => !open)}
        className="text-white sm:hidden block cursor-pointer z-50"
      />
      <DesktopMenu />
      <MobileMenu open={menuOpen} setOpen={setIsOpen} />
    </nav>
  );
}
