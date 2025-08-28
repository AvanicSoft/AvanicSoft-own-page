import React, { useEffect, useRef, useState } from "react";
import IdeaImg from "../../assets/main/idea.png";
import DesignImg from "../../assets/main/Design.png";
import DevImg from "../../assets/main/Dev.png";
import TestImg from "../../assets/main/test.png";
import LounchImg from "../../assets/main/lounch.png";
import SupoortImg from "../../assets/main/suport.png";

export default function ServicesScrollPage() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSticky, setIsSticky] = useState(true);
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (!isSticky || isBottom) return;
      const container = containerRef.current;
      if (!container) return;

      const scrollY = window.scrollY - container.offsetTop - 80;
      const index = Math.floor(scrollY / window.innerHeight + 0.5);
      setActiveIndex(Math.max(0, Math.min(index, 5)));
    };

    window.addEventListener("scroll", onScroll);

    const topSentinel = document.getElementById("top-sentinel");
    const topObserver = new IntersectionObserver(
      ([entry]) => setIsSticky(!entry.isIntersecting),
      { threshold: 0 }
    );
    if (topSentinel) topObserver.observe(topSentinel);

    const bottomSentinel = document.getElementById("bottom-sentinel");
    const bottomObserver = new IntersectionObserver(
      ([entry]) => setIsBottom(entry.isIntersecting),
      { threshold: 0 }
    );
    if (bottomSentinel) bottomObserver.observe(bottomSentinel);

    return () => {
      window.removeEventListener("scroll", onScroll);
      topObserver.disconnect();
      bottomObserver.disconnect();
    };
  }, [isSticky, isBottom]);

  return (
    <div ref={containerRef} className="relative bg-black md:px-20">
      <div id="top-sentinel" className="h-1"></div>

      <div className={`sticky top-5 z-20 px-6 text-left text-white shadow-lg
        transition-all duration-500 ease-in-out
        ${isSticky && !isBottom ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}>
        <h1 className="text-4xl md:text-4xl font-extrabold tracking-tight">
          Our product <br />
          <span className="text-sky-400">development process</span>
        </h1>
      </div>

      {/* Stepper */}
      <div className="hidden md:flex flex-col items-center w-16 sticky top-40 z-30">
        {[0,1,2,3,4,5].map((idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div
              className={`w-4 h-4 rounded-full mb-1 transition-transform duration-300 ${
                activeIndex === idx ? "bg-sky-400 scale-125" : "bg-gray-700"
              }`}
            ></div>
            {idx < 5 && (
              <div
                className={`w-1 h-12 transition-colors duration-300 ${
                  activeIndex > idx ? "bg-sky-400" : "bg-gray-700"
                }`}
              ></div>
            )}
          </div>
        ))}
      </div>

      {/* Slides */}
      <div className="relative h-[600vh]">
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">

          {/* Slide 1 */}
          <div className={`absolute w-full h-full flex flex-col md:flex-row items-center justify-center px-20 gap-12 transition-all duration-700
            ${activeIndex === 0 ? "opacity-100 translate-y-0" : activeIndex < 0 ? "translate-y-full opacity-0" : "-translate-y-full opacity-0"}`}>
            <div className="text-left md:w-1/2 space-y-6">
              <h2 className="text-3xl font-extrabold mb-4 text-sky-500">Ideate</h2>
              <p className="text-gray-300 text-lg md:text-xl leading-tight">
                We analyze your vision thoroughly to ensure the roadmap is perfectly aligned with your end goals, setting the stage for product success.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img src={IdeaImg} alt="Ideate" className="rounded-2xl shadow-2xl max-h-[400px] object-contain" />
            </div>
          </div>

          {/* Slide 2 */}
          <div className={`absolute w-full h-full flex flex-col md:flex-row items-center justify-center px-20 gap-12 transition-all duration-700
            ${activeIndex === 1 ? "opacity-100 translate-y-0" : activeIndex < 1 ? "translate-y-full opacity-0" : "-translate-y-full opacity-0"}`}>
            <div className="text-left md:w-1/2 space-y-6">
              <h2 className="text-3xl font-extrabold mb-4 text-sky-500">Design</h2>
              <p className="text-gray-300 text-lg md:text-xl leading-tight">Crafting a minimal viable product (MVP) that balances design with core functionality, maximizing value and user satisfaction.</p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img src={DesignImg} alt="Design" className="rounded-2xl shadow-2xl max-h-[400px] object-contain" />
            </div>
          </div>

          {/* Slide 3 */}
          <div className={`absolute w-full h-full flex flex-col md:flex-row items-center justify-center px-20 gap-12 transition-all duration-700
            ${activeIndex === 2 ? "opacity-100 translate-y-0" : activeIndex < 2 ? "translate-y-full opacity-0" : "-translate-y-full opacity-0"}`}>
            <div className="text-left md:w-1/2 space-y-6">
              <h2 className="text-3xl font-extrabold mb-4 text-sky-500">Develop</h2>
              <p className="text-gray-300 text-lg md:text-xl leading-tight">Developing end-to-end solutions with a focus on feasibility assessment, architecture design, and agile process to ensure rapid, high-quality delivery.</p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img src={DevImg} alt="Develop" className="rounded-2xl shadow-2xl max-h-[400px] object-contain" />
            </div>
          </div>

          {/* Slide 4 */}
          <div className={`absolute w-full h-full flex flex-col md:flex-row items-center justify-center px-20 gap-12 transition-all duration-700
            ${activeIndex === 3 ? "opacity-100 translate-y-0" : activeIndex < 3 ? "translate-y-full opacity-0" : "-translate-y-full opacity-0"}`}>
            <div className="text-left md:w-1/2 space-y-6">
              <h2 className="text-3xl font-extrabold mb-4 text-sky-500">Test</h2>
              <p className="text-gray-300 text-lg md:text-xl leading-tight">Ensuring your product meets the highest standards of quality and reliability through extensive QA and software testing across all user touch points.</p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img src={TestImg} alt="Test" className="rounded-2xl shadow-2xl max-h-[400px] object-contain" />
            </div>
          </div>

          {/* Slide 5 */}
          <div className={`absolute w-full h-full flex flex-col md:flex-row items-center justify-center px-20 gap-12 transition-all duration-700
            ${activeIndex === 4 ? "opacity-100 translate-y-0" : activeIndex < 4 ? "translate-y-full opacity-0" : "-translate-y-full opacity-0"}`}>
            <div className="text-left md:w-1/2 space-y-6">
              <h2 className="text-3xl font-extrabold mb-4 text-sky-500">Launch</h2>
              <p className="text-gray-300 text-lg md:text-xl leading-tight">Executing a successful product launch by developing tailored deployment plans, executing a smooth rollout, and offering dedicated post-launch assistance.</p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img src={LounchImg} alt="Launch" className="rounded-2xl shadow-2xl max-h-[400px] object-contain" />
            </div>
          </div>

          {/* Slide 6 */}
          <div className={`absolute w-full h-full flex flex-col md:flex-row items-center justify-center px-20 gap-12 transition-all duration-700
            ${activeIndex === 5 ? "opacity-100 translate-y-0" : activeIndex < 5 ? "translate-y-full opacity-0" : "-translate-y-full opacity-0"}`}>
            <div className="text-left md:w-1/2 space-y-6">
              <h2 className="text-3xl font-extrabold mb-4 text-sky-500">Support</h2>
              <p className="text-gray-300 text-lg md:text-xl leading-tight">Providing ongoing support and enhancements to ensure continued product success.</p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img src={SupoortImg} alt="Support" className="rounded-2xl shadow-2xl max-h-[400px] object-contain" />
            </div>
          </div>

        </div>
      </div>

      <div id="bottom-sentinel" className="h-40"></div>
    </div>
  );
}
