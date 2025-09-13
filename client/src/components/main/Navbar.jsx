import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { RiMenuLine, RiCloseLine, RiUserLine } from "react-icons/ri";
import { Code } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "../../assets/Avanicp.png";
import ScrollIndicator from "../../components/main/ScrollIndicator";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Work", path: "/work" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const pageContent = {
    Home: {
      title: "Building Software",
      desc: "We create scalable digital solutions that drive growth and impact.",
    },
    About: {
      title: "About AvanicSoft",
      desc: "A team of developers and designers delivering modern software solutions.",
    },
    Services: {
      title: "Our Services",
      desc: "We build web apps, cloud systems, and tailored solutions for your business.",
    },
    Work: {
      title: "Featured Projects",
      desc: "Explore our portfolio of impactful and innovative software solutions.",
    },
    Contact: {
      title: "Get in Touch",
      desc: "Connect with us to discuss your project and turn ideas into reality.",
    },
  };

  const activePage = navLinks.find(
    (link) => link.path === location.pathname
  )?.name;

  const { subtitle, title, desc } = pageContent[activePage];

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/video.mp4"
        autoPlay
        muted
        loop
      />
      <div className="absolute inset-0 "></div>

      <header className="absolute top-2 left-0 w-full bg-transparent md:px-10 px-5 z-1000">
        <nav className="container mx-auto flex items-center justify-between h-14 px-6">
          <Link
            to="/"
            className="text-white hover:text-purple-400 transition-colors"
          >
            <div className="flex items-center gap-2">
              <img className="w-[40px] h-[40px]" src={logoImg} alt="Logo" />
              <div className="w-[2px] h-7 bg-purple-400"></div>
              <h1 className="font-bold text-xl">AvanicSoft</h1>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex bg-white cursor-pointer backdrop-blur py-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`font-semibold py-[9px] px-4 transition-colors duration-400 ${
                    activePage === link.name
                      ? "bg-purple-300 text-black border-t-4 border-purple-500"
                      : "text-black hover:bg-purple-200 transition-colors duration-700"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <Link to="login">
            <RiUserLine className="text-2xl cursor-pointer text-white hover:text-purple-600 transition duration-300" />
          </Link>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            {menuOpen ? (
              <RiCloseLine
                className="text-2xl cursor-pointer text-white hover:text-purple-600 transition duration-300"
                onClick={() => setMenuOpen(false)}
              />
            ) : (
              <RiMenuLine
                className="text-2xl cursor-pointer text-white hover:text-purple-600 transition duration-300"
                onClick={() => setMenuOpen(true)}
              />
            )}
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="top-14 h-screen bg-black/10  backdrop-blur-sm  w-full  md:hidden"
            >
              <ul className="flex flex-col items-left py-6 px-5 space-y-4">
                {navLinks.map((link) => (
                  <motion.li
                    key={link.name}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setMenuOpen(false)}
                      className={`block font-semibold py-2 w-full px-4 transition-all duration-300 ${
                        activePage === link.name
                          ? "bg-purple-200 text-black w-full shadow-md border-l-10 border-purple-900"
                          : "text-gray-200 hover:bg-purple-100 hover:text-purple-600"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center  ">
          <AnimatePresence mode="wait">
            <motion.h1
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-8xl lg:text-8xl font-bold text-white mb-4 leading-tight"
            >
              {title}
            </motion.h1>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={desc}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg md:text-xl text-gray-200"
            >
              {desc}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
      <ScrollIndicator />
    </section>
  );
}
