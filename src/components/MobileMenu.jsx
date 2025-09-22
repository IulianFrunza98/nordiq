export default function MobileMenu({ open, setOpen }) {
  const links = ["Servicii", "Portofoliu", "Despre", "Contact"];

  return (
    <div
      className={`fixed top-0 right-0 h-full w-64 bg-black text-white transform transition-transform duration-300 sm:hidden z-40
        ${open ? "translate-x-0" : "translate-x-full"}`}
    >
      <ul className="flex flex-col items-center justify-center h-full gap-8">
        {links.map((link, idx) => (
          <li
            key={idx}
            className="text-lg hover:text-gray-300 transition-colors"
          >
            <a href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
