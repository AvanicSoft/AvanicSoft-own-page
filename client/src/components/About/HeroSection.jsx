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
            Powering the world's most efficient fleets
          </h2>
          <p className="text-lg leading-relaxed">
            Starting with simple GPS tracking, we later evolved our offering to
            include driver analytics, fuel efficiency, and field service
            management. Fast forward to today, and Transpoco is now a leading
            fleet management and telematics provider in the UK and across
            Europe.
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
            Driven by a dream
          </h2>
          <p className="text-lg leading-relaxed">
            Imagine a world where transport is free of pollution, traffic, and
            accidents. This is the light that guides us, the dream that drives
            us - from the technology that keeps your business moving forward, to
            the expert advice that accelerates your growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
