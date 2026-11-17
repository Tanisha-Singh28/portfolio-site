export const personalInfo = {
  name: "Tanisha Rakesh Singh",
  initials: "TS",
  tagline: "Aspiring Full-Stack Developer & Tech Enthusiast",
  heroGreeting: "Hi, I'm",
  heroRole: "Full-Stack Developer & Hackathon Enthusiast",
  heroBio: "Passionate about building responsive web applications, participating in hackathons, and exploring modern frontend ecosystems. Always curious to learn, build, and collaborate on exciting real-world ideas.",
  availability: "Open for Internships, Hackathons & Junior Dev Opportunities",
  isAvailable: true,
  location: "Bengaluru, Karnataka, India",
  email: "tanisha.rakesh.singh@example.com",
  github: "https://github.com/Tanisha-Singh28?tab=repositories",
  linkedin: "https://linkedin.com/in/tanishasingh",
  twitter: "https://x.com/tanishasingh",
  resumeUrl: "#resume-modal",
  stats: [
    { label: "Projects Built", value: "15+" },
    { label: "Hackathons & Events", value: "6+" },
    { label: "GitHub Repositories", value: "20+" },
    { label: "Code Commits", value: "350+" },
  ],
};

export const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export const coreServices = [
  {
    icon: "Layout",
    title: "Frontend & Responsive UI",
    description: "Designing modern, mobile-first web pages using React, Tailwind CSS, and JavaScript. Focused on clean aesthetics, component modularity, and accessible layouts.",
    skills: ["React", "JavaScript (ES6+)", "Tailwind CSS", "HTML5/CSS3", "Framer Motion"],
  },
  {
    icon: "Server",
    title: "Backend & API Integrations",
    description: "Developing RESTful APIs with Node.js and Express, connecting databases, and integrating third-party APIs for real-time web applications.",
    skills: ["Node.js", "Express", "REST APIs", "MongoDB", "PostgreSQL"],
  },
  {
    icon: "Sparkles",
    title: "Hackathon & Rapid MVP Prototyping",
    description: "Turning concept ideas into functional, interactive working prototypes under tight hackathon sprint deadlines with collaborative team workflows.",
    skills: ["Rapid Prototyping", "Git / GitHub", "Team Collaboration", "UI Ergonomics"],
  },
  {
    icon: "Zap",
    title: "Performance & Modern Web Practices",
    description: "Structuring clean codebases, optimizing web asset loading, leveraging Vite for lightning-fast builds, and deploying to Vercel/Netlify.",
    skills: ["Vite", "Vercel", "Netlify", "Responsive Design", "Clean Code"],
  },
];

export const skillsData = {
  frontend: [
    { name: "React.js", level: 88, category: "Core" },
    { name: "JavaScript (ES6+)", level: 86, category: "Core" },
    { name: "Tailwind CSS", level: 92, category: "Styling" },
    { name: "HTML5 & CSS3", level: 94, category: "Basics" },
    { name: "Framer Motion", level: 80, category: "Animations" },
    { name: "Responsive Web Design", level: 90, category: "UI/UX" },
  ],
  backend: [
    { name: "Node.js & Express", level: 82, category: "Runtime" },
    { name: "RESTful APIs", level: 85, category: "APIs" },
    { name: "MongoDB & Mongoose", level: 80, category: "Database" },
    { name: "SQL / PostgreSQL Basics", level: 74, category: "Database" },
    { name: "JSON & JWT Authentication", level: 78, category: "Auth" },
  ],
  devops: [
    { name: "Git & GitHub", level: 88, category: "Version Control" },
    { name: "Vercel & Netlify Deployment", level: 90, category: "Hosting" },
    { name: "Postman API Testing", level: 84, category: "Testing" },
    { name: "Vite & npm Workflows", level: 88, category: "Build Tools" },
  ],
  tools: [
    { name: "VS Code & Extensions", level: 94, category: "Editor" },
    { name: "Figma to Code", level: 82, category: "Design" },
    { name: "Chrome DevTools", level: 86, category: "Debugging" },
    { name: "Markdown & Documentation", level: 90, category: "Docs" },
  ],
};

export const careerTimeline = [
  {
    period: "2024 — Present",
    role: "Hackathon Participant & Team Lead",
    company: "National & Collegiate Hackathons",
    location: "Bengaluru, India",
    description: "Active participant in collegiate hackathons, coding sprints, and project showcases. Collaborating with cross-disciplinary teams to conceptualize and deploy web apps within 24-36 hour sprints.",
    achievements: [
      "Built working MVP web applications under strict deadlines, handling frontend architecture and state management.",
      "Integrated external REST APIs (weather, social feeds, payment mockups) into seamless client interfaces.",
      "Presented live project demonstrations and pitched technical solutions to developer juries.",
    ],
    tech: ["React", "JavaScript", "Tailwind CSS", "Node.js", "Git", "REST APIs"],
  },
  {
    period: "2023 — Present",
    role: "Active Member & Web Contributor",
    company: "Google Developer Groups (GDG) on Campus",
    location: "Bengaluru, India",
    description: "Engaging in student developer workshops, open-source collaborative code jams, and tech community meetups across Bengaluru's tech ecosystem.",
    achievements: [
      "Contributed to student group project repositories and open-source starter templates.",
      "Assisted peers with modern React workflows, Git version control, and responsive styling techniques.",
    ],
    tech: ["React", "Tailwind CSS", "GitHub", "Community Tech"],
  },
  {
    period: "2022 — Present",
    role: "B.Tech in Computer Science & Engineering",
    company: "Engineering University",
    location: "Bengaluru, India",
    description: "Pursuing undergraduate degree in Computer Science. Building foundational strength in data structures, algorithms, databases, and full-stack web technologies.",
    achievements: [
      "Developed 15+ academic and personal web projects across semesters.",
      "Consistent focus on practical project development, frontend UI craft, and problem-solving.",
    ],
    tech: ["Data Structures", "Algorithms", "Web Technologies", "DBMS", "Java/C++"],
  },
];

export const projectsData = [
  {
    id: "dev-connect",
    title: "DevConnect Portfolio Hub",
    category: "Full-Stack",
    tagline: "Dynamic developer portfolio showcase with live GitHub repository sync",
    description: "A sleek, responsive developer link tree and portfolio hub that fetches real-time public repositories directly via the GitHub REST API, displays live star counts, and features smooth theme toggles.",
    featured: true,
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "Tailwind CSS", "GitHub REST API", "Framer Motion", "Vite"],
    metrics: "GitHub API Sync • 100% Mobile Responsive",
    githubUrl: "https://github.com/Tanisha-Singh28?tab=repositories",
    liveUrl: "https://github.com/Tanisha-Singh28?tab=repositories",
    challenge: "Handling GitHub API rate limits gracefully while ensuring fast client-side navigation.",
    solution: "Implemented client-side sessionStorage caching with debounced search and automatic fallback data.",
  },
  {
    id: "task-flow",
    title: "TaskFlow Kanban & Pomodoro",
    category: "Frontend / UI",
    tagline: "Productivity dashboard combining Kanban task boards with a focused Pomodoro timer",
    description: "An intuitive task management board built for students and developers. Features drag-and-drop task organization, priority tags, countdown Pomodoro timer with audio alerts, and persistent local storage.",
    featured: true,
    coverImage: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "Tailwind CSS", "LocalStorage API", "Audio API", "Framer Motion"],
    metrics: "Hackathon Top 5 Project • Zero-dependency Local Storage",
    githubUrl: "https://github.com/Tanisha-Singh28?tab=repositories",
    liveUrl: "https://github.com/Tanisha-Singh28?tab=repositories",
    challenge: "Keeping board state synchronized across multiple columns without unnecessary component re-renders.",
    solution: "Used custom React state hooks with localized updates and Framer Motion layout animations for smooth transitions.",
  },
  {
    id: "weather-sphere",
    title: "WeatherSphere Forecast App",
    category: "Frontend / UI",
    tagline: "Real-time weather forecast & atmospheric insights with geolocation support",
    description: "A clean weather application that queries the OpenWeatherMap API for live temperature, humidity, wind velocity, and 5-day forecasts. Features dynamic weather animations that adapt to conditions.",
    featured: true,
    coverImage: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "JavaScript", "OpenWeather API", "Tailwind CSS", "Geolocation"],
    metrics: "Auto Geolocation • 5-Day Visual Forecast",
    githubUrl: "https://github.com/Tanisha-Singh28?tab=repositories",
    liveUrl: "https://github.com/Tanisha-Singh28?tab=repositories",
    challenge: "Gracefully handling user geolocation permission denial while maintaining an instant search experience.",
    solution: "Built automatic fallback to default city coordinates and added quick-select search autocomplete.",
  },
  {
    id: "quick-cart",
    title: "QuickCart E-Commerce Store",
    category: "Full-Stack",
    tagline: "Minimalist online shop with category filters, dynamic cart drawer, and checkout",
    description: "A full-featured responsive online storefront mockup utilizing the FakeStore API. Includes multi-criteria search, real-time cart subtotal calculation, slide-over cart drawer, and simulated checkout flow.",
    featured: false,
    coverImage: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "Context API", "Tailwind CSS", "REST API", "Responsive UI"],
    metrics: "Full Cart State Management • 60fps Drawer Animation",
    githubUrl: "https://github.com/Tanisha-Singh28?tab=repositories",
    liveUrl: "https://github.com/Tanisha-Singh28?tab=repositories",
    challenge: "Managing cart state and quantity updates consistently across different pages and components.",
    solution: "Structured a global React Context provider with persistent storage and optimized re-renders.",
  },
];

export const workPhilosophy = [
  {
    number: "01",
    title: "Learn by Building Real Projects",
    description: "The quickest way to master new concepts is through hands-on implementation. Building and breaking code in real applications creates lasting understanding.",
  },
  {
    number: "02",
    title: "Hackathon Spirit & Rapid Iteration",
    description: "Working under constraints teaches prioritization, clean modular thinking, effective team communication, and delivering working software.",
  },
  {
    number: "03",
    title: "Attention to UI Details",
    description: "Even simple projects deserve thoughtful typography, clear spacing, accessible contrast, and smooth micro-interactions that make them pleasant to use.",
  },
  {
    number: "04",
    title: "Open Collaboration & Curiosity",
    description: "Actively engaging in developer communities like GDG, participating in open-source, and staying excited about modern web technologies.",
  },
];

export const faqs = [
  {
    q: "What types of opportunities are you looking for?",
    a: "I am actively seeking software engineering internships, junior frontend/full-stack developer roles, and hackathon project collaborations.",
  },
  {
    q: "Where are you located and what is your availability?",
    a: "I am based in Bengaluru, Karnataka, India (IST timezone / UTC+5:30). I am available for in-person roles in Bengaluru as well as remote opportunities worldwide.",
  },
  {
    q: "What technologies are you most comfortable working with?",
    a: "My primary tech stack is React.js, JavaScript (ES6+), Tailwind CSS, Node.js, Express, Git/GitHub, and REST APIs, along with responsive UI design.",
  },
  {
    q: "Are you open to hackathons and open-source projects?",
    a: "Yes, definitely! I love collaborating with enthusiastic teams to build exciting project ideas during 24-48 hour hackathon sprints.",
  },
];
