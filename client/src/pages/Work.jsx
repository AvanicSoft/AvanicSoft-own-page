import React, { useState, useEffect } from 'react';
import { ExternalLink, Calendar, Inbox, Play, Pause, Eye } from 'lucide-react';

const BACKEND_URL = "http://localhost:5000";

const Work = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(`${BACKEND_URL}/api/works/All`);
        const data = await res.json();
        setProjects(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const ProjectCard = ({ project }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const [videoRef, setVideoRef] = useState(null);

    const handleMouseEnter = () => {
      setIsHovered(true);
      if (videoRef) {
        videoRef.play();
        setIsVideoPlaying(true);
      }
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      if (videoRef) {
        videoRef.pause();
        setIsVideoPlaying(false);
      }
    };

    return (
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="group relative bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] cursor-pointer border border-gray-100 mt-4"
      >
        {/* Video Background */}
        <div className="relative h-64 overflow-hidden bg-gradient-to-br from-purple-100 to-violet-100">
          <video
            ref={setVideoRef}
            className={`w-full h-full object-cover transition-all duration-700 ${
              isHovered ? 'scale-110 opacity-100' : 'scale-100 opacity-80'
            }`}
            muted
            loop
            playsInline
            preload="metadata"
            src={`${BACKEND_URL}${project.mediaUrl}`}
          />
          
          {/* Overlay gradients */}
          <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-40'
          }`} />
          
          {/* Video play indicator */}
          <div className={`absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full p-2 transition-all duration-300 ${
            isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}>
            {isVideoPlaying ? (
              <Pause size={16} className="text-white" />
            ) : (
              <Play size={16} className="text-white" />
            )}
          </div>

          {/* Project title overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className={`text-white font-bold text-xl mb-2 transition-all duration-500 transform ${
              isHovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-90'
            }`}>
              {project.title}
            </h3>
            <div className={`flex items-center text-white/80 text-sm transition-all duration-500 transform ${
              isHovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-70'
            }`}>
              <Calendar size={14} className="mr-2" />
              <span>
                {new Date(project.handoverDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })}
              </span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          {/* Description */}
          <div className="mb-6">
            <p className={`text-gray-600 leading-relaxed transition-all duration-300 ${
              isHovered ? 'text-gray-700' : 'text-gray-600'
            }`}>
              {`project.description.length > 120 
                ? ${project.description.substring(0, 120)}... 
                : project.description
              `}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <a
              href={project.websiteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 group/btn bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={16} className="mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
              View Live
            </a>
            
            <button
              className="px-4 py-3 rounded-xl border-2 border-purple-200 hover:border-purple-400 text-purple-600 hover:text-purple-700 font-semibold text-sm transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Eye size={16} className="mr-2" />
              Details
            </button>
          </div>
        </div>

        {/* Hover border effect */}
        <div className={`absolute inset-0 border-2 border-transparent bg-gradient-to-r from-purple-500 to-violet-500 rounded-3xl transition-all duration-500 -z-10 ${
          isHovered ? 'opacity-100 scale-[1.02]' : 'opacity-0 scale-100'
        }`} />
      </div>
    );
  };

  const LoadingCard = () => (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden animate-pulse">
      <div className="h-64 bg-gradient-to-br from-gray-200 to-gray-300" />
      <div className="p-6">
        <div className="h-4 bg-gray-200 rounded mb-4" />
        <div className="h-3 bg-gray-200 rounded mb-2" />
        <div className="h-3 bg-gray-200 rounded mb-6 w-3/4" />
        <div className="flex gap-3">
          <div className="flex-1 h-12 bg-gray-200 rounded-xl" />
          <div className="h-12 w-24 bg-gray-200 rounded-xl" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-violet-50">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-violet-600/5" />
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="text-center">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-gradient-to-r from-purple-100 to-violet-100 text-purple-700 rounded-full text-sm font-semibold">
                Portfolio Showcase
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 mb-6">
              Our Work Collection
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-violet-500 mx-auto rounded-full mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our latest projects and creative solutions crafted with innovation and expertise
            </p>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[...Array(6)].map((_, index) => (
              <LoadingCard key={index} />
            ))}
          </div>
        ) : projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {projects.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 mb-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-100 to-violet-100 rounded-full mb-8">
              <Inbox size={40} className="text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-700 mb-4">No Projects Available</h3>
            <p className="text-gray-500 max-w-md mx-auto">
              We're working on exciting new projects. Check back soon to see our latest work!
            </p>
          </div>
        )}

        {/* Stats Section */}
        {projects.length > 0 && (
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="group p-6 rounded-2xl transition-all duration-300 hover:bg-purple-50">
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-violet-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {projects.length}+
                </div>
                <div className="text-gray-600 font-semibold">Projects Completed</div>
              </div>
              <div className="group p-6 rounded-2xl transition-all duration-300 hover:bg-violet-50">
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  100%
                </div>
                <div className="text-gray-600 font-semibold">Client Satisfaction</div>
              </div>
              <div className="group p-6 rounded-2xl transition-all duration-300 hover:bg-fuchsia-50">
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-purple-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  24/7
                </div>
                <div className="text-gray-600 font-semibold">Support Available</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Work;
