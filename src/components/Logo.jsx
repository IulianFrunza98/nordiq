import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Logo() {
  return (
    <Link to="/">
      <img
        className="h-15 cursor-pointer hover:scale-[1.1] transition duration-75"
        src={logo}
        alt="logo"
      />
    </Link>
  );
}
