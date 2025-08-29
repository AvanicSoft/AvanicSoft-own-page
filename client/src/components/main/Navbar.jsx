import { useState } from "react";
import { Menu, X } from "lucide-react"; // Burger and Close icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="sticky md:flex hidden top-0 z-50 bg-black justify-between items-center px-20 py-4">
        {/* Logo */}
        <h1 className="text-white text-2xl font-bold">avionics.</h1>

        {/* Nav Links */}
        <ul className="flex gap-6 list-none">
          <li>
            <a
              href="#"
              className="text-white px-4 py-2 rounded-md transition duration-300 hover:bg-red-600"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white px-4 py-2 rounded-md transition duration-300 hover:bg-red-600"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white px-4 py-2 rounded-md transition duration-300 hover:bg-red-600"
            >
              Contact Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white px-4 py-2 rounded-md transition duration-300 hover:bg-red-600"
            >
              About
            </a>
          </li>
        </ul>

/* Hello */
        {/* Button */}
        <button className="bg-white text-black px-5 py-2 rounded-md transition duration-300 hover:bg-red-600 hover:text-white">
          Get in Touch
        </button>
      </nav>

      {/* Mobile Navbar */}
      <nav className="md:hidden flex items-center justify-between px-4 py-4 bg-black sticky top-0 z-50">
        {/* Burger */}
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Logo */}
        <h1 className="text-white text-xl font-bold">avionics.</h1>

        {/* Button */}
        <button className="bg-white text-black px-4 py-2 rounded-md transition duration-300 hover:bg-red-600 hover:text-white">
          Get in Touch
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-6 bg-red-800 text-white py-6">
          <a href="#" className="px-4 py-2 rounded-md transition duration-300 hover:bg-red-600">
            Home
          </a>
          <a href="#" className="px-4 py-2 rounded-md transition duration-300 hover:bg-red-600">
            Services
          </a>
          <a href="#" className="px-4 py-2 rounded-md transition duration-300 hover:bg-red-600">
            Contact Us
          </a>
          <a href="#" className="px-4 py-2 rounded-md transition duration-300 hover:bg-red-600">
            About
          </a>
        </div>
      )}
    </>
  );
}
