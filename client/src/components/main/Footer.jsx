import React, { useState,} from "react";
import { FaTiktok, FaFacebookF, FaInstagram } from "react-icons/fa";
const apiUrl = import.meta.env.VITE_API_URL;
import axios from "axios";
import { NavLink } from "react-router-dom";

const TwitterIcon = () => <FaTiktok />;
const InstagramIcon = () => <FaInstagram />;
const FacebookIcon = () => <FaFacebookF />;


const ArrowIcon = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`h-5 w-5 text-white group-hover:translate-x-1 transition-transform ${className}`}
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);


const RingLoader = ({ className = "" }) => (
  <div
    className={`w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin ${className}`}
  ></div>
);

export default function Footer() {
  const [whatsapp, setWhatsapp] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  // const [showScrollButton, setShowScrollButton] = useState(false);

  const handlewhatsapp = async (e) => {
    e.preventDefault();
    if (!whatsapp) return;
    setLoading(true);
    setSent(false);
    try {
      const response = await axios.post(`${apiUrl}/contact/whatsapp`,
        { whatsapp }
      );
      if (response.status === 200) {
        setSent(true);
        setWhatsapp("");
      }
    } catch (err) {
      console.error("Footer lead failed:", err?.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  // const scrollToTop = () => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };

  // useEffect(() => {
  //   const toggleButton = () => {
  //     setShowScrollButton(window.scrollY > 300);
  //   };
  //   window.addEventListener("scroll", toggleButton);
  //   return () => window.removeEventListener("scroll", toggleButton);
  // }, []);

  return (
    <>
      <footer className="bg-gray-900 h-screen text-white font-sans">
        <div className="container mx-auto px-6 py-10 lg:py-10">
          {/* Top Section */}
          <div className="mb-10">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight mb-6 text-white">
              Ready to make
              <br />
              things happen?
            </h2>
            <NavLink to="/contact">
              <button className="bg-purple-600 cursor-pointer text-white px-8 py-4 rounded-md font-semibold hover:bg-purple-700 transition-colors pointer">
                Let's chat!
              </button>
            </NavLink>
          </div>

          {/* Middle Section */}
          <div className="flex flex-col md:flex-row gap-10 mb-5">
            <div className="md:basis-3/12">
              <a href="">
                <p className="mb-4 text-sm cursor-pointer text-gray-300 hover:text-white transition-colors">
                  ‪+92 3270013606‬
                </p>
              </a>
              <div className="flex space-x-4">
                <a
                  href=""
                  aria-label="Twitter"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  <TwitterIcon />
                </a>
                <a
                  href=""
                  aria-label="Instagram"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  <InstagramIcon />
                </a>
                <a
                  href=""
                  aria-label="Facebook"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  <FacebookIcon />
                </a>
              </div>
            </div>

            <div className="md:basis-6/12">
              <h3 className="font-bold mb-2 text-white">
                Your vision, our code.
              </h3>
              <p className="text-gray-300 mb-6">
                Create tech that makes an impact. We provide the tools to build,
                scale, and succeed—fast.
              </p>
              <form onSubmit={handlewhatsapp}>
                <div className="relative group flex gap-2">
                  <input
                    type="tel"
                    placeholder="Enter WhatsApp number*"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    required
                    className="w-full bg-gray-800 text-white placeholder-gray-400 py-4  pl-4 pr-12  rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 border border-gray-700"
                  />
                  <button
                    type="submit"
                    className="cursor-pointer bg-gray-800 text-white placeholder-gray-400 py-4  px-4 rounded-md "
                    aria-label="Submit email"
                  >
                    <ArrowIcon className={`${!loading ? "block" : "hidden"}`} />
                    <RingLoader className={`${loading ? "block" : "hidden"}`} />
                  </button>
                </div>
                {sent && (
                  <p className="mt-2 text-green-400 text-sm">
                    Submitted! We'll reach out soon.
                  </p>
                )}
              </form>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p className="mb-4 md:mb-0">&copy; AvanicSoft 2025</p>
            <ul className="flex space-x-6 mb-4 md:mb-0">
              <li>
                <a
                  href="#"
                  className="hover:underline hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline hover:text-white transition-colors"
                >
                  Terms of Use
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline hover:text-white transition-colors"
                >
                  Cookies Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      {/* Global Back to Top Button */}
      {/* {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 right-6 w-12 h-12 rounded-full bg-purple-600 text-white text-xl font-bold flex items-center justify-center shadow-lg hover:bg-purple-700 hover:scale-110 hover:shadow-purple-500/40 transition-all duration-300 z-[1000]"
          aria-label="Back to top"
        >
          ↑
        </button>
      )} */}
    </>
  );
}
