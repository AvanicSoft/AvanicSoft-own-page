import React from "react";
import ThreeWomenImage from "../../assets/about/three-women-in-a-meeting.png";
import OneManImage from "../../assets/about/one-men-image.png";

const HeroSection = () => {
  return (
    <div>
      {/* Section 1 */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-16 px-6 md:px-10 py-20 md:h-[70vh]">
        <div className="w-full md:max-w-xl">
          <img
            src={ThreeWomenImage}
            alt="Three women in a meeting"
            className="w-full max-w-lg rounded-xl"
          />
        </div>
        <div className="text-left max-w-md">
          <h2 className="text-2xl md:text-5xl font-light leading-tight mb-5">
            Building Future-Ready Software Solutions
          </h2>
          <p className="text-lg leading-relaxed">
            we transform ideas into powerful digital 
            products. From web apps and mobile solutions to custom enterprise 
            software, we empower businesses to grow, scale, and innovate with 
            technology that truly makes an impact.
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-20 px-4 md:px-10 py-20 md:h-[70vh] bg-gray-50">
        <div className="w-full md:max-w-xl">
          <img
            src={OneManImage}
            alt="One man image"
            className="w-full max-w-lg rounded-xl"
          />
        </div>
        <div className="text-left max-w-md">
          <h2 className="text-4xl md:text-5xl font-light leading-tight mb-5">
            Our Mission
          </h2>
          <p className="text-lg leading-relaxed">
            We believe technology should be simple, scalable, and sustainable. 
            Our mission is to deliver high-quality, tailored software solutions 
            that help startups, enterprises, and organizations achieve their 
            goals faster and smarter. With a dedicated team, we aim to be more 
            than a service provider — we are your technology partner.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
