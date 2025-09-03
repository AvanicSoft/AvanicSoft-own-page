import React, { useState } from "react";
import { Rocket, Target, ArrowRight } from "lucide-react";

const techSnippets = {
  React: [
    { color: "purple-400", text: "import React from 'react';" },
    { color: "blue-400", text: "const App = () => {" },
    { color: "green-400", text: "  return <h1>Hello React</h1>;" },
  ],
  "Node.js": [
    { color: "purple-400", text: "const express = require('express');" },
    { color: "blue-400", text: "const app = express();" },
    { color: "green-400", text: "app.listen(3000, () => console.log('Server running'));" },
  ],
  Python: [
    { color: "purple-400", text: "def greet():" },
    { color: "green-400", text: "  print('Hello Python')" },
    { color: "blue-400", text: "greet()" },
  ],
  AWS: [
    { color: "purple-400", text: "import boto3" },
    { color: "green-400", text: "s3 = boto3.client('s3')" },
    { color: "blue-400", text: "s3.list_buckets()" },
  ],
  Docker: [
    { color: "purple-400", text: "FROM node:18" },
    { color: "green-400", text: "WORKDIR /app" },
    { color: "blue-400", text: "COPY . . && RUN npm install && CMD ['npm','start']" },
  ],
};



const HeroSection = () => {
  const [activeTech, setActiveTech] = useState("React");

  return (
    <section className="relative h-screen bg-gray-900 overflow-hidden md:px-10 px-5">
      <div className="relative px-4 lg:px-8 py-5">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              We Build{" "}
              <span className="text-purple-400">Digital Experiences</span> That
              Matter
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-4 leading-relaxed">
              From concept to launch, we create scalable software solutions that
              solve real problems, delight users, and drive measurable results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button className="inline-flex cursor-pointer items-center px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="inline-flex cursor-pointer items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-200">
                See Our Work
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  100+
                </div>
                <div className="text-gray-400 text-sm">Projects Delivered</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  50+
                </div>
                <div className="text-gray-400 text-sm">Happy Clients</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  5+
                </div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative lg:ml-10">
            {/* Code snippet mockup */}
            <div className=" hidden  md:block bg-gray-800 rounded-xl p-6 shadow-2xl border border-gray-700">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="space-y-2 text-sm font-mono">
                {techSnippets[activeTech].map((line, idx) => (
                  <div key={idx} className={`text-${line.color}`}>
                    {line.text}
                  </div>
                ))}
              </div>
            </div>

            {/* Floating icons */}
            <div className=" hidden md:block absolute -top-4 -right-4 bg-purple-500 p-3 rounded-xl shadow-lg">
              <Rocket className="w-6 h-6 text-white" />
            </div>

            {/* Tech stack buttons */}
            <div className="hidden  md:flex mt-8  flex-wrap gap-2 justify-center lg:justify-start">
              {Object.keys(techSnippets).map((tech) => (
                <button
                  key={tech}
                  onClick={() => setActiveTech(tech)}
                  className={`px-3 py-1 cursor-pointer rounded-full text-sm font-semibold transition-colors duration-200
                    ${
                      activeTech === tech
                        ? "bg-purple-600 text-white shadow-md shadow-purple-500/20"
                        : "bg-gray-800 text-gray-300 border border-gray-700 hover:border-purple-500 hover:text-white"
                    }`}
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
