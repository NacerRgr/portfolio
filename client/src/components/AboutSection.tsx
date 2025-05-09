import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-inter font-bold">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-2 mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">Get to know more about my background and what drives me</p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="rounded-lg overflow-hidden shadow-lg">
              <svg
                width="100%"
                height="300"
                viewBox="0 0 800 600"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="800" height="600" fill="#f8fafc" />
                <path
                  d="M-100,200 C100,300 300,50 500,200 S700,300 900,200 V600 H-100 Z"
                  fill="#2563eb22"
                />
                <path
                  d="M-100,250 C100,350 300,100 500,250 S700,350 900,250 V600 H-100 Z"
                  fill="#2563eb33"
                />
                <path
                  d="M-100,300 C100,400 300,150 500,300 S700,400 900,300 V600 H-100 Z"
                  fill="#2563eb44"
                />
                <g transform="translate(400, 250)">
                  <rect x="-150" y="-10" width="300" height="200" rx="10" fill="#fff" stroke="#e2e8f0" strokeWidth="2" />
                  <rect x="-130" y="20" width="260" height="120" rx="5" fill="#f1f5f9" />
                  <rect x="-110" y="160" width="220" height="15" rx="3" fill="#e2e8f0" />
                  <circle cx="-160" cy="-25" r="7" fill="#2563eb" />
                  <circle cx="-140" cy="-25" r="7" fill="#f59e0b" />
                  <circle cx="-120" cy="-25" r="7" fill="#10b981" />
                  <rect x="-110" y="40" width="80" height="10" rx="2" fill="#2563eb55" />
                  <rect x="-110" y="60" width="120" height="10" rx="2" fill="#2563eb44" />
                  <rect x="-110" y="80" width="100" height="10" rx="2" fill="#2563eb33" />
                  <rect x="-110" y="100" width="90" height="10" rx="2" fill="#2563eb22" />
                  <rect x="-110" y="120" width="130" height="10" rx="2" fill="#2563eb11" />
                </g>
              </svg>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-4 font-inter">Who am I?</h3>
            <p className="text-gray-700 mb-4">
              I'm a full stack engineer with a dual degree in Computer Engineering and Web & Mobile Engineering. My expertise spans across frontend and backend technologies, with a strong focus on Java, JavaScript, and cloud solutions.
            </p>
            <p className="text-gray-700 mb-4">
              My journey in tech has been driven by a passion for creating efficient, scalable applications and solving complex problems. I enjoy working with modern frameworks and staying updated with the latest industry trends.
            </p>
            <p className="text-gray-700 mb-6">
              I'm currently seeking my first employment opportunity starting September 2025, where I can contribute my skills in web development, cloud technologies, and DevOps.
            </p>
            
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium text-gray-900">Name:</p>
                    <p className="text-gray-700">Mohamed Nacer Er-ragragy</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email:</p>
                    <p className="text-gray-700">abdoragragy1@gmail.com</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Phone:</p>
                    <p className="text-gray-700">+33 771 539 995</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Languages:</p>
                    <p className="text-gray-700">French (Bilingual), English (B2-C1), Arabic (Native)</p>
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
