import React, { useEffect, useRef, useState } from "react";
import IdeaImg from "../../assets/main/idea.png";
import DsignImg from "../../assets/main/design.png";
import DevImg from "../../assets/main/Dev.png";

import TestImg from "../../assets/main/test.png";
import LounchImg from "../../assets/main/lounch.png";
import SupoortImg from "../../assets/main/suport.png";

const steps = [
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
      "Our design team crafts intuitive and visually engaging experiences that resonate with your audience while ensuring usability and aesthetics.",
    image: DesignImg,

    alt: "Design",
  },
  {
    title: "Develop",

    description:
      "Using modern frameworks and agile methodologies, we develop scalable and high-performance solutions tailored to your business needs.",

    image: DevImg,
    alt: "Develop",
  },
  {
    title: "Test",

    description:
      "Rigorous testing ensures that every feature works flawlessly across platforms, delivering a bug-free, reliable product.",


    description:
      "We handle deployment and launch smoothly, ensuring your product reaches your audience seamlessly with zero downtime.",
    image: LounchImg,
    alt: "Launch",
  },
  {
    title: "Support",

    description:
      "Post-launch, we provide continuous support and updates to keep your product secure, efficient, and aligned with evolving business needs.",
    image: SupoortImg,


    alt: "Support",
  },
];


export default function ProcessSection() {
  const [currentStep, setCurrentStep] = useState(0);
  const slideRefs = useRef([]);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = slideRefs.current.indexOf(entry.target);
            if (index !== -1) setCurrentStep(index);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );
    slideRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen bg-gradient-to-b from-gray-950 to-black text-white">

      <div className="relative md:w-1/3 sticky top-0 md:h-screen flex  flex-col items-center justify-start bg-gray-950/80 backdrop-blur border-r border-gray-800">

        <h1 className="text-4xl lg:text-5xl font-extrabold md:mb-12 pt-10 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent tracking-tight">
          Our Process

        </h1>


        <ul className="flex flex-col md:flex-col flex-row space-y-4 w-full md:max-w-xs w-full px-4 md:px-6 overflow-y-auto ">
          {steps.map((step, index) => (
            <li
              key={index}
              className={`cursor-pointer px-4 py-3 rounded-lg transition-all duration-300 text-lg lg:text-xl
          ${
            currentStep === index
              ? "text-green-400 font-semibold bg-gray-800 shadow-md shadow-green-500/20"
              : "text-gray-400 hover:text-green-300"
          }`}
              onClick={() =>
                slideRefs.current[index]?.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                })
              }
            >
              {step.title}
            </li>
          ))}
        </ul>
      </div>


      <div className="flex-1 px-4 sm:px-6 md:px-10 py-10 md:py-16 space-y-12">
        {steps.map((step, index) => (
          <div
            key={index}
            ref={(el) => (slideRefs.current[index] = el)}
            className="min-h-[70vh] w-full flex flex-col md:flex-row bg-gradient-to-br from-gray-900/80 to-gray-800/70 
                       items-center justify-center px-6 sm:px-8 md:px-12 gap-6 md:gap-12 rounded-2xl shadow-lg 
                       border border-gray-700 transition-all duration-500 hover:shadow-green-500/10"
          >

            <div className="flex justify-center w-full md:w-1/2 mb-4 md:mb-0">
              <img
                src={step.image}
                alt={step.alt}
                className="rounded-xl w-60 sm:w-64 md:w-full max-w-sm shadow-md border border-gray-700 hover:scale-105 transition-transform duration-300"
              />
            </div>


            <div className="text-center md:text-left max-w-xl space-y-4 md:space-y-5">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-green-400 leading-snug tracking-tight">
                {step.title}
              </h2>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-300">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
