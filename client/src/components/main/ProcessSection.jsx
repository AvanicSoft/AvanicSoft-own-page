import React, { useEffect, useRef, useState } from "react";
import IdeaImg from "../../assets/main/idea.png";
import DsignImg from "../../assets/main/design.png";
import DevImg from "../../assets/main/Dev.png";
import DesignImg from "../../assets/main/design.png";
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
    image: TestImg,
    alt: "Test",
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
      { threshold: 0.5 }
    );
    slideRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col md:flex-row md:px-10 px-5 w-full min-h-screen bg-black/90 text-white relative">
      {/* Sidebar for Desktop */}
      <div className="sticky top-0 z-50 md:w-1/3 md:h-screen flex bg-transparent flex-col items-center justify-start">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-white pt-5 mb-6 leading-tight">
          <span className="text-purple-300">Development </span>
          Process
        </h1>

        <ul className="hidden md:flex flex-col space-y-5 w-full md:max-w-xs overflow-y-auto">
  {steps.map((step, index) => (
    <li
      key={index}
      className={`cursor-pointer px-4 py-4 rounded-lg text-lg lg:text-xl transition-all duration-300
        ${
          currentStep === index
            ? "bg-purple-300 text-black border-purple-500"
            : "text-white hover:bg-white/10 backdrop-blur"
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

      {/* Content */}
      <div className="flex-1 px-4 sm:px-6 md:px-10 py-10 md:py-16 space-y-12">
        {steps.map((step, index) => (
          <div
            key={index}
            ref={(el) => (slideRefs.current[index] = el)}
            className="min-h-[50vh] w-full flex flex-col md:flex-row bg-white/0
                       items-center justify-center px-6 sm:px-8 md:px-12 gap-6 md:gap-12
                       rounded-2xl border-[.5px] border-white transition-all duration-500
                       hover:shadow-purple-500/10"
          >
            <div className="flex justify-center w-full md:w-4/3 mb-4 md:mb-0">
              <img src={step.image} alt={step.alt} />
            </div>

            <div className="text-center md:text-left max-w-xl space-y-4 md:space-y-5">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-purple-300 leading-snug tracking-tight">
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
}
