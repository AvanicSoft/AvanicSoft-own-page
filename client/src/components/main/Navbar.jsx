import { useState } from "react";
import {
  RiMenuLine,
  RiCloseLine,
  RiUserLine,
  RiSearchLine,
} from "react-icons/ri";
import logoImg from "../../assets/Avanicp.png";
import ScrollIndicator from "./ScrollIndicator";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [hoveredIndex, setHoveredIndex] = useState(-1);

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
    <header className="fixed top-0 left-0 w-full bg-gray-50 shadow-md z-[1000]">
      <nav className="max-w-[1440px] mx-auto flex items-center justify-between h-16 px-4 sm:px-6 lg:px-10">
        <a href="#" className="hidden lg:flex items-center">
          <Logo />
        </a>

        <ul className="hidden xl:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => handleLinkClick(link.name)}
                className={`font-semibold py-2 px-4 transition-colors duration-300 whitespace-nowrap ${
                  activeLink === link.name
                    ? "bg-purple-600 text-white rounded"
                    : "text-gray-900 hover:bg-purple-100 hover:text-purple-600"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <ul className="hidden lg:flex xl:hidden space-x-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => handleLinkClick(link.name)}
                className={`font-medium py-2 px-3 text-sm transition-colors duration-300 whitespace-nowrap ${
                  activeLink === link.name
                    ? "bg-purple-600 text-white rounded"
                    : "text-gray-900 hover:bg-purple-100 hover:text-purple-600"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <RiUserLine className="hidden lg:block text-2xl cursor-pointer text-gray-900 hover:text-purple-600 transition-all duration-300 hover:scale-110" />

        <div className="flex w-full lg:hidden justify-between items-center">
          <div>
            {menuOpen ? (
              <RiCloseLine
                className="text-3xl cursor-pointer transition-all duration-500 text-red-500 hover:text-red-600 hover:scale-125 hover:rotate-180"
                onClick={() => setMenuOpen(false)}
              />
            ) : (
              <RiMenuLine
                className="text-3xl cursor-pointer transition-all duration-500 text-gray-900 hover:text-purple-600 hover:scale-125 hover:rotate-90 hover:shadow-lg"
                onClick={() => setMenuOpen(true)}
              />
            )}
          </div>

          <Logo />

          <RiSearchLine className="text-2xl cursor-pointer text-gray-900 hover:text-purple-600 transition-all duration-300 hover:scale-110 hover:rotate-12" />
        </div>
      </nav>

      <div
        className={`fixed top-0 left-0 w-full h-full bg-gradient-to-br from-gray-50 via-purple-50 to-cyan-50 z-[999] transform transition-all duration-700 ease-in-out ${
          menuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b border-purple-200 backdrop-blur-sm bg-white/70">
          <Logo />
          <RiCloseLine
            className="text-3xl cursor-pointer transition-all duration-500 text-red-500 hover:text-red-600 hover:scale-125 hover:rotate-180"
            onClick={() => setMenuOpen(false)}
          />
        </div>

        <div className="h-[80%] overflow-y-auto px-6 py-8">
          <ul className="flex flex-col space-y-4">
            {navLinks.map((link, index) => (
              <li
                key={link.name}
                className={`transform transition-all duration-700 ${
                  menuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <a
                  href={link.href}
                  onClick={() => handleLinkClick(link.name)}
                  onMouseEnter={() => {
                    setHoveredIndex(index);
                    setActiveLink(link.name);
                  }}
                  onMouseLeave={() => setHoveredIndex(-1)}
                  className={`block text-xl font-semibold px-6 py-4 rounded-2xl transition-all duration-500 transform relative overflow-hidden ${
                    activeLink === link.name
                      ? "bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-2xl scale-105"
                      : hoveredIndex === index
                      ? "bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-xl scale-105 translate-x-4"
                      : "text-gray-900 hover:scale-102"
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/30 backdrop-blur-sm rounded-full border border-purple-200">
              <span className="text-sm text-gray-600">Hover to navigate</span>
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      <ScrollIndicator
        navbarHeight={64}
        colorGradient="linear-gradient(90deg, rgba(105, 24, 255, 1), #00fae9ff)"
      />
    </header>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <img
        className="w-[40px] h-[40px] transition-transform duration-300 hover:scale-110"
        src={logoImg}
        alt="Logo"
      />
      <div className="w-[2px] h-7 bg-purple-400"></div>
      <h1 className="font-bold text-lg text-gray-900">AvanicSoft</h1>
    </div>
  );
}
