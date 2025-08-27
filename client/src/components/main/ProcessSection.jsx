import React, { useEffect, useRef, useState } from "react";
import IdeaImg from "../../assets/main/idea.png"
import DesignImg from "../../assets/main/Design.png"
import DevImg from "../../assets/main/Dev.png"
import TestImg from "../../assets/main/test.png"
import LounchImg from "../../assets/main/lounch.png"
import SupoortImg from "../../assets/main/suport.png"

export default function ServicesScrollPage() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSticky, setIsSticky] = useState(true);

  useEffect(() => {
    const sections = containerRef.current.querySelectorAll(".service-section");

    // Observe sections for fade effect
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveIndex(parseInt(entry.target.dataset.index));
          }
        });
      },
      { threshold: 0.6 }
    );
    sections.forEach((section) => observer.observe(section));

    // Observe bottom sentinel to disable sticky header
    const bottomSentinel =
      containerRef.current.querySelector("#bottom-sentinel");
    const bottomObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsSticky(false); // reached bottom → disable sticky
          } else {
            setIsSticky(true); // scrolling back up → enable sticky
          }
        });
      },
      { threshold: 0.1 }
    );
    if (bottomSentinel) bottomObserver.observe(bottomSentinel);

    return () => {
      observer.disconnect();
      bottomObserver.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative bg-black rounded-xl md:px-20">
      {/* Header (sticky only until bottom) */}
      <div
        className={`${
          isSticky ? "sticky top-20" : "relative"
        } py-10 bg-black shadow z-10 p-6 text-left text-white text-5xl md:text-7xl font-bold rounded-xl`}
      >
        Our product <br />
        <span className="text-sky-500">development process</span>
      </div>

      {/* Section 1 */}
      <div
        className={`service-section h-screen flex items-center justify-center transition-opacity duration-700 ${
          activeIndex === 0 ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        data-index="0"
      >
         <div className="h-auto w-2 bg-sky-500"></div>
        <div className="flex md:flex-row flex-col gap-6 w-3/4 items-center md:justify-between">
          <div className="text-left">
            <h2 className="text-4xl md:text-6xl font-bold  mb-4 text-sky-500">Ideate</h2>
            <p className="text-gray-300 md:text-2xl leading-relaxed max-w-full break-words md:w-100">
              We analyze your vision thoroughly to ensure the roadmap is
              perfectly aligned with your end goals, setting the stage for
              product success.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={IdeaImg}
              alt="Web Development"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div
        className={`service-section h-screen flex items-center justify-center transition-opacity duration-700 ${
          activeIndex === 1 ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        data-index="1"
      >
        <div className="flex md:flex-row flex-col gap-6 w-3/4 items-center md:justify-between">
          <div className="text-left">
            <h2 className="text-4xl md:text-6xl font-bold  mb-4 text-sky-500">Design</h2>
            <p className="text-gray-300 md:text-2xl leading-relaxed max-w-full break-words md:w-100">
              Crafting a minimal viable product (MVP) that balances design with
              core functionality, maximizing value and user satisfaction.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={DesignImg}
              alt="Mobile Development"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div
        className={`service-section h-screen flex items-center justify-center transition-opacity duration-700 ${
          activeIndex === 2 ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        data-index="2"
      >
        <div className="flex md:flex-row flex-col gap-6 w-3/4 items-center md:justify-between">
          <div className="text-left">
            <h2 className="text-4xl md:text-6xl font-bold  mb-4 text-sky-500">Develop</h2>
            <p className="text-gray-300 md:text-2xl leading-relaxed max-w-full break-words md:w-100">
              Developing end-to-end solutions with a focus on feasibility
              assessment, architecture design, and agile process to ensure
              rapid, high-quality delivery.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={DevImg}
              alt="UI/UX Design"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
      {/* Section 3 */}
      <div
        className={`service-section h-screen flex items-center justify-center transition-opacity duration-700 ${
          activeIndex === 2 ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        data-index="2"
      >
        <div className="flex md:flex-row flex-col gap-6 w-3/4 items-center md:justify-between">
          <div className="text-left">
            <h2 className="text-4xl md:text-6xl font-bold  mb-4 text-sky-500">Test</h2>
            <p className="text-gray-300 md:text-2xl leading-relaxed max-w-full break-words md:w-100">
              Ensuring your product meets the highest standards of quality and
              reliability through extensive QA and software testing across all
              user touch points.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={TestImg}
              alt="UI/UX Design"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
      {/* Section 3 */}
      <div
        className={`service-section h-screen flex items-center justify-center transition-opacity duration-700 ${
          activeIndex === 2 ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        data-index="2"
      >
        <div className="flex md:flex-row flex-col gap-6 w-3/4 items-center md:justify-between">
           
          <div className="text-left">
            <h2 className="text-4xl md:text-6xl font-bold  mb-4 text-sky-500">Launch</h2>
            <p className="text-gray-300 md:text-2xl leading-relaxed max-w-full break-words md:w-100">
              Executing a successful product launch by developing tailored
              deployment plans, executing a smooth rollout, and offering
              dedicated post-launch assistance.{" "}
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={LounchImg}
              alt="UI/UX Design"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
      {/* Section 3 */}
      <div
        className={`service-section h-screen flex items-center justify-center transition-opacity duration-700 ${
          activeIndex === 2 ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        data-index="2"
      >
        <div className="flex md:flex-row flex-col gap-6 w-3/4 items-center md:justify-between">
          <div className="text-left">
            <h2 className="text-4xl md:text-6xl font-bold  mb-4 text-sky-500">Support</h2>
            <p className="text-gray-300 md:text-2xl leading-relaxed max-w-full break-words md:w-100">
              Providing ongoing support and enhancements to ensure continued
              product success.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={SupoortImg}
              alt="UI/UX Design"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Sentinel (marks the bottom) */}
      <div id="bottom-sentinel" className="h-40"></div>
    </div>
  );
}
