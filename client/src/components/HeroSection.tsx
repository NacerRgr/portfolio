import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import cvPdf from "@assets/Nacer_fullstack_engineer_java_javascript_CV_English.pdf";

export default function HeroSection() {
  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
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
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-lg">
              Double degree in Computer Engineering and Web & Mobile Engineering, passionate about web development, cloud technologies, and DevOps.
            </p>
            <div className="flex flex-wrap gap-3">
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
            <div className="mt-8 flex gap-4">
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
          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-primary/10 dark:bg-blue-500/20 border-8 border-white dark:border-gray-700 shadow-xl">
              <svg 
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full object-cover"
              >
                <path
                  fill="#2563EB"
                  className="dark:fill-blue-500"
                  d="M45.7,-77.2C58.9,-69.7,69.2,-56.6,76.8,-42.1C84.5,-27.7,89.6,-11.9,88.5,3.2C87.3,18.3,79.9,32.6,70.6,45.2C61.3,57.8,50.1,68.6,37,73.6C23.9,78.5,8.8,77.5,-4.7,74.1C-18.3,70.6,-30.4,64.7,-43.6,57.4C-56.7,50.1,-70.7,41.3,-78.9,28.2C-87.1,15.1,-89.5,-2.3,-84.1,-16.8C-78.7,-31.3,-65.4,-42.9,-51.6,-50.3C-37.8,-57.8,-23.4,-61.1,-8.5,-67.1C6.4,-73,20.6,-81.6,34.7,-80.5C48.8,-79.4,62.7,-68.6,71.3,-56.2C79.8,-43.8,83,-29.9,86.7,-15.2C90.4,-0.5,94.8,13.9,89.4,23.6C84,33.2,68.8,38.1,56.6,45.2C44.4,52.4,35.1,61.9,23.5,66.5C11.9,71.1,-2,70.7,-14.2,66.8C-26.5,62.9,-37.2,55.6,-47.2,47.1C-57.2,38.7,-66.5,29.2,-71.5,17.1C-76.5,5,-77.2,-9.8,-71.9,-21.9C-66.6,-33.9,-55.3,-43.2,-43.1,-50.2C-30.9,-57.2,-17.8,-61.9,-3.1,-64.8C11.6,-67.7,26.7,-68.8,37.5,-65.7C48.2,-62.6,54.7,-55.3,64.9,-46.9C75,-38.5,88.9,-28.9,90.8,-17.3C92.7,-5.7,82.5,8,75.6,21.5C68.7,35,65.2,48.3,56.6,56.2C47.9,64.2,34.1,66.9,21.4,69.2C8.7,71.5,-2.9,73.5,-14.7,72C-26.5,70.5,-38.5,65.6,-48.5,57.7C-58.4,49.9,-66.2,39.2,-71.1,27.1C-76,14.9,-77.9,1.4,-76.4,-13C-74.8,-27.5,-69.9,-42.9,-60.6,-53.9C-51.4,-64.8,-37.9,-71.4,-23.8,-75.2C-9.7,-79,-4.9,-80.1,4,-84.3C12.9,-88.6,25.8,-96,35.2,-92.7C44.6,-89.4,50.5,-75.6,61.5,-65.3C72.5,-55,88.7,-48.2,95.8,-37C102.9,-25.7,101,-10,97.1,4.2C93.2,18.4,87.3,31.2,78.5,41.5C69.7,51.8,58.1,59.7,45.8,66.4C33.6,73.1,20.8,78.7,6.1,82.7C-8.6,86.7,-25.2,89.2,-37.9,83.4C-50.5,77.7,-59.2,63.7,-67.7,49.8C-76.1,35.9,-84.3,22,-85.6,7.2C-86.9,-7.6,-81.2,-23.3,-72.7,-36.1C-64.3,-48.9,-53,-58.8,-40.2,-64.9C-27.4,-71.1,-13.7,-73.5,0.2,-74C14.1,-74.4,28.2,-72.8,39.4,-66.8C50.6,-60.8,58.9,-50.4,67.7,-39.4C76.5,-28.3,85.8,-16.7,90,-3C94.2,10.7,93.2,26.5,87.7,40.8C82.3,55.1,72.4,68.1,59.8,75.9C47.2,83.8,31.9,86.7,16.8,87.2C1.7,87.8,-13.2,86,-27.2,81.1C-41.2,76.2,-54.4,68.2,-63.7,57C-73.1,45.8,-78.6,31.5,-83.2,16.5C-87.8,1.5,-91.6,-14.3,-86.8,-26.2C-82.1,-38.1,-68.9,-46.2,-56.2,-55.2C-43.5,-64.1,-31.2,-74,0.7,-75C6.1,-74,11.5,-67,19.7,-64C27.9,-61,38.9,-62.1,47.9,-59.3C56.8,-56.5,63.7,-49.8,70.3,-41.8C76.9,-33.9,83.2,-24.7,84.9,-14.8C86.5,-4.9,83.7,5.7,79.6,15.6C75.5,25.4,70.3,34.6,63.2,42.1C56.1,49.7,47.2,55.5,37.4,59.7C27.6,63.9,16.8,66.5,5.1,69C-6.6,71.5,-19.3,74,-30.7,71.6C-42.1,69.2,-52.3,62,-62.2,53.2C-72.1,44.4,-81.6,34.1,-87.6,21.6C-93.6,9.1,-96,-5.4,-92.6,-18.6C-89.2,-31.8,-80,-43.6,-68.9,-54.3C-57.9,-65,-45,-74.6,-30.8,-78.7C-16.6,-82.8,-1,-81.3,13.2,-77.9C27.5,-74.5,40.5,-69.1,50.8,-61C61.1,-52.9,68.8,-42.1,74.4,-30.3C80,-18.5,83.6,-5.7,83.8,7.2C84.1,20.1,81.1,33,74.5,43.7C67.9,54.3,57.8,62.6,46.3,69.4C34.9,76.2,22.2,81.5,8.6,84.3C-5,87.2,-19.4,87.7,-32.8,83.8C-46.2,79.9,-58.6,71.5,-67.4,60.2C-76.2,48.9,-81.5,34.7,-84.9,20C-88.3,5.3,-89.9,-10,-86.5,-24.1C-83.1,-38.2,-74.7,-51.1,-63.3,-59.2C-51.9,-67.4,-37.5,-70.8,-23.3,-73.5C-9.1,-76.2,4.8,-78.1,18.1,-78.8"
                  transform="translate(100 100)"
                />
              </svg>
            </div>
          </motion.div>
        </div>
        <div className="mt-16 flex justify-center">
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
