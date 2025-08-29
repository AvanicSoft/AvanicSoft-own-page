import React from "react";
import { AuroraText } from "@/components/magicui/aurora-text";
import { TextReveal } from "@/components/magicui/text-reveal";
import { RetroGrid } from "@/components/magicui/retro-grid";
import { Globe } from "@/components/magicui/globe";
import { ShimmerButton } from "@/components/magicui/shimmer-button";

export default function HeroSection(){
    return(
        <div className="relative w-full bg-black py-4 sm:py-6 md:py-8 lg:py-12 xl:py-16 overflow-hidden min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-12 xl:gap-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
             <RetroGrid className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" />
       
             <div className="order-1 lg:order-2 flex-shrink-0 w-full lg:w-auto flex justify-center lg:justify-end">
               <Globe className="z-100 w-32 sm:w-40 md:w-100 lg:w-52 xl:w-100 2xl:w-64  md:mr-0 md:mt-50" />
             </div>
       
             <div className="relative z-20 order-2 lg:order-1 w-full lg:flex-1 lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl">
               {/* right glow effect aftre text */}
               <div className="absolute -right-16 top-1/2 transform -translate-y-1/2 w-80 h-80 bg-gradient-to-l from-blue-400/40 via-purple-500/25 to-transparent rounded-full blur-2xl pointer-events-none hidden lg:block animate-pulse"></div>
               <div className="absolute -right-12 top-1/2 transform -translate-y-1/2 w-60 h-60 bg-gradient-to-l from-blue-300/30 via-purple-400/20 to-transparent rounded-full blur-xl pointer-events-none hidden lg:block"></div>
               <TextReveal>
                 <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight tracking-tight text-center lg:text-left">
                   We are a <AuroraText className="text-blue-100">Software</AuroraText>{" "}
                   <AuroraText className="text-purple-100">Development</AuroraText>{" "}
                   Company
                 </h1>
                 <p className="mt-4 sm:mt-6 text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-full lg:max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
                   Building scalable, impactful digital solutions for startups and
                   enterprises.
                 </p>
                 <div className="mt-6 sm:mt-8 flex justify-center lg:justify-start">
                   <a href="#contact" className="w-full sm:w-auto">
                     <ShimmerButton className="w-full sm:w-auto">lets build together</ShimmerButton>
                   </a>
                 </div>
               </TextReveal>
             </div>
       
             {/* particles */}
             <div className="absolute top-8 left-8 w-2 h-2 bg-blue-400 rounded-full animate-pulse shadow-lg shadow-blue-400/50"></div>
             <div className="absolute top-16 right-16 w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce shadow-md shadow-purple-400/60"></div>
             <div className="absolute bottom-16 left-16 w-2 h-2 bg-pink-400 rounded-full animate-pulse shadow-lg shadow-pink-400/50"></div>
             <div className="absolute bottom-24 right-24 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce shadow-md shadow-cyan-400/70"></div>
             <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-yellow-400 rounded-full animate-pulse shadow-sm shadow-yellow-400/60"></div>
             
           
             <div className="absolute inset-0 bg-gradient-to-br from-blue-900/15 via-transparent to-purple-900/15 pointer-events-none"></div>
             <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-pink-900/8 to-transparent pointer-events-none"></div>
           </div>
    )
}