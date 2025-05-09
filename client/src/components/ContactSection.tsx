import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-inter font-bold dark:text-white">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-2 mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!</p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="dark:bg-gray-700 dark:border-gray-600 overflow-hidden">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold font-inter dark:text-white">Contact Information</h3>
                    
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="bg-primary/10 dark:bg-primary/20 rounded-full p-3 mr-4">
                          <i className="fas fa-envelope text-primary dark:text-blue-400"></i>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-1">Email</h4>
                          <a href="mailto:abdoragragy1@gmail.com" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors">
                            abdoragragy1@gmail.com
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-primary/10 dark:bg-primary/20 rounded-full p-3 mr-4">
                          <i className="fas fa-phone text-primary dark:text-blue-400"></i>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-1">Phone</h4>
                          <a href="tel:+33771539995" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors">
                            +33 771 539 995
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-primary/10 dark:bg-primary/20 rounded-full p-3 mr-4">
                          <i className="fas fa-map-marker-alt text-primary dark:text-blue-400"></i>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-1">Location</h4>
                          <p className="text-gray-700 dark:text-gray-300">Le Mans, France</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold font-inter dark:text-white">Connect With Me</h3>
                    
                    <p className="text-gray-600 dark:text-gray-300">
                      I'm currently open to new opportunities and collaborations. Feel free to reach out through any of the channels below.
                    </p>
                    
                    <div className="mt-6">
                      <div className="space-y-4">
                        <a 
                          href="https://www.linkedin.com/in/mohamed-nacer-er-ragragy/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center p-4 bg-[#0077b5]/10 dark:bg-[#0077b5]/20 rounded-lg hover:bg-[#0077b5]/20 dark:hover:bg-[#0077b5]/30 transition-colors"
                        >
                          <i className="fab fa-linkedin text-2xl text-[#0077b5] mr-4"></i>
                          <div>
                            <h4 className="font-medium text-gray-900 dark:text-gray-100">LinkedIn</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Connect professionally</p>
                          </div>
                        </a>
                        
                        <a 
                          href="https://github.com/NacerRgr"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        >
                          <i className="fab fa-github text-2xl text-gray-800 dark:text-gray-200 mr-4"></i>
                          <div>
                            <h4 className="font-medium text-gray-900 dark:text-gray-100">GitHub</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Check out my projects</p>
                          </div>
                        </a>
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <Button 
                        className="w-full bg-primary hover:bg-primary/90 text-white"
                        onClick={() => window.open('mailto:abdoragragy1@gmail.com', '_blank')}
                      >
                        <i className="fas fa-paper-plane mr-2"></i> Send Email
                      </Button>
                    </div>
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
