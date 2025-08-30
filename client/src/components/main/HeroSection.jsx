import React from 'react';
import { Code, Rocket, Target, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gray-900 overflow-hidden">
    
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900 to-gray-900"></div>
      </div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500 rounded-lg opacity-20"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-blue-500 rounded-full opacity-30"></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-500 transform rotate-45 opacity-25"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 mb-6">
              <Code className="w-4 h-4 mr-2" />
              Software Development Excellence
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              We are a{' '}
              <span className="text-purple-400">
                Software Development
              </span>{' '}
              Company
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              We are your trusted development partner with just one goal in focus to build products that generate a lasting, profitable impact.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button className="inline-flex items-center px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-200">
                View Our Work
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">100+</div>
                <div className="text-gray-400 text-sm">Projects Delivered</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">50+</div>
                <div className="text-gray-400 text-sm">Happy Clients</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">5+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
            </div>
          </div>
          
          {/* Visual Elements */}
          <div className="relative lg:ml-10">
            {/* Main visual container */}
            <div className="relative">
              {/* Code snippet mockup */}
              <div className="bg-gray-800 rounded-xl p-6 shadow-2xl border border-gray-700 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="text-purple-400">const</div>
                  <div className="text-blue-400 ml-4">buildAmazingProduct = () ={"{"}
                  </div>
                  <div className="text-green-400 ml-8">return success;</div>
                  <div className="text-blue-400 ml-4">{'}'}</div>
                </div>
              </div>
              
              {/* Floating icons */}
              <div className="absolute -top-4 -right-4 bg-purple-500 p-3 rounded-xl shadow-lg">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-blue-500 p-3 rounded-xl shadow-lg">
                <Target className="w-6 h-6 text-white" />
              </div>
              
              {/* Additional decorative elements */}
              <div className="absolute top-1/2 -right-8 w-24 h-24 bg-purple-600 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -top-8 left-1/2 w-32 h-32 bg-blue-600 rounded-full opacity-20 blur-xl"></div>
            </div>
            
            {/* Tech stack indicators */}
            <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
              {['React', 'Node.js', 'Python', 'AWS', 'Docker'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700 hover:border-purple-500 transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div> */}
    </section>
  );
};

export default HeroSection;