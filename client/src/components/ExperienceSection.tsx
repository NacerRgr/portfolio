import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { experiences } from "@/lib/constants";

interface TimelineItemProps {
  year: string;
  position: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
  technologies: string[];
  isLeft: boolean;
  index: number;
}

function TimelineItem({ 
  year, 
  position, 
  company, 
  location, 
  period, 
  responsibilities, 
  technologies, 
  isLeft,
  index
}: TimelineItemProps) {
  return (
    <motion.div 
      className={`timeline-item mb-16 md:w-1/2 ${isLeft ? 'md:mr-auto md:pr-12 md:pl-0' : 'md:ml-auto md:pl-12 md:pr-0'} px-8 relative`}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div className={`absolute left-0 ${isLeft ? 'md:left-full' : 'md:left-auto md:right-full'} top-0 ${isLeft ? 'md:ml-8 ml-0' : 'md:mr-8 mr-0'} w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold z-10`}>
        {year}
      </div>
      
      <Card className={`ml-8 md:ml-0 shadow-md dark:bg-gray-700 dark:border-gray-600`}>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <h3 className="text-xl font-semibold font-inter dark:text-white">{position}</h3>
            <Badge variant="outline" className="bg-blue-100 text-blue-800 mt-2 md:mt-0 dark:bg-blue-900/30 dark:text-blue-200 dark:border-blue-700">Internship</Badge>
          </div>
          <div className="flex items-center mb-4">
            <i className="fas fa-building text-gray-400 dark:text-gray-300 mr-2"></i>
            <span className="text-gray-700 dark:text-gray-300">{company}, {location}</span>
          </div>
          <div className="flex items-center mb-4">
            <i className="fas fa-calendar text-gray-400 dark:text-gray-300 mr-2"></i>
            <span className="text-gray-700 dark:text-gray-300">{period}</span>
          </div>
          <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
            {responsibilities.map((responsibility, i) => (
              <li key={i}>{responsibility}</li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, i) => (
              <Badge key={i} variant="secondary" className="bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-200">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800 relative">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-inter font-bold dark:text-white">Professional Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-2 mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">My journey and professional experience in the tech industry</p>
        </motion.div>
        
        <div className="timeline-container relative">
          {experiences.map((exp, index) => (
            <TimelineItem 
              key={index}
              year={exp.year}
              position={exp.position}
              company={exp.company}
              location={exp.location}
              period={exp.period}
              responsibilities={exp.responsibilities}
              technologies={exp.technologies}
              isLeft={index % 2 !== 0}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
