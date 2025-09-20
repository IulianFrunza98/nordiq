import { Link } from "react-router-dom";

export default function DesktopMenu() {
  return (
    <ul className="sm:flex hidden items-center gap-5 font-bold">
      <li className="text-white hover:bg-white hover:text-black px-2 rounded transition duration-200">
        <a href="`#servicii">Servicii</a>
      </li>
      <li className="text-white hover:bg-white hover:text-black px-2 rounded transition duration-200">
        <Link to="/portofolio" href="`#servicii">
          Portofoliu
        </Link>
      </li>
      <li className="text-white hover:bg-white hover:text-black px-2 rounded transition duration-200">
        <a href="#despre">Despre</a>
      </li>
      <li className="text-white hover:bg-white hover:text-black px-2 rounded transition duration-200">
        <a href="#contact">Contact</a>
      </li>
    </ul>
  );
}
