export default function MenuIcon({ menuOpen, onClick }) {
  return (
    <div className="flex flex-col gap-1.5 cursor-pointer w-6" onClick={onClick}>
      <span
        className={`h-0.5 w-full bg-white transition-all duration-300 ${
          menuOpen ? "rotate-45 translate-y-2" : ""
        }`}
      ></span>
      <span
        className={`h-0.5 w-full bg-white transition-all duration-300 ${
          menuOpen ? "opacity-0" : ""
        }`}
      ></span>
      <span
        className={`h-0.5 w-full bg-white transition-all duration-300 ${
          menuOpen ? "-rotate-45 -translate-y-2" : ""
        }`}
      ></span>
    </div>
  );
}
