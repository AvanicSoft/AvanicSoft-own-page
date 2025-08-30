import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import AvanicLogo from "../../assets/tg.png";
import ScrollIndicator from "./ScrollIndicator";

export default function ModernNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", to: "/" },
    { name: "Services", to: "/services" },
    { name: "Portfolio", to: "/portfolio" },
    { name: "About", to: "/about" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-1000 transition-all duration-300 ${
          isScrolled
            ? "bg-slate-900/70 backdrop-blur-lg border-b border-white/30 shadow-xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3 cursor-pointer group">
              <div className="relative">
                <img className="w-15 h-15" src={AvanicLogo} alt="Avanic Logo" />
                <span className="absolute inset-0 rounded-xl blur-xl opacity-20 "></span>
              </div>

              <div className="text-4xl font-bold Roboto text-white">
                AvaicSoft
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-5">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  className="relative text-xl"
                >
                  {({ isActive }) => (
                    <div className="group relative px-4 py-2 flex items-center">
                      <span
                        className={`transition-colors duration-300 ${
                          isActive
                            ? "text-white"
                            : "text-gray-300 group-hover:text-white"
                        }`}
                      >
                        {item.name}
                      </span>
                      <span
                        className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400
          transition-transform duration-300 origin-left
          ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                      ></span>
                    </div>
                  )}
                </NavLink>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="relative group px-6 py-3 overflow-hidden rounded-2xl  text-black bg-white font-semibold shadow-md hover:scale-102 transition-all duration-300">
                <span className="relative z-10">Get in Touch</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors duration-200"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-white" />
                ) : (
                  <Menu className="w-6 h-6 text-white" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
              isMenuOpen
                ? "max-h-120 opacity-100 visible"
                : "max-h-0 opacity-0 invisible"
            }`}
          >
            <div className="bg-slate-900/95 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-2xl space-y-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-xl transition-all duration-200 transform ${
                      isActive
                        ? "text-white bg-white/10"
                        : "text-gray-300 hover:text-white hover:bg-white/10"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
              <button className="w-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 text-white font-semibold py-3 px-4 rounded-xl hover:from-purple-600 hover:via-blue-600 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105">
                Get in touch 
              </button>
            </div>
          </div>
        </div>
      </nav>
      <ScrollIndicator navbarHeight={80} />
    </>
  );
}
