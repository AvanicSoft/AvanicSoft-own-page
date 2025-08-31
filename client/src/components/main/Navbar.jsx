import { useState } from "react";
import { RiMenuLine, RiCloseLine, RiSearchLine, RiUserLine } from "react-icons/ri";
import logoImg from "../../assets/Avanicp.png";
import ScrollIndicator from "./ScrollIndicator";


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home"); // active link state

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Services", href: "#" },
    { name: "Featured", href: "#" },
    { name: "Contact Me", href: "#" },
  ];

  const handleLinkClick = (name) => {
    setActiveLink(name);
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-50 shadow-md md:px-10 px-5 z-1000">
      <nav className="container mx-auto flex items-center justify-between h-14 px-6">
        {/* Logo */}
        <a href="#" className="font-semibold text-gray-900 hover:text-purple-600">
          <Logo h={"12"} w={12} />
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => handleLinkClick(link.name)}
                className={`font-semibold py-3 px-4  transition-colors duration-300 ${
                  activeLink === link.name
                    ? "bg-purple-600 text-white"
                    : "text-gray-900 hover:bg-purple-100 hover:text-purple-600"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

    
          {/* Login */}
          <RiUserLine className="text-2xl cursor-pointer text-gray-900 hover:text-purple-600 transition-colors duration-300" />

          {/* Mobile Menu Toggle */}
          <div className="md:hidden ">
            {menuOpen ? (
              <RiCloseLine
                className="text-2xl cursor-pointer text-gray-900 hover:text-purple-600 transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              />
            ) : (
              <RiMenuLine
                className="text-2xl cursor-pointer text-gray-900 hover:text-purple-600 transition-colors duration-300"
                onClick={() => setMenuOpen(true)}
              />
            )}
          </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-14 left-0 w-full bg-gray-50 shadow-md md:hidden transition-all duration-300">
            <ul className="flex flex-col items-center py-6 space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => handleLinkClick(link.name)}
                    className={`font-semibold py-2 px-6 rounded transition-colors duration-300 ${
                      activeLink === link.name
                        ? "bg-purple-600 text-white"
                        : "text-gray-900 hover:bg-purple-100 hover:text-purple-600"
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
      <ScrollIndicator navbarHeight={55}  colorGradient = "linear-gradient(90deg, rgba(105, 24, 255, 1), #00fae9ff)"/>
    </header>
  );
}
 function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div>
        <img className="w-[40px] h-[40px]" src={logoImg} alt="Logo" />
      </div>
      <div className="w-[2px] h-7 bg-purple-400"
      >
      </div>
      <div className="flex flex-row"> 
        <h1 className="  font-bold text-xl  " >
            AvanicSoft
        </h1>
      </div>
    </div>
  );
}
