import React, { useState, useEffect } from 'react';
import { ExternalLink, Calendar, Eye } from 'lucide-react';

const WorkDisplayPage = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with advanced features including real-time inventory, payment integration, and user analytics dashboard.",
      handoverDate: "2024-03-15",
      websiteLink: "https://example-ecommerce.com",
      backgroundMedia: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&q=80",
      mediaType: "image"
    },
    {
      id: 2,
      title: "Social Media Dashboard",
      description: "Comprehensive social media management tool with analytics, scheduling, and multi-platform integration for businesses.",
      handoverDate: "2024-02-28",
      websiteLink: "https://example-dashboard.com",
      backgroundMedia: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&q=80",
      mediaType: "image"
    },
    {
      id: 3,
      title: "Learning Management System",
      description: "Educational platform with course management, student tracking, and interactive learning modules for educational institutions.",
      handoverDate: "2024-01-20",
      websiteLink: "https://example-lms.com",
      backgroundMedia: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop&q=80",
      mediaType: "image"
    }
  ]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // backend fetch here
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };
    // fetchProjects();
  }, []);

  const ProjectCard = ({ project }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div
        className="relative group bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-700 hover:scale-105 hover:shadow-2xl cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden">
          {project.mediaType === 'video' ? (
            <video
              className={`w-full h-full object-cover transition-all duration-700 ${
                isHovered ? 'opacity-40 scale-110' : 'opacity-0'
              }`}
              autoPlay={isHovered}
              muted
              loop
              playsInline
            >
              <source src={project.backgroundMedia} type="video/mp4" />
            </video>
          ) : (
            <img
              src={project.backgroundMedia}
              alt={project.title}
              className={`w-full h-full object-cover transition-all duration-700 ${
                isHovered ? 'opacity-40 scale-110' : 'opacity-0'
              }`}
            />
          )}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-700 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 p-8 h-full flex flex-col justify-between min-h-96">
          <div className="flex-grow">
            <h3
              className={`text-3xl font-bold mb-4 transition-all duration-500 ${
                isHovered ? 'text-white transform -translate-y-2' : 'text-gray-800'
              }`}
            >
              {project.title}
            </h3>

            <p
              className={`text-base mb-6 leading-relaxed transition-all duration-500 ${
                isHovered ? 'text-gray-200 transform -translate-y-2' : 'text-gray-600'
              }`}
            >
              {project.description}
            </p>

            <div
              className={`flex items-center text-sm mb-8 transition-all duration-500 ${
                isHovered ? 'text-gray-300 transform -translate-y-2' : 'text-gray-500'
              }`}
            >
              <Calendar size={18} className="mr-3" />
              <span className="font-medium">
                Handover:{' '}
                {new Date(project.handoverDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>
          </div>

          {/* Buttons */}
          <div
            className={`flex space-x-4 transition-all duration-500 ${
              isHovered ? 'transform -translate-y-2' : ''
            }`}
          >
            <a
              href={project.websiteLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 flex items-center justify-center px-6 py-4 rounded-xl font-bold text-lg transition-all duration-500 transform hover:scale-110 ${
                isHovered
                  ? 'bg-white text-gray-800 hover:bg-gray-100 shadow-lg'
                  : 'bg-purple-600 text-white hover:bg-purple-700 shadow-md'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={20} className="mr-3" />
              View Live
            </a>
            <button
              className={`flex-1 flex items-center justify-center px-6 py-4 rounded-xl font-bold text-lg transition-all duration-500 transform hover:scale-110 ${
                isHovered
                  ? 'bg-gray-800/90 text-white hover:bg-gray-700 shadow-lg'
                  : 'bg-violet-700 text-white hover:bg-violet-800 shadow-md'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <Eye size={20} className="mr-3" />
              View Details
            </button>
          </div>
        </div>

        {/* Border */}
        <div
          className={`absolute inset-0 border-4 border-purple-500 rounded-2xl transition-all duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-violet-50 to-fuchsia-50 py-16 px-6">
      <div className="max-w-8xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 mb-6">
              Our Work Hall of Fame
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-fuchsia-500 mx-auto rounded-full"></div>
          </div>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto mt-8 leading-relaxed">
            Explore our latest projects and professional achievements crafted with passion and precision
          </p>
        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Empty values*/}
        {projects.length === 0 && (
          <div className="text-center py-32">
            <div className="text-8xl mb-8">🎨</div>
            <h3 className="text-3xl font-bold text-gray-600 mb-4">No Projects to Display</h3>
            <p className="text-xl text-gray-500">Check back soon for amazing new projects!</p>
          </div>
        )}

        {/* Stats */}
        <div className="mt-20 bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-black text-purple-600 mb-2">{projects.length}+</div>
              <div className="text-gray-600 font-semibold">Projects Completed</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-black text-violet-600 mb-2">100%</div>
              <div className="text-gray-600 font-semibold">Client Satisfaction</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-black text-fuchsia-600 mb-2">24/7</div>
              <div className="text-gray-600 font-semibold">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkDisplayPage;
