import React from "react";
import "./scroll.css";
import {
  FaMobileAlt,
  FaCode,
  FaRobot,
  FaLaptopCode,
  FaBullhorn,
  FaVideo,
} from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

export default function Services() {
  return (
    <div className="mainCont bg-gray-100 flex items-center justify-center p-20">
    <div className="bg-white rounded-2xl relative w-full max-w-7xl">
        <img 
          src="https://www.transpoco.com/hs-fs/hubfs/raw_assets/public/blend-framework/images/light-trail-5.png?width=1536&height=722&name=light-trail-5.png" 
          alt="" 
          className="rounded-3xl"
        />
      <div className="absolute top-0 right-105 inline-block">
        <div className="absolute top-0 right-0 scroll-container1">
          <div className="scroll-content1">
            <div className="w-80 h-85 bg-slate-100 text-center flex flex-col items-center justify-center rounded-lg shadow mb-3 cursor-pointer">
                <FaLaptopCode className="text-purple-600 text-6xl" />
                <p className="text-2xl p-3">Web Development</p>
                <p className="p-3 mb-1">Build responsive, high-performing websites and web applications. Focus on modern frameworks, clean design, and seamless user experience.</p>
            </div>
            <div className="w-80 h-85 bg-slate-100 text-center flex flex-col gap-2 items-center justify-center rounded-lg shadow mb-3 cursor-pointer">
                <FaMobileAlt className="text-purple-600 text-6xl" />
                <p className="text-2xl p-3">Application Development Services</p>
                <p className="p-3 mb-1">Cross-platform solutions for web, desktop, and mobile. Agile workflows, cloud tech, and cutting-edge UI/UX.</p>
            </div>
            <div className="w-80 h-85 bg-slate-100 text-center flex flex-col gap-2 items-center justify-center rounded-lg shadow mb-3 cursor-pointer">
                <FaVideo className="text-purple-600 text-6xl" />
                <p className="text-2xl p-3">Video Editing/Graphic designing</p>
                <p className="p-3 mb-1">Create engaging videos with professional editing, smooth transitions, and high-quality visuals that capture attention and tell your story.</p>
            </div>
            <div className="w-80 h-85 bg-slate-100 text-center flex flex-col items-center justify-center rounded-lg shadow mb-3 cursor-pointer">
                <FaLaptopCode className="text-purple-600 text-6xl" />
                <p className="text-2xl p-3">Web Development</p>
                <p className="p-3 mb-1">Build responsive, high-performing websites and web applications. Focus on modern frameworks, clean design, and seamless user experience.</p>
            </div>
            <div className="w-80 h-85 bg-slate-100 text-center flex flex-col gap-2 items-center justify-center rounded-lg shadow mb-3 cursor-pointer">
                <FaMobileAlt className="text-purple-600 text-6xl" />
                <p className="text-2xl p-3">Application Development Services</p>
                <p className="p-3 mb-1">Cross-platform solutions for web, desktop, and mobile. Agile workflows, cloud tech, and cutting-edge UI/UX.</p>
            </div>
            <div className="w-80 h-85 bg-slate-100 text-center flex flex-col gap-2 items-center justify-center rounded-lg shadow mb-3 cursor-pointer">
                <FaVideo className="text-purple-600 text-6xl" />
                <p className="text-2xl p-3">Video Editing/Graphic designing</p>
                <p className="p-3 mb-1">Create engaging videos with professional editing, smooth transitions, and high-quality visuals that capture attention and tell your story.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-15 inline-block">
        <div className="absolute top-0 right-0 scroll-container2">
          <div className="scroll-content2">
            <div className="w-80 h-85 bg-slate-100 text-center flex flex-col items-center justify-center rounded-lg shadow mb-3 cursor-pointer">
                <FaCode className="text-purple-600 text-6xl" />
                <p className="text-2xl p-3">Custom Software Development</p>
                <p className="p-3 mb-1">Tailored B2B, B2C, or SaaS solutions. Scalable, secure, and seamlessly integrated with existing systems.</p>
            </div>
            <div className="w-80 h-85 bg-slate-100 text-center flex flex-col gap-2 items-center justify-center rounded-lg shadow mb-3 cursor-pointer">
                <FaBullhorn className="text-purple-600 text-6xl" />
                <p className="text-2xl p-3">Social Media Marketing</p>
                <p className="p-3 mb-1">Boost your brand presence across platforms with targeted campaigns, engaging content, and data-driven strategies to reach the right audience.</p>
            </div>
            <div className="w-80 h-85 bg-slate-100 text-center flex flex-col gap-2 items-center justify-center rounded-lg shadow mb-3 cursor-pointer">
                <FaRobot className="text-purple-600 text-6xl" />
                <p className="text-2xl p-3">AI / ML Services</p>
                <p className="p-3 mb-1">AI solutions using ChatGPT, Bard, and OpenAI. Automate processes, gain insights, and enhance decision-making.</p>
            </div>
            <div className="w-80 h-85 bg-slate-100 text-center flex flex-col items-center justify-center rounded-lg shadow mb-3 cursor-pointer">
                <FaCode className="text-purple-600 text-6xl" />
                <p className="text-2xl p-3">Custom Software Development</p>
                <p className="p-3 mb-1">Tailored B2B, B2C, or SaaS solutions. Scalable, secure, and seamlessly integrated with existing systems.</p>
            </div>
            <div className="w-80 h-85 bg-slate-100 text-center flex flex-col gap-2 items-center justify-center rounded-lg shadow mb-3 cursor-pointer">
                <FaBullhorn className="text-purple-600 text-6xl" />
                <p className="text-2xl p-3">Social Media Marketing</p>
                <p className="p-3 mb-1">Boost your brand presence across platforms with targeted campaigns, engaging content, and data-driven strategies to reach the right audience.</p>
            </div>
            <div className="w-80 h-85 bg-slate-100 text-center flex flex-col gap-2 items-center justify-center rounded-lg shadow mb-3 cursor-pointer">
                <FaRobot className="text-purple-600 text-6xl" />
                <p className="text-2xl p-3">AI / ML Services</p>
                <p className="p-3 mb-1">AI solutions using ChatGPT, Bard, and OpenAI. Automate processes, gain insights, and enhance decision-making.</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" absolute top-16 left-20 hidden xl:block">
        <p className="text-2xl mb-5">GUIDING PRINCIPLES</p>
        <p className="text-4xl">The Values we live by</p>
      </div>
    </div>
  </div>
  );
}
