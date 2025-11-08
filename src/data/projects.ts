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
    id: 'trip-pe-chalo',
    title: 'Trip Pe Chalo',
    description: 'From local events to large-scale experiences, manage smarter bookings, streamline operations, and grow your events and adventure business with ease.',
    thumbnail: '/experience-card-1.png',
    client: 'Trip Pe Chalo',
    year: '2024',
    role: 'Lead Product Designer & Developer',
    technologies: ['React', 'Node.js', 'MongoDB', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://trippechalo.com',
    heroImage: '/experience-card-1.png',
    images: [
      '/experience-card-1.png',
      '/experience-card-1.png',
      '/experience-card-1.png',
      '/experience-card-1.png'
    ],
    overview: 'Trip Pe Chalo is a comprehensive travel-tech platform designed to revolutionize how local businesses and large-scale event organizers manage bookings, operations, and customer experiences. The platform bridges the gap between traditional event management and modern digital solutions.',
    challenge: 'Event organizers struggled with fragmented booking systems, manual operations, and lack of real-time insights. Small businesses lacked access to professional-grade tools, while large operators needed better scalability.',
    solution: 'We built an end-to-end platform featuring intelligent booking management, automated workflow systems, real-time analytics, and a mobile-first interface. The system integrates payment processing, customer management, and operational tools in one unified dashboard.',
    results: [
      '300% increase in booking efficiency',
      'Reduced operational overhead by 60%',
      'Successfully managing 10,000+ events monthly',
      'Average customer satisfaction score of 4.8/5'
    ]
  },
  {
    id: 'unity',
    title: 'Unity',
    description: 'Production grade flutter app design and development for UNITY, an e-scooty brand based out of Bangalore, India on their 4th anniversary.',
    thumbnail: '/Frame-5.png',
    client: 'Unity E-Scooty',
    year: '2024',
    role: 'Mobile App Designer & Flutter Developer',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Google Maps API', 'Razorpay'],
    liveUrl: 'https://unity-scooters.com',
    heroImage: '/Frame-5.png',
    images: [
      '/Frame-5.png',
      '/Frame-5.png',
      '/Frame-5.png',
      '/Frame-5.png'
    ],
    overview: 'Unity is a next-generation e-scooty rental application that brings sustainable urban mobility to Bangalore. Developed for their 4th anniversary, this production-grade Flutter application combines sleek design with robust functionality.',
    challenge: 'Create a seamless rental experience that handles real-time vehicle tracking, payment processing, and user management while maintaining performance and reliability at scale.',
    solution: 'Developed a comprehensive Flutter application with integrated GPS tracking, smart payment systems, and an intuitive booking interface. Implemented real-time availability updates, ride history, and a rewards program.',
    results: [
      'Launched successfully on iOS and Android',
      '50,000+ downloads in first 3 months',
      'Average app rating of 4.6/5',
      '95% booking completion rate'
    ]
  },
  {
    id: 'stockone',
    title: 'Stockone',
    description: 'E2E UI Driven Warehouse management system for Stockone that contributes in functionality such as Inventory management, Workflow Automations and Real time tracking and reporting',
    thumbnail: '/Frame-4.png',
    client: 'Stockone',
    year: '2023',
    role: 'Full Stack Developer & UX Designer',
    technologies: ['React', 'Python', 'PostgreSQL', 'Redis', 'Docker'],
    liveUrl: 'https://stockone.io',
    heroImage: '/Frame-4.png',
    images: [
      '/Frame-4.png',
      '/Frame-4.png',
      '/Frame-4.png',
      '/Frame-4.png'
    ],
    overview: 'Stockone is an enterprise-grade warehouse management system that transforms complex inventory operations into streamlined, automated workflows. The platform serves businesses of all sizes with intelligent tracking and reporting capabilities.',
    challenge: 'Traditional warehouse systems were clunky, slow, and required extensive training. Businesses needed a modern, intuitive solution that could handle complex operations while remaining easy to use.',
    solution: 'Built a UI-first warehouse management platform with drag-and-drop workflows, real-time inventory tracking, automated reporting, and intelligent forecasting. The system integrates with existing ERP solutions and provides comprehensive analytics.',
    results: [
      '80% reduction in inventory errors',
      'Workflow automation saving 40 hours/week',
      'Real-time visibility across 100+ warehouses',
      '99.9% system uptime'
    ]
  },
  {
    id: 'shipkaro',
    title: 'Shipkaro',
    description: 'Structural product design and website development for Shipkaro, a logistics aggregator and shipping management platform that enables e-com business to simplify and optimize the shipping operations',
    thumbnail: '/Frame-38.png',
    client: 'Shipkaro',
    year: '2023',
    role: 'Product Designer & Frontend Developer',
    technologies: ['React', 'Node.js', 'Express', 'MySQL', 'AWS'],
    liveUrl: 'https://shipkaro.com',
    heroImage: '/Frame-38.png',
    images: [
      '/Frame-38.png',
      '/Frame-38.png',
      '/Frame-38.png',
      '/Frame-38.png'
    ],
    overview: 'Shipkaro is a logistics aggregator platform that simplifies shipping operations for e-commerce businesses. The platform integrates multiple courier services, providing intelligent routing, cost optimization, and unified tracking.',
    challenge: 'E-commerce businesses struggled with managing multiple courier partners, comparing rates, and tracking shipments across different platforms. Manual processes led to errors and inefficiencies.',
    solution: 'Designed and developed a comprehensive shipping management platform with multi-carrier integration, AI-powered route optimization, automated label generation, and real-time tracking dashboard.',
    results: [
      'Integrated 15+ major courier services',
      'Average shipping cost reduction of 25%',
      'Processing 100,000+ shipments monthly',
      'Delivery success rate improved to 98%'
    ]
  },
  {
    id: 'divyafal',
    title: 'Divyafal',
    description: 'Website and E-commerce implementation for Bhopal based designer studio.',
    thumbnail: '/Frame-39.png',
    client: 'Divyafal Designer Studio',
    year: '2024',
    role: 'Web Developer & E-commerce Specialist',
    technologies: ['React', 'Shopify', 'JavaScript', 'CSS', 'Stripe'],
    liveUrl: 'https://divyafal.com',
    heroImage: '/Frame-39.png',
    images: [
      '/Frame-39.png',
      '/Frame-39.png',
      '/Frame-39.png',
      '/Frame-39.png'
    ],
    overview: 'Divyafal is a premium designer studio based in Bhopal, specializing in bespoke fashion and accessories. The project involved creating a sophisticated e-commerce platform that reflects the brand\'s artistic vision.',
    challenge: 'The studio needed a digital presence that matched their physical boutique\'s elegance while providing a seamless online shopping experience. The platform had to showcase intricate design details and support custom orders.',
    solution: 'Developed a custom e-commerce website with high-resolution product galleries, virtual try-on capabilities, personalized shopping experiences, and integrated appointment booking for custom consultations.',
    results: [
      'Online sales increased by 200%',
      'Average session duration of 4.5 minutes',
      'Custom order requests up by 150%',
      'Featured in regional fashion publications'
    ]
  },
  {
    id: 'personal-portfolio',
    title: 'Personal Portfolio',
    description: 'Managed multiple personal portfolios from different niches and ideologies, bringing ideas and shaping them into personal brands.',
    thumbnail: '/Frame-40.png',
    client: 'Various Clients',
    year: '2022-2024',
    role: 'Brand Designer & Full Stack Developer',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: '',
    heroImage: '/Frame-40.png',
    images: [
      '/Frame-40.png',
      '/Frame-40.png',
      '/Frame-40.png',
      '/Frame-40.png'
    ],
    overview: 'A collection of personal portfolio projects spanning various industries and creative fields. Each portfolio was crafted to tell a unique story and establish a strong personal brand presence.',
    challenge: 'Different clients from diverse backgrounds needed portfolios that authentically represented their work while standing out in competitive markets. Each required a unique approach to content, design, and functionality.',
    solution: 'Developed custom portfolio solutions tailored to each client\'s niche - from photographers and designers to developers and consultants. Focused on storytelling, performance, and conversion optimization.',
    results: [
      '15+ successful portfolio launches',
      'Average client engagement increase of 180%',
      'Multiple clients featured in industry publications',
      '85% reported increased client inquiries'
    ]
  }
];
