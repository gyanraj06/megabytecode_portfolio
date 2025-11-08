import React, { useEffect } from 'react';
import { Project } from '../data/projects';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="modal-overlay fixed inset-0 z-50 flex items-start justify-center bg-black/95 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="modal-content relative w-full h-full overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="fixed top-6 right-6 sm:top-8 sm:right-8 md:top-10 md:right-12 z-[60] w-12 h-12 sm:w-14 sm:h-14 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 group"
          aria-label="Close modal"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform group-hover:rotate-90 duration-300"
          >
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Content Container */}
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-20 sm:py-24 md:py-32">

          {/* Hero Section */}
          <div className="mb-12 sm:mb-16 md:mb-24">
            <div className="mb-8 sm:mb-12">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white mb-4 sm:mb-6">
                {project.title}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-white/60 font-light max-w-3xl">
                {project.description}
              </p>
            </div>

            {/* Project Info Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 mb-12 sm:mb-16">
              <div>
                <p className="text-sm sm:text-base text-white/40 mb-2 uppercase tracking-wider">Client</p>
                <p className="text-base sm:text-lg md:text-xl text-white font-light">{project.client}</p>
              </div>
              <div>
                <p className="text-sm sm:text-base text-white/40 mb-2 uppercase tracking-wider">Year</p>
                <p className="text-base sm:text-lg md:text-xl text-white font-light">{project.year}</p>
              </div>
              <div className="col-span-2 md:col-span-1">
                <p className="text-sm sm:text-base text-white/40 mb-2 uppercase tracking-wider">Role</p>
                <p className="text-base sm:text-lg md:text-xl text-white font-light">{project.role}</p>
              </div>
              <div className="col-span-2 md:col-span-1">
                <p className="text-sm sm:text-base text-white/40 mb-2 uppercase tracking-wider">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs sm:text-sm px-3 py-1 bg-white/10 rounded-full text-white/80"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs sm:text-sm px-3 py-1 bg-white/10 rounded-full text-white/80">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Live URL Button */}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full hover:bg-[#3CDA64] hover:text-white transition-all duration-300 group"
              >
                <span className="text-base sm:text-lg font-medium">Visit Website</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                >
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            )}
          </div>

          {/* Hero Image */}
          <div className="mb-16 sm:mb-20 md:mb-32">
            <img
              src={project.heroImage}
              alt={`${project.title} hero`}
              className="w-full h-auto rounded-[25px] sm:rounded-[35px] md:rounded-[50px] object-cover"
            />
          </div>

          {/* Overview Section */}
          <div className="mb-16 sm:mb-20 md:mb-32">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 sm:mb-8">
              Overview
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/70 font-light leading-relaxed max-w-4xl">
              {project.overview}
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mb-16 sm:mb-20 md:mb-32">
            {project.images.slice(1, 3).map((image, idx) => (
              <div key={idx} className="overflow-hidden rounded-[20px] sm:rounded-[30px] md:rounded-[40px]">
                <img
                  src={image}
                  alt={`${project.title} showcase ${idx + 1}`}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>

          {/* Challenge Section */}
          <div className="mb-16 sm:mb-20 md:mb-32">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 sm:mb-8">
              The Challenge
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/70 font-light leading-relaxed max-w-4xl">
              {project.challenge}
            </p>
          </div>

          {/* Full Width Image */}
          {project.images[3] && (
            <div className="mb-16 sm:mb-20 md:mb-32">
              <img
                src={project.images[3]}
                alt={`${project.title} full showcase`}
                className="w-full h-auto rounded-[25px] sm:rounded-[35px] md:rounded-[50px] object-cover"
              />
            </div>
          )}

          {/* Solution Section */}
          <div className="mb-16 sm:mb-20 md:mb-32">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 sm:mb-8">
              The Solution
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/70 font-light leading-relaxed max-w-4xl">
              {project.solution}
            </p>
          </div>

          {/* Results Section */}
          <div className="mb-16 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white mb-8 sm:mb-12">
              Results & Impact
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {project.results.map((result, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-8 bg-white/5 backdrop-blur-sm rounded-[20px] sm:rounded-[30px] border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#3CDA64] mt-2 flex-shrink-0" />
                    <p className="text-base sm:text-lg md:text-xl text-white/80 font-light">
                      {result}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Project CTA */}
          <div className="border-t border-white/10 pt-12 sm:pt-16">
            <button
              onClick={onClose}
              className="inline-flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-300 group"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform group-hover:-translate-x-2"
              >
                <path
                  d="M19 12H5M5 12L12 19M5 12L12 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-base sm:text-lg">Back to Projects</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;
