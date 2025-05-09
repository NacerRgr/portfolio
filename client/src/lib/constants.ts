// Navigation Links
export const navLinks = [
  { id: "home", text: "Home", href: "#home" },
  { id: "about", text: "About", href: "#about" },
  { id: "skills", text: "Skills", href: "#skills" },
  { id: "projects", text: "Projects", href: "#projects" },
  { id: "experience", text: "Experience", href: "#experience" },
  { id: "education", text: "Education", href: "#education" },
  { id: "contact", text: "Contact", href: "#contact" }
];

// Skills Data
export const programmingSkills = [
  { name: "Java", percentage: 90 },
  { name: "JavaScript", percentage: 85 },
  { name: "TypeScript", percentage: 80 },
  { name: "Python", percentage: 75 },
  { name: "C++", percentage: 70 }
];

export const webDevSkills = [
  { name: "React.js", percentage: 90 },
  { name: "Spring Boot", percentage: 85 },
  { name: "Angular", percentage: 75 },
  { name: "HTML/CSS", percentage: 95 },
  { name: "Tailwind CSS", percentage: 90 }
];

export const backendCloudSkills = [
  { name: "REST API", percentage: 95 },
  { name: "Docker", percentage: 85 },
  { name: "Jenkins", percentage: 80 },
  { name: "MySQL/PostgreSQL", percentage: 90 },
  { name: "MongoDB", percentage: 75 }
];

export const devOpsSkills = [
  { name: "CI/CD", percentage: 85 },
  { name: "Git/GitHub/GitLab", percentage: 90 },
  { name: "Ansible", percentage: 70 },
  { name: "Google Cloud", percentage: 75 },
  { name: "DigitalOcean", percentage: 80 }
];

export const designSkills = [
  { name: "Figma", percentage: 85 },
  { name: "UML", percentage: 90 },
  { name: "MERISE", percentage: 80 },
  { name: "UI/UX Design", percentage: 75 },
  { name: "Responsive Design", percentage: 90 }
];

export const dataSkills = [
  { name: "ETL", percentage: 80 },
  { name: "Talend", percentage: 75 },
  { name: "Pandas", percentage: 85 },
  { name: "NumPy", percentage: 80 },
  { name: "SQL", percentage: 90 }
];

// Projects Data
export const projects = [
  {
    title: "Sensor Visualization Web App",
    description: "Interactive interface with ReactJS featuring real-time visualization through dynamic charts, auto-refreshing tables, and complete REST API integration.",
    image: "M45.7,-77.2C58.9,-69.7,69.2,-56.6,76.8,-42.1C84.5,-27.7,89.6,-11.9,88.5,3.2C87.3,18.3,79.9,32.6,70.6,45.2C61.3,57.8,50.1,68.6,37,73.6C23.9,78.5,8.8,77.5,-4.7,74.1C-18.3,70.6,-30.4,64.7,-43.6,57.4C-56.7,50.1,-70.7,41.3,-78.9,28.2C-87.1,15.1,-89.5,-2.3,-84.1,-16.8C-78.7,-31.3,-65.4,-42.9,-51.6,-50.3C-37.8,-57.8,-23.4,-61.1,-8.5,-67.1C6.4,-73,20.6,-81.6,34.7,-80.5C48.8,-79.4,62.7,-68.6,71.3,-56.2Z",
    tags: ["ReactJS", "WebSocket", "REST API", "MQTT"],
    github: "https://github.com/NacerRgr",
    details: "#"
  },
  {
    title: "Telegram Weather Bot",
    description: "A Telegram chatbot that integrates weather data provision and random joke generation based on user requests with real-time polling.",
    image: "M39.2,-62.1C51.6,-56.2,63.1,-46,71.4,-32.9C79.7,-19.9,84.9,-3.9,82.4,11.1C79.9,26.2,69.8,40.3,57,49.8C44.2,59.3,28.6,64.3,13.1,67.9C-2.4,71.5,-17.7,73.7,-32.4,70C-47,66.3,-61,56.6,-70.2,43.2C-79.3,29.8,-83.5,12.6,-81.3,-3.5C-79.1,-19.6,-70.5,-34.6,-59.3,-44.8C-48.1,-55.1,-34.3,-60.5,-21.2,-65.8C-8.1,-71,-0.4,-76.2,7.6,-73.2C15.6,-70.3,26.8,-67.9,39.2,-62.1Z",
    tags: ["Java", "Spring Boot", "REST API", "Telegram API"],
    github: "https://github.com/NacerRgr",
    details: "#"
  },
  {
    title: "BRICOLIYA Marketplace",
    description: "A service marketplace web application connecting professionals and clients to facilitate interactions and service exchanges.",
    image: "M44.3,-73.6C58.3,-67.6,71.3,-57.2,78.9,-43.3C86.5,-29.4,88.8,-12.2,86.7,4.1C84.6,20.5,78,35.9,68.2,48.8C58.3,61.7,45.1,72.1,30.5,77.4C15.8,82.6,-0.4,82.8,-15.9,78.9C-31.5,75,-46.4,67.1,-58.9,55.5C-71.3,44,-81.3,28.9,-85.4,12.2C-89.4,-4.5,-87.4,-22.7,-79.2,-37.3C-71,-51.8,-56.5,-62.5,-41.5,-68.2C-26.5,-73.9,-11,-74.5,2.6,-78.9C16.1,-83.3,30.2,-79.6,44.3,-73.6Z",
    tags: ["Java EE", "MySQL", "Design Patterns", "JSP/JSTL"],
    github: "https://github.com/NacerRgr",
    details: "#"
  },
  {
    title: "Jenkins Integration Platform",
    description: "Web application with Jenkins integration for on-demand compilation and testing, featuring real-time job tracking and user group management.",
    image: "M47.7,-80.1C62.3,-73.1,75.2,-61.4,83.9,-46.5C92.5,-31.7,96.9,-13.5,93.6,2.7C90.3,18.9,79.3,33.1,67.9,46.1C56.5,59.1,44.7,71,30.4,77.6C16.1,84.2,-0.7,85.5,-17.2,82.6C-33.8,79.7,-50.2,72.7,-62.9,61.1C-75.5,49.4,-84.5,33.1,-88.5,15.3C-92.6,-2.5,-91.7,-21.7,-84.2,-37.2C-76.6,-52.7,-62.3,-64.4,-46.9,-71C-31.5,-77.6,-15.7,-79.1,0.6,-80.1C16.9,-81.1,33.1,-87.1,47.7,-80.1Z",
    tags: ["ReactJS", "Spring Boot", "Jenkins", "Docker", "Redis"],
    private: true,
    details: "#"
  }
];

// Experience Data
export const experiences = [
  {
    year: "2025",
    position: "Full Stack Engineer",
    company: "STMicroelectronics",
    location: "Le Mans, France",
    period: "March 2025 - September 2025",
    responsibilities: [
      "Designed a web application integrated with Jenkins to manage on-demand compilation and testing, with real-time job tracking",
      "Developed a REST API for dynamic configurations and job history by user groups, stored in MySQL",
      "Implemented a user group management system with shared configurations and caching mechanism to enhance performance",
      "Improved UX/UI with ReactJS and Tailwind CSS for an ergonomic interface and user action tracking for traceability",
      "Set up a CI/CD pipeline (Jenkins) automating build, testing, and deployment of a Docker image on a Linux virtual machine"
    ],
    technologies: [
      "Java", "Javascript", "ReactJS", "Spring Boot", "Jenkins", "TailwindCSS", "MySQL", "Docker", "REST API", "Redis"
    ]
  },
  {
    year: "2022",
    position: "Data Analyst",
    company: "Moroccan Foreign Exchange Office",
    location: "Rabat, Morocco",
    period: "August 2022 - September 2022",
    responsibilities: [
      "Analyzed the data lifecycle at the Foreign Exchange Office",
      "Modeled and forecasted financial transactions of Moroccans abroad for the upcoming year"
    ],
    technologies: [
      "Python", "Pandas", "NumPy", "Statsmodels"
    ]
  },
  {
    year: "2021",
    position: "Backend Developer",
    company: "NVIT Solutions",
    location: "Remote",
    period: "July 2021 - August 2021",
    responsibilities: [
      "Integrated an external API for URL shortening",
      "Developed a RESTful API to manage user interactions and communication with the external API",
      "Designed and implemented a relational database"
    ],
    technologies: [
      "Java", "Spring Boot", "REST API", "MySQL"
    ]
  }
];

// Education Data
export const education = [
  {
    title: "Master's Degree in Computer Engineering",
    institution: "National School of Engineers of Le Mans (ENSIM)",
    location: "Le Mans, France",
    period: "2023 - 2025",
    description: "Advanced studies in computer engineering with a focus on software development, cloud technologies, and IT infrastructure."
  },
  {
    title: "State Engineering Degree in Web and Mobile Engineering",
    institution: "National School of Computer Science and Systems Analysis (ENSIAS)",
    location: "Rabat, Morocco",
    period: "2021 - 2023",
    description: "Specialized in web and mobile application development with a strong emphasis on modern frameworks and best practices."
  },
  {
    title: "Bachelor's Degree in Mathematics and Computer Science",
    institution: "Faculty of Sciences of Tetouan",
    location: "Tetouan, Morocco",
    period: "2018 - 2021",
    description: "Foundation in mathematics and computer science principles, algorithms, data structures, and programming fundamentals."
  }
];

// Languages
export const languages = [
  { language: "French", level: "Bilingual" },
  { language: "English", level: "B2-C1 (TOEIC 835)" },
  { language: "Arabic", level: "Native" }
];

// Soft Skills
export const softSkills = [
  { name: "Problem Solving", color: "bg-blue-100 text-blue-800" },
  { name: "Adaptability", color: "bg-green-100 text-green-800" },
  { name: "Communication", color: "bg-purple-100 text-purple-800" },
  { name: "Teamwork", color: "bg-yellow-100 text-yellow-800" },
  { name: "Critical Thinking", color: "bg-red-100 text-red-800" },
  { name: "Time Management", color: "bg-indigo-100 text-indigo-800" }
];
