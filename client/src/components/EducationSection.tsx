import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { education, softSkills, languages } from "@/lib/constants";

interface EducationCardProps {
  title: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  index: number;
}

function EducationCard({ title, institution, location, period, description, index }: EducationCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
    >
      <div className="h-32 bg-gradient">
        <div className="h-full flex items-center justify-center">
          <h3 className="text-xl md:text-2xl text-white font-bold font-inter px-6 text-center">{title}</h3>
        </div>
      </div>
      <div className="p-6">
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <i className="fas fa-university text-gray-500 mr-2"></i>
            <span className="text-gray-800 font-medium">{institution}</span>
          </div>
          <div className="flex items-center mb-2">
            <i className="fas fa-map-marker-alt text-gray-500 mr-2"></i>
            <span className="text-gray-700">{location}</span>
          </div>
          <div className="flex items-center">
            <i className="fas fa-calendar-alt text-gray-500 mr-2"></i>
            <span className="text-gray-700">{period}</span>
          </div>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
}

export default function EducationSection() {
  return (
    <section id="education" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-inter font-bold dark:text-white">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-2 mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">My academic background and qualifications</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <EducationCard 
              key={index}
              title={edu.title}
              institution={edu.institution}
              location={edu.location}
              period={edu.period}
              description={edu.description}
              index={index}
            />
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md"
        >
          <h3 className="text-xl font-semibold mb-4 font-inter dark:text-white">Certifications & Languages</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-medium mb-3 font-inter dark:text-gray-200">Languages</h4>
              <ul className="space-y-2">
                {languages.map((lang, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-24 font-medium text-gray-700 dark:text-gray-300">{lang.language}:</span>
                    <span className="dark:text-gray-300">{lang.level}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-3 font-inter dark:text-gray-200">Soft Skills</h4>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill, index) => (
                  <Badge key={index} className={`${skill.color} dark:bg-opacity-20 dark:text-opacity-90`}>
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
