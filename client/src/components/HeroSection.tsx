import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import cvPdf from "@assets/Nacer_fullstack_engineer_java_javascript_CV_English.pdf";

export default function HeroSection() {
  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <motion.div 
            className="mb-10 max-w-2xl"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-inter font-bold leading-tight mb-4 dark:text-white">
              Hi, I'm <span className="text-primary dark:text-blue-400">Mohamed Nacer</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-600 dark:text-gray-300 mb-6">
              <span className="relative">
                Full Stack Engineer
                <span className="absolute bottom-0 left-0 w-full h-1 bg-accent"></span>
              </span>
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 mx-auto">
              Double degree in Computer Engineering and Web & Mobile Engineering, passionate about web development, cloud technologies, and DevOps.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href="#contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  Contact Me
                </Button>
              </a>
              <a href="#projects">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-gray-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-gray-800">
                  View Projects
                </Button>
              </a>
              <a href={cvPdf} download>
                <Button size="lg" variant="secondary" className="flex items-center gap-2 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600">
                  <i className="fas fa-download"></i> Resume
                </Button>
              </a>
            </div>
            <div className="mt-8 flex gap-4 justify-center">
              <a 
                href="https://github.com/NacerRgr" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              >
                <i className="fab fa-github text-2xl"></i>
              </a>
              <a 
                href="https://www.linkedin.com/in/mohamed-nacer-er-ragragy/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              >
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a 
                href="mailto:abdoragragy1@gmail.com"
                className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              >
                <i className="fas fa-envelope text-2xl"></i>
              </a>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-10 flex justify-center">
          <motion.a 
            href="#about" 
            className="text-primary dark:text-blue-400 animate-bounce"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <i className="fas fa-chevron-down text-xl"></i>
          </motion.a>
        </div>
      </div>
    </section>
  );
}