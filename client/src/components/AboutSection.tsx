import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-inter font-bold dark:text-white">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-2 mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">Get to know more about my background and what drives me</p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4 font-inter dark:text-white text-center">Who am I?</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I'm a full stack engineer with a dual degree in Computer Engineering and Web & Mobile Engineering. My expertise spans across frontend and backend technologies, with a strong focus on Java, JavaScript, and cloud solutions.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              My journey in tech has been driven by a passion for creating efficient, scalable applications and solving complex problems. I enjoy working with modern frameworks and staying updated with the latest industry trends.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I'm currently seeking my first employment opportunity starting September 2025, where I can contribute my skills in web development, cloud technologies, and DevOps.
            </p>
            
            <Card className="border border-gray-200 dark:border-gray-700 dark:bg-gray-800 mt-8">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-gray-100">Name:</p>
                    <p className="text-gray-700 dark:text-gray-300">Mohamed Nacer Er-ragragy</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-gray-100">Email:</p>
                    <p className="text-gray-700 dark:text-gray-300">abdoragragy1@gmail.com</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-gray-100">Phone:</p>
                    <p className="text-gray-700 dark:text-gray-300">+33 771 539 995</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-gray-100">Languages:</p>
                    <p className="text-gray-700 dark:text-gray-300">French (Bilingual), English (B2-C1), Arabic (Native)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}