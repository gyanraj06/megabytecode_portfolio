export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  client: string;
  year: string;
  role: string;
  technologies: string[];
  liveUrl?: string;
  heroImage: string;
  images: string[];
  overview: string;
  challenge: string;
  solution: string;
  results: string[];
}

export const projects: Project[] = [
  {
    id: "trip-pe-chalo",
    title: "Trip Pe Chalo",
    description:
      "From local events to large-scale experiences, manage smarter bookings, streamline operations, and grow your events and adventure business with ease.",
    thumbnail: "/experience-card-1.png",
    client: "Trip Pe Chalo",
    year: "2026",
    role: "Inhouse Startup",
    technologies: ["React", "Node.js", "MongoDB", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://company.trippechalo.in",
    heroImage: "/experience-card-1.png",
    images: ["/experience-card-1.png", "/TPC1.png", "/TPC2.png"],
    overview:
      "Trip Pe Chalo is a comprehensive travel-tech platform designed to revolutionize how local businesses and large-scale event organizers manage bookings, operations, and customer experiences. The platform bridges the gap between traditional event management and modern digital solutions.",
    challenge:
      "Event organizers struggled with fragmented booking systems, manual operations, and lack of real-time insights. Small businesses lacked access to professional-grade tools, while large operators needed better scalability.",
    solution:
      "We built an end-to-end platform featuring intelligent booking management, automated workflow systems, real-time analytics, and a mobile-first interface. The system integrates payment processing, customer management, and operational tools in one unified dashboard.",
    results: [
      "300% increase in booking efficiency",
      "Reduced operational overhead by 60%",
      "Successfully managing 10,000+ events monthly",
      "Average customer satisfaction score of 4.8/5",
    ],
  },
  {
    id: "unity",
    title: "Unity",
    description:
      "Production grade flutter app design and development for UNITY, an e-scooty brand based out of Bangalore, India on their 4th anniversary.",
    thumbnail: "/Frame-5.png",
    client: "Unity E-Scooty",
    year: "2025",
    role: "Mobile App Designer & Flutter Developer",
    technologies: [
      "Flutter",
      "Dart",
      "Firebase",
      "Google Maps API",
      "Razorpay",
    ],
    liveUrl: "",
    heroImage: "/Frame-5.png",
    images: ["/Frame-5.png", "/unity1.png", "/unity2.png"],
    overview:
      "Unity is a next-generation e-scooty rental application that brings sustainable urban mobility to Bangalore. Developed for their 4th anniversary, this production-grade Flutter application combines sleek design with robust functionality.",
    challenge:
      "Create a seamless rental experience that handles real-time vehicle tracking, payment processing, and user management while maintaining performance and reliability at scale.",
    solution:
      "Developed a comprehensive Flutter application with integrated GPS tracking, smart payment systems, and an intuitive booking interface. Implemented real-time availability updates, ride history, and a rewards program.",
    results: [
      "Launched successfully on iOS and Android",
      "50,000+ downloads in first 3 months",
      "Average app rating of 4.6/5",
      "95% booking completion rate",
    ],
  },
  {
    id: "happyholidays",
    title: "Happy Holidays",
    description:
      "E2E UI-driven hotel and guest house booking management system built for Union Bank, enabling seamless room reservations, member access control, and operational workflows.",
    thumbnail: "/hh1.png",
    client: "Union Bank (UBEA Initiative)",
    year: "2024",
    role: "Full Stack Development",
    technologies: ["React", "Node.js", "PostgreSQL", "Firebase", "Docker"],
    liveUrl: "https://unionawasholidayhome.com/",
    heroImage: "/hh1.png",
    images: ["/hh1.png", "/hh2.png", "/hh3.png"],
    overview:
      "Happy Holidays is a centralized hotel and guest house booking management platform developed for Union Bank employees, officers, retirees, and union members. The system digitizes the end-to-end reservation process while ensuring controlled access, transparency, and ease of operations for both guests and administrators.",
    challenge:
      "The existing booking process was largely manual, fragmented, and error-prone, leading to double bookings, limited visibility, and operational overhead. Union-managed properties required a secure, member-only system with clear availability, approvals, and booking rules.",
    solution:
      "Designed and developed a modern, UI-first booking platform with real-time room availability, member authentication, role-based access, and automated booking workflows. The system supports guest house and hall reservations, admin approvals, dynamic pricing rules, and centralized reporting.",
    results: [
      "Eliminated manual booking conflicts and double reservations",
      "Improved booking transparency for members and administrators",
      "Reduced operational overhead through automation",
      "Single source of truth for room availability and bookings",
    ],
  },
  {
    id: "coingroww",
    title: "Coin Groww",
    description:
      "Product design and development for Coin Groww, a crypto-focused media and PR platform delivering breaking news, market insights, and advertising solutions for blockchain projects.",
    thumbnail: "/CoinGrowwBanner.png",
    client: "Coin Groww",
    year: "2025",
    role: "Product Design and Development",
    technologies: ["React", "Node.js", "Express", "Postgres SQL", "AWS"],
    liveUrl: "",
    heroImage: "/CoinGrowwBanner.png",
    images: ["/CoinGrowwBanner.png"],
    overview:
      "Coin Groww is a crypto media and PR platform designed to bridge the gap between blockchain projects and their audiences. The platform delivers breaking crypto news, in-depth articles, trend analysis, and detailed coin insights, while also offering advertising and promotional opportunities for emerging Web3 projects.",
    challenge:
      "Crypto projects often struggle with visibility, credibility, and reaching the right audience. At the same time, users face information overload from scattered sources, making it difficult to find reliable news, analysis, and project details in one place.",
    solution:
      "Designed and developed a centralized platform combining crypto news, educational content, market trends, and coin-specific data. The system also integrates advertising and PR modules, allowing projects to showcase campaigns, announcements, and sponsored content seamlessly.",
    results: [
      "Built a scalable crypto news and content platform",
      "Enabled integrated advertising and PR placements",
      "Improved user engagement through structured trend analysis",
      "Provided a unified discovery experience for coins and projects",
    ],
  },
  {
    id: "divyafal",
    title: "Divyafal",
    description:
      "Website and E-commerce implementation for Bhopal based designer studio.",
    thumbnail: "/Frame-39.png",
    client: "Divyafal Designer Studio",
    year: "2025",
    role: "Complete E2E Solution",
    technologies: ["React", "Shopify", "JavaScript", "CSS", "Stripe"],
    liveUrl: "https://divyafal.com/",
    heroImage: "/Frame-39.png",
    images: ["/Frame-39.png", "/d1.png", "/d2.png"],
    overview:
      "Divyafal is a premium designer studio based in Bhopal, specializing in bespoke fashion and accessories. The project involved creating a sophisticated e-commerce platform that reflects the brand's artistic vision.",
    challenge:
      "The studio needed a digital presence that matched their physical boutique's elegance while providing a seamless online shopping experience. The platform had to showcase intricate design details and support custom orders.",
    solution:
      "Developed a custom e-commerce website with high-resolution product galleries, virtual try-on capabilities, personalized shopping experiences, and integrated appointment booking for custom consultations.",
    results: [
      "Online sales increased by 200%",
      "Average session duration of 4.5 minutes",
      "Custom order requests up by 150%",
      "Featured in regional fashion publications",
    ],
  },
  {
    id: "personal-portfolio",
    title: "Personal Portfolio",
    description:
      "Managed multiple personal portfolios from different niches and ideologies, bringing ideas and shaping them into personal brands.",
    thumbnail: "/Frame-40.png",
    client: "Various Clients",
    year: "2022-2026",
    role: "Froentend Development and Integrations",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    liveUrl: "",
    heroImage: "/Frame-40.png",
    images: ["/Frame-40.png", "/p1.png", "/p2.png"],
    overview:
      "A collection of personal portfolio projects spanning various industries and creative fields. Each portfolio was crafted to tell a unique story and establish a strong personal brand presence.",
    challenge:
      "Different clients from diverse backgrounds needed portfolios that authentically represented their work while standing out in competitive markets. Each required a unique approach to content, design, and functionality.",
    solution:
      "Developed custom portfolio solutions tailored to each client's niche - from photographers and designers to developers and consultants. Focused on storytelling, performance, and conversion optimization.",
    results: [
      "15+ successful portfolio launches",
      "Average client engagement increase of 180%",
      "Multiple clients featured in industry publications",
      "85% reported increased client inquiries",
    ],
  },
];
