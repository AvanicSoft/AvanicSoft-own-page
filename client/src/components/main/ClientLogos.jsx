import React from "react";

import Asana from "../../assets/main/Asana.png";
import Avns from "../../assets/main/avns.png";
import Disnep from "../../assets/main/disnep.png";
import Nke from "../../assets/main/nke.jpg";
import Chanel from "../../assets/main/Chanel-Logo.png";
import Uber from "../../assets/main/uber.png";
import Udemy from "../../assets/main/udemy.png";

const logos = [
  { src: Asana, alt: "TECHCORP" },
  { src: Avns, alt: "DESIGNSTUDIO" },
  { src: Disnep, alt: "CLOUDTECH" },
  { src: Nke, alt: "INNOVATE" },
  { src: Chanel, alt: "STARTUPX" },
  { src: Uber, alt: "WEBCRAFT" },
  { src: Udemy, alt: "EDTECH" },
];

const ClientLogos = () => {
  const handleLogoClick = (alt) => {
    console.log(`Clicked on: ${alt}`);
  };

  const LogoItem = ({ logo }) => (
    <div
      className="flex-shrink-0 w-32 sm:w-40 h-20 mx-4 flex items-center justify-center cursor-pointer group transition-transform duration-300 hover:scale-105"
      onClick={() => handleLogoClick(logo.alt)}
    >
      <div className="w-24 h-12 flex items-center justify-center">
        <img
          src={logo.src}
          alt={logo.alt}
          className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
        />
      </div>
    </div>
  );

  return (
    <div className="relative w-full bg-white py-6 overflow-hidden">
      <div className="relative z-10 w-full overflow-hidden">
        <div
          className="flex items-center"
          style={{
            animation: "scroll 25s linear infinite",
            width: "max-content",
          }}
        >
          {logos.map((logo, index) => (
            <LogoItem key={`first-${index}`} logo={logo} />
          ))}
          {logos.map((logo, index) => (
            <LogoItem key={`second-${index}`} logo={logo} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default ClientLogos;
