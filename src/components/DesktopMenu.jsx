export default function DesktopMenu() {
  const links = ["Servicii", "Portofoliu", "Despre", "Contact"];

  return (
    <ul className="sm:flex hidden items-center gap-5 font-bold">
      {links.map((link, idx) => (
        <li
          key={idx}
          className="text-white hover:bg-white hover:text-black px-2 rounded transition duration-200"
        >
          <a href={`#${link.toLowerCase()}`}>{link}</a>
        </li>
      ))}
    </ul>
  );
}
