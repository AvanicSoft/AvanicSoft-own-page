import React, { useEffect, useRef, useState } from "react";
import IdeaImg from "../../assets/main/idea.png";
import DsignImg from "../../assets/main/design.png";
import DevImg from "../../assets/main/Dev.png";
import TestImg from "../../assets/main/test.png";
import LounchImg from "../../assets/main/lounch.png";
import SupportImg from "../../assets/main/suport.png";

const slidesData = [
  {
    title: "Ideate",
    description:
      "We analyze your vision thoroughly to ensure the roadmap is perfectly aligned with your end goals, setting the stage for product success.",
    image: IdeaImg,
    alt: "Ideate",
  },
  {
    title: "Design",
    description:
      "Crafting a minimal viable product (MVP) that balances design with core functionality, maximizing value and user satisfaction.",
    image: DsignImg,
    alt: "Design",
  },
  {
    title: "Develop",
    description:
      "Developing end-to-end solutions with a focus on feasibility assessment, architecture design, and agile process to ensure rapid, high-quality delivery.",
    image: DevImg,
    alt: "Develop",
  },
  {
    title: "Test",
    description:
      "Ensuring your product meets the highest standards of quality and reliability through extensive QA and software testing across all user touch points.",
    image: TestImg,
    alt: "Test",
  },
  {
    title: "Launch",
    description:
      "Executing a successful product launch by developing tailored deployment plans, executing a smooth rollout, and offering dedicated post-launch assistance.",
    image: LounchImg,
    alt: "Launch",
  },
  {
    title: "Support",
    description:
      "Providing ongoing support and enhancements to ensure continued product success.",
    image: SupportImg,
    alt: "Support",
  },
];

const App = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slideRefs = useRef([]);

  useEffect(() => {
    // We observe each slide to determine which one is in the center of the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Find the index of the intersecting slide and set it as active
            const index = slideRefs.current.indexOf(entry.target);
            setActiveIndex(index);
          }
        });
      },
      {
        // The threshold is set to 0.5, meaning the callback will fire when
        // 50% of the element is visible in the viewport.
        threshold: 0.5,
      }
    );

    // Observe each slide element
    slideRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-black text-white p-6 md:p-12 font-sans">
      {/* Header is now sticky to stay at the top */}
      <div className="sticky top-0 z-20 flex justify-between items-center mb-10 py-4 bg-black">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Our product <br />
          <span className="text-sky-400">development process</span>
        </h1>
      </div>

      <div className="flex">
        {/* Stepper is also sticky to stay alongside the slides */}
        <div className="hidden md:flex flex-col items-center w-16 h-screen sticky top-1/4 mr-0 ml-10">
          {slidesData.map((_, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div
                className={`w-4 h-4 rounded-full mb-1 transition-transform duration-300 ${
                  activeIndex === idx ? "bg-sky-400 scale-125" : "bg-gray-700"
                }`}
              ></div>
              {idx < slidesData.length - 1 && (
                <div
                  className={`w-1 h-12 transition-colors duration-300 ${
                    activeIndex > idx ? "bg-sky-400" : "bg-gray-700"
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>

        {/* This div creates the full-page scrollable height and holds the slides */}
        <div
          style={{ height: `${slidesData.length * 100}vh` }}
          className="flex-1"
        >
          {slidesData.map((slide, index) => (
            <div
              key={index}
              ref={(el) => (slideRefs.current[index] = el)}
              className="h-screen w-full flex flex-col md:flex-row items-center justify-center px-12 md:px-20 gap-12"
            >
              {/* Text Section */}
              <div className="text-left md:w-1/2 space-y-6">
                <h2 className="text-3xl font-extrabold mb-4 text-sky-500">
                  {slide.title}
                </h2>
                <p className="text-gray-300 text-lg md:text-xl leading-tight">
                  {slide.description}
                </p>
              </div>

              {/* Image Section */}
              <div className="md:w-1/2 flex justify-center">
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="rounded-2xl shadow-2xl max-h-[400px] object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
