import { useState } from "react";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import Logo from "./Logo";
import MenuIcon from "../ui/MenuIcon";

export default function Navbar() {
  const [menuOpen, setIsOpen] = useState(false);

  return (
    <nav
      id="home"
      className="bg-black w-full px-4 py-1 flex items-center justify-between relative"
    >
      <Logo />

      <div className="sm:hidden">
        <MenuIcon
          menuOpen={menuOpen}
          onClick={() => setIsOpen((open) => !open)}
        />
      </div>

      <div className="hidden sm:flex">
        <DesktopMenu />
      </div>

      <MobileMenu open={menuOpen} setOpen={setIsOpen} />
    </nav>
  );
}
