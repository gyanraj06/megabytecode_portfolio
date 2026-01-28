import React from "react";

const AboutMeSection: React.FC = () => {
  return (
    <section
      id="about"
      className="w-full py-16 md:py-24 lg:py-32 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[95px] bg-black"
    >
      {/* About Me heading centered */}
      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white text-center mb-16 md:mb-20 lg:mb-24">
        About Us
      </h2>

      {/* Grid layout for content and image */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-20 items-start max-w-7xl mx-auto">
        {/* Text content */}
        <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
          <p className="text-white/60 text-sm sm:text-base md:text-lg font-light leading-relaxed">
            We’re an ambitious creative solutions studio built on curiosity,
            late-night ideas, and the belief that great products come from
            asking why a few more times than most. What started as a collection
            of experiments and weekend projects grew into a space where design,
            code, and strategy come together to solve real problems with
            intention.
          </p>

          <p className="text-white/60 text-sm sm:text-base md:text-lg font-light leading-relaxed">
            At our core, we help startups and creators turn messy ideas into
            clean, functional, and meaningful digital experiences - the kind
            that feel effortless, but are crafted with care behind the scenes.
            Whether it’s a full-fledged platform, a sleek landing page, or an
            MVP ready to ship, we focus on clarity, usability, and a touch of
            craft in everything we build.
          </p>

          <p className="text-white/60 text-sm sm:text-base md:text-lg font-light leading-relaxed">
            We move fast, think deeply, and partner closely with teams who care
            about what they’re creating.
          </p>
        </div>

        {/* Image and contact info */}
        <div className="flex flex-col lg:items-end order-1 lg:order-2">
          <div className="mx-auto lg:mx-0 w-64 sm:w-72 md:w-80 lg:w-96">
            <div className="w-full aspect-square rounded-2xl overflow-hidden">
              <img
                src="/images/me.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>


            <div className="flex flex-col gap-4 text-center lg:text-left mt-6">
              <div>
                <p className="text-white/40 text-xs sm:text-sm font-light mb-1">
                  Operations Under
                </p>
                <a
                  href="mailto:nalaprasaddesigns@gmail.com"
                  className="text-white text-xs sm:text-sm md:text-base font-light hover:text-[#3CDA64] transition-colors"
                >
                  Mounterra Innovations LLP.
                </a>
              </div>

              <div>
                <p className="text-white/40 text-xs sm:text-sm font-light mb-1">
                  Location
                </p>
                <p className="text-white text-xs sm:text-sm md:text-base font-light">
                  Bhopal, MP
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
