import React, { useState } from 'react';
import { projects } from '../data/projects';
import ProjectDetailModal from './ProjectDetailModal';
import type { Project } from '../data/projects';

const ExperienceSection: React.FC = () => {
  const marqueeText = " PROJECTS * CASE STUDIES * WORKS * SHOWCASE ";
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectClick = (projectId: string) => {
    const project = projects.find(p => p.id === projectId);
    if (project) {
      setSelectedProject(project);
    }
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <div id="work" className="relative w-full bg-black py-10 sm:py-12 md:py-16">
        {/* Marquee Container with overflow hidden and gradients */}
        <div className="relative overflow-hidden">
          {/* First Marquee - Left to Right (Grey) */}
          <div className="marquee-container mb-1">
            <div className="marquee-content marquee-ltr">
              <span className="marquee-text text-xl sm:text-2xl md:text-3xl">{marqueeText}</span>
              <span className="marquee-text text-xl sm:text-2xl md:text-3xl">{marqueeText}</span>
              <span className="marquee-text text-xl sm:text-2xl md:text-3xl">{marqueeText}</span>
              <span className="marquee-text text-xl sm:text-2xl md:text-3xl">{marqueeText}</span>
              <span className="marquee-text text-xl sm:text-2xl md:text-3xl">{marqueeText}</span>
            </div>
          </div>

          {/* Middle Marquee - Right to Left (White) */}
          <div className="marquee-container mb-1">
            <div className="marquee-content marquee-rtl">
              <span className="marquee-text marquee-text-white text-xl sm:text-2xl md:text-3xl">{marqueeText}</span>
              <span className="marquee-text marquee-text-white text-xl sm:text-2xl md:text-3xl">{marqueeText}</span>
              <span className="marquee-text marquee-text-white text-xl sm:text-2xl md:text-3xl">{marqueeText}</span>
              <span className="marquee-text marquee-text-white text-xl sm:text-2xl md:text-3xl">{marqueeText}</span>
              <span className="marquee-text marquee-text-white text-xl sm:text-2xl md:text-3xl">{marqueeText}</span>
            </div>
          </div>

          {/* Bottom Marquee - Left to Right (Grey) */}
          <div className="marquee-container">
            <div className="marquee-content marquee-ltr">
              <span className="marquee-text text-xl sm:text-2xl md:text-3xl">{marqueeText}</span>
              <span className="marquee-text text-xl sm:text-2xl md:text-3xl">{marqueeText}</span>
              <span className="marquee-text text-xl sm:text-2xl md:text-3xl">{marqueeText}</span>
              <span className="marquee-text text-xl sm:text-2xl md:text-3xl">{marqueeText}</span>
              <span className="marquee-text text-xl sm:text-2xl md:text-3xl">{marqueeText}</span>
            </div>
          </div>

          {/* Left gradient overlay - only for marquees */}
          <div className="absolute top-0 left-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />

          {/* Right gradient overlay - only for marquees */}
          <div className="absolute top-0 right-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
        </div>

        {/* Experience Cards Section */}
        <div className="w-full max-w-[1080px] mx-auto mt-12 sm:mt-16 md:mt-20 px-4 sm:px-8 md:px-12">
          {/* Card 1 - Trip Pe Chalo - Full width */}
          <div className="experience-card w-full">
            <div
              className="relative group cursor-pointer overflow-hidden rounded-[20px] sm:rounded-[30px] md:rounded-[40px]"
              onClick={() => handleProjectClick('trip-pe-chalo')}
            >
              <img
                src={projects[0].thumbnail}
                alt={projects[0].title}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Arrow in bottom left corner */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8 w-[28px] h-[28px] sm:w-[34px] sm:h-[34px] md:w-[40px] md:h-[40px] bg-white rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transform -rotate-45 transition-transform group-hover:rotate-[-5deg] sm:w-4 sm:h-4 md:w-5 md:h-5"
                >
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Description below card */}
            <div className="mt-4 sm:mt-6 md:mt-8">
              <h3 className="text-white text-lg sm:text-xl md:text-2xl font-light mb-2 sm:mb-3">{projects[0].title}</h3>
              <p className="text-white/80 text-xs sm:text-sm md:text-base font-light leading-relaxed">
                {projects[0].description}
              </p>
            </div>
          </div>

          {/* Cards 2 & 3 - Two column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mt-8 sm:mt-10 md:mt-12 lg:mt-16">
            {/* Card 2 - Unity */}
            <div className="experience-card w-full">
              <div
                className="relative group cursor-pointer overflow-hidden rounded-[20px] sm:rounded-[30px] md:rounded-[40px]"
                onClick={() => handleProjectClick(projects[1].id)}
              >
                <img
                  src={projects[1].thumbnail}
                  alt={projects[1].title}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Arrow in bottom left corner */}
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8 w-[28px] h-[28px] sm:w-[34px] sm:h-[34px] md:w-[40px] md:h-[40px] bg-white rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transform -rotate-45 transition-transform group-hover:rotate-[-5deg] sm:w-4 sm:h-4 md:w-5 md:h-5"
                  >
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Description below card */}
              <div className="mt-4 sm:mt-6 md:mt-8">
                <h3 className="text-white text-lg sm:text-xl md:text-2xl font-light mb-2 sm:mb-3">{projects[1].title}</h3>
                <p className="text-white/80 text-xs sm:text-sm md:text-base font-light leading-relaxed">
                  {projects[1].description}
                </p>
              </div>
            </div>

            {/* Card 3 - Happy Holidays */}
            <div className="experience-card w-full">
              <div
                className="relative group cursor-pointer overflow-hidden rounded-[20px] sm:rounded-[30px] md:rounded-[40px]"
                onClick={() => handleProjectClick(projects[2].id)}
              >
                <img
                  src={projects[2].thumbnail}
                  alt={projects[2].title}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Arrow in bottom left corner */}
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8 w-[28px] h-[28px] sm:w-[34px] sm:h-[34px] md:w-[40px] md:h-[40px] bg-white rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transform -rotate-45 transition-transform group-hover:rotate-[-5deg] sm:w-4 sm:h-4 md:w-5 md:h-5"
                  >
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Description below card */}
              <div className="mt-4 sm:mt-6 md:mt-8">
                <h3 className="text-white text-lg sm:text-xl md:text-2xl font-light mb-2 sm:mb-3">{projects[2].title}</h3>
                <p className="text-white/80 text-xs sm:text-sm md:text-base font-light leading-relaxed">
                  {projects[2].description}
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 - Shipkaro - Full width */}
          <div className="experience-card w-full mt-8 sm:mt-10 md:mt-12 lg:mt-16">
            <div
              className="relative group cursor-pointer overflow-hidden rounded-[20px] sm:rounded-[30px] md:rounded-[40px]"
              onClick={() => handleProjectClick('shipkaro')}
            >
              <img
                src={projects[3].thumbnail}
                alt={projects[3].title}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Arrow in bottom left corner */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8 w-[28px] h-[28px] sm:w-[34px] sm:h-[34px] md:w-[40px] md:h-[40px] bg-white rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transform -rotate-45 transition-transform group-hover:rotate-[-5deg] sm:w-4 sm:h-4 md:w-5 md:h-5"
                >
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Description below card */}
            <div className="mt-4 sm:mt-6 md:mt-8">
              <h3 className="text-white text-lg sm:text-xl md:text-2xl font-light mb-2 sm:mb-3">{projects[3].title}</h3>
              <p className="text-white/80 text-xs sm:text-sm md:text-base font-light leading-relaxed">
                {projects[3].description}
              </p>
            </div>
          </div>

          {/* Cards 5 & 6 - Two column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mt-8 sm:mt-10 md:mt-12 lg:mt-16">
            {/* Card 5 - Divyafal */}
            <div className="experience-card w-full">
              <div
                className="relative group cursor-pointer overflow-hidden rounded-[20px] sm:rounded-[30px] md:rounded-[40px]"
                onClick={() => handleProjectClick(projects[4].id)}
              >
                <img
                  src={projects[4].thumbnail}
                  alt={projects[4].title}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Arrow in bottom left corner */}
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8 w-[28px] h-[28px] sm:w-[34px] sm:h-[34px] md:w-[40px] md:h-[40px] bg-white rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transform -rotate-45 transition-transform group-hover:rotate-[-5deg] sm:w-4 sm:h-4 md:w-5 md:h-5"
                  >
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Description below card */}
              <div className="mt-8">
                <h3 className="text-white text-lg sm:text-xl md:text-2xl font-light mb-3">{projects[4].title}</h3>
                <p className="text-white/80 text-xs sm:text-sm md:text-base font-light leading-relaxed">
                  {projects[4].description}
                </p>
              </div>
            </div>

            {/* Card 6 - Personal Portfolio */}
            <div className="experience-card w-full">
              <div
                className="relative group cursor-pointer overflow-hidden rounded-[20px] sm:rounded-[30px] md:rounded-[40px]"
                onClick={() => handleProjectClick(projects[5].id)}
              >
                <img
                  src={projects[5].thumbnail}
                  alt={projects[5].title}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Arrow in bottom left corner */}
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8 w-[28px] h-[28px] sm:w-[34px] sm:h-[34px] md:w-[40px] md:h-[40px] bg-white rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transform -rotate-45 transition-transform group-hover:rotate-[-5deg] sm:w-4 sm:h-4 md:w-5 md:h-5"
                  >
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Description below card */}
              <div className="mt-8">
                <h3 className="text-white text-lg sm:text-xl md:text-2xl font-light mb-3">{projects[5].title}</h3>
                <p className="text-white/80 text-xs sm:text-sm md:text-base font-light leading-relaxed">
                  {projects[5].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal project={selectedProject} onClose={handleCloseModal} />
    </>
  );
};

export default ExperienceSection;
