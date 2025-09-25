import logo from "../assets/logo.png";

export default function Logo({ className = "", height = "h-15" }) {
  return (
    <a href="#home">
      <img
        className={`${height} cursor-pointer hover:scale-110 transition duration-75 ${className}`}
        src={logo}
        alt="logo"
      />
    </a>
  );
}
