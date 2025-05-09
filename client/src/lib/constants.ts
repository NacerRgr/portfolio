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
  { name: "C++", percentage: 70 },
  { name: "C", percentage: 70 }
];

export const webDevSkills = [
  { name: "React.js", percentage: 90 },
  { name: "Spring Boot", percentage: 85 },
  { name: "Angular", percentage: 75 },
  { name: "HTML", percentage: 95 },
  { name: "CSS", percentage: 95 },
  { name: "Java EE", percentage: 85 },
  { name: "Bootstrap", percentage: 90 }
];

export const backendCloudSkills = [
  { name: "REST API", percentage: 95 },
  { name: "Docker", percentage: 85 },
  { name: "Jenkins", percentage: 80 },
  { name: "MySQL", percentage: 90 },
  { name: "PostgreSQL", percentage: 90 },
  { name: "Oracle", percentage: 80 },
  { name: "Google Cloud", percentage: 75 },
  { name: "DigitalOcean", percentage: 80 }
];

export const devOpsSkills = [
  { name: "CI/CD", percentage: 85 },
  { name: "Git", percentage: 90 },
  { name: "GitHub", percentage: 90 },
  { name: "GitLab", percentage: 90 },
  { name: "JUnit", percentage: 85 },
  { name: "Docker", percentage: 85 }
];

export const designSkills = [
  { name: "Figma", percentage: 85 },
  { name: "UML", percentage: 90 },
  { name: "MERISE", percentage: 80 },
  { name: "UI/UX Design", percentage: 75 },
  { name: "Responsive Design", percentage: 90 }
];

export const dataSkills = [
  { name: "ETL/ELT", percentage: 80 },
  { name: "dbt (Data Build Tool)", percentage: 85 },
  { name: "Airbyte", percentage: 85 },
  { name: "Pandas", percentage: 85 },
  { name: "NumPy", percentage: 80 },
  { name: "SQL", percentage: 90 }
];

// Projects Data
export const projects = [
  // Software Engineering Projects
  {
    title: "Ecommerce Website 'Ez Buy'",
    description: "Developed a fully functional perfume e-commerce website with complete product management, user authentication, and checkout functionality.",
    tags: ["ReactJS", "Spring Boot", "Spring Security", "PostgreSQL", "JPA", "Git"],
    github: "https://github.com/NacerRgr",
    details: "#",
    category: "software"
  },
  {
    title: "BRICOLIYA Service Marketplace",
    description: "A service marketplace web application connecting professionals and clients to facilitate interactions and service exchanges.",
    tags: ["Java EE", "MySQL", "Design Patterns", "JSP/JSTL"],
    github: "https://github.com/NacerRgr",
    details: "#",
    category: "software"
  },
  {
    title: "Sensor Visualization Web App",
    description: "Interactive interface with ReactJS featuring real-time visualization through dynamic charts, auto-refreshing tables, and complete REST API integration.",
    tags: ["ReactJS", "WebSocket", "REST API", "MQTT"],
    github: "https://github.com/NacerRgr",
    details: "#",
    category: "software"
  },
  {
    title: "Telegram Weather Bot",
    description: "A Telegram chatbot that integrates weather data provision and random joke generation based on user requests with real-time polling.",
    tags: ["Java", "Spring Boot", "REST API", "Telegram API"],
    github: "https://github.com/NacerRgr",
    details: "#",
    category: "software"
  },
  
  // Data Engineering Project
  {
    title: "Data Lakehouse for Medical Data Marts",
    description: "Designed and developed a data lakehouse integrating medical data from various sources, implementing an ELT process with Airbyte and dbt on DigitalOcean.",
    tags: ["SQL", "DBT", "Airbyte", "Docker", "PostgreSQL", "DigitalOcean", "Git", "GitLab"],
    github: "https://github.com/NacerRgr",
    details: "#",
    category: "data"
  },
  
  // IoT Project
  {
    title: "Smart Home Prototype",
    description: "Developed an IoT-based smart home prototype controlled remotely via a mobile app, using Arduino for sensors and Raspberry Pi for data transmission.",
    tags: ["IoT", "Arduino", "Raspberry Pi", "Python", "C++", "Firebase"],
    github: "https://github.com/NacerRgr",
    details: "#",
    category: "iot"
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
