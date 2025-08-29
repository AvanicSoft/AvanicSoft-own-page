export default function Navbar() {
  return (
    <nav className=" sticky top-0 z-100 bg-black flex justify-between items-center px-10 py-4">
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

      {/* Button */}
      <button className="bg-white text-black px-5 py-2 rounded-md transition duration-300 hover:bg-red-600 hover:text-white">
        Get in Touch
      </button>
    </nav>
  );
}
