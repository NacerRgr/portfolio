import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useContactForm } from "@/hooks/useContactForm";

export default function ContactSection() {
  const { formData, errors, handleChange, handleSubmit, isSubmitting } = useContactForm();

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-inter font-bold">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-2 mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!</p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row gap-8">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      className={`focus-visible:ring-primary ${errors.name ? 'border-red-500' : ''}`}
                      required
                    />
                    {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      className={`focus-visible:ring-primary ${errors.email ? 'border-red-500' : ''}`}
                      required
                    />
                    {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input 
                      id="subject" 
                      name="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      className={`focus-visible:ring-primary ${errors.subject ? 'border-red-500' : ''}`}
                      required
                    />
                    {errors.subject && <p className="text-sm text-red-500">{errors.subject}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      rows={5} 
                      value={formData.message}
                      onChange={handleChange}
                      className={`focus-visible:ring-primary ${errors.message ? 'border-red-500' : ''}`}
                      required
                    />
                    {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="h-full">
              <CardContent className="p-8 h-full flex flex-col">
                <h3 className="text-2xl font-semibold mb-6 font-inter">Contact Information</h3>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="bg-primary/10 rounded-full p-3 mr-4">
                      <i className="fas fa-envelope text-primary"></i>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Email</h4>
                      <a href="mailto:abdoragragy1@gmail.com" className="text-gray-700 hover:text-primary transition-colors">
                        abdoragragy1@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 rounded-full p-3 mr-4">
                      <i className="fas fa-phone text-primary"></i>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Phone</h4>
                      <a href="tel:+33771539995" className="text-gray-700 hover:text-primary transition-colors">
                        +33 771 539 995
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 rounded-full p-3 mr-4">
                      <i className="fas fa-map-marker-alt text-primary"></i>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Location</h4>
                      <p className="text-gray-700">Le Mans, France</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 rounded-full p-3 mr-4">
                      <i className="fas fa-globe text-primary"></i>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Social</h4>
                      <div className="flex gap-4 mt-2">
                        <a 
                          href="https://github.com/NacerRgr" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-primary transition-colors"
                        >
                          <i className="fab fa-github text-xl"></i>
                        </a>
                        <a 
                          href="https://www.linkedin.com/in/mohamed-nacer-er-ragragy/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-primary transition-colors"
                        >
                          <i className="fab fa-linkedin text-xl"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-auto rounded-lg overflow-hidden">
                  <svg
                    width="100%"
                    height="200"
                    viewBox="0 0 800 400"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="800" height="400" fill="#f1f5f9" />
                    <circle cx="400" cy="200" r="150" fill="#e2e8f0" />
                    <path
                      d="M300,150 Q400,50 500,150 T700,150 Q650,250 700,350 Q550,375 400,350 Q250,375 100,350 Q150,250 100,150 Q200,50 300,150"
                      fill="#2563eb11"
                      stroke="#2563eb22"
                      strokeWidth="2"
                    />
                    <path
                      d="M300,200 Q400,100 500,200 T700,200 Q650,300 700,400 Q550,425 400,400 Q250,425 100,400 Q150,300 100,200 Q200,100 300,200"
                      fill="#2563eb22"
                      stroke="#2563eb33"
                      strokeWidth="2"
                    />
                    <g transform="translate(400, 200)">
                      <rect x="-40" y="-50" width="80" height="100" rx="5" fill="white" stroke="#e2e8f0" strokeWidth="2" />
                      <rect x="-30" y="-40" width="60" height="10" rx="2" fill="#2563eb33" />
                      <rect x="-30" y="-25" width="60" height="10" rx="2" fill="#2563eb22" />
                      <rect x="-30" y="-10" width="40" height="10" rx="2" fill="#2563eb11" />
                      <circle cx="-20" cy="25" r="10" fill="#2563eb44" />
                      <circle cx="0" cy="25" r="10" fill="#2563eb33" />
                      <circle cx="20" cy="25" r="10" fill="#2563eb22" />
                    </g>
                  </svg>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
