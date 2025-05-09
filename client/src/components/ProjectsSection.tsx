import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/constants";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  details?: string;
  private?: boolean;
  index: number;
}

function ProjectCard({ title, description, image, tags, github, details, private: isPrivate, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
    >
      <div className="h-48 overflow-hidden">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 800 400"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full object-cover object-center"
        >
          <rect width="800" height="400" fill="#f8fafc" className="dark:fill-gray-700" />
          <path
            d={image}
            fill="#2563eb22"
            className="dark:fill-blue-500/20"
            transform="translate(400, 200)"
          />
          <path
            d={image}
            fill="#2563eb44"
            className="dark:fill-blue-500/30"
            transform="translate(400, 200) scale(0.8)"
          />
        </svg>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 font-inter dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <Badge key={i} variant="outline" className="bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-200 dark:border-blue-700 dark:hover:bg-blue-800/40">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center">
          {details && (
            <a href={details} className="text-primary hover:text-primary/80 dark:text-blue-400 dark:hover:text-blue-300 font-medium inline-flex items-center">
              <span>View Details</span>
              <i className="fas fa-arrow-right ml-1 text-sm"></i>
            </a>
          )}
          {github ? (
            <a href={github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
              <i className="fab fa-github text-xl"></i>
            </a>
          ) : (
            <span className="text-gray-400 dark:text-gray-500 text-sm">{isPrivate ? "Private Repository" : ""}</span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-inter font-bold dark:text-white">Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-2 mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">Explore some of my recent work and personal projects</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              github={project.github}
              details={project.details}
              private={project.private}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
