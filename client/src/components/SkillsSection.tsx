import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { programmingSkills, webDevSkills, backendCloudSkills, devOpsSkills, designSkills, dataSkills } from "@/lib/constants";

interface SkillCardProps {
  title: string;
  icon: string;
  skills: Array<{ name: string; percentage: number }>;
  delay: number;
}

function SkillCard({ title, icon, skills, delay }: SkillCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center mr-4">
          <i className={`fas ${icon} text-xl text-primary dark:text-blue-400`}></i>
        </div>
        <h3 className="text-xl font-semibold font-inter dark:text-white">{title}</h3>
      </div>
      
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="font-medium dark:text-gray-200">{skill.name}</span>
              <span className="dark:text-gray-300">{skill.percentage}%</span>
            </div>
            <div className="progress-bar">
              <div 
                className="progress" 
                style={{ 
                  width: isInView ? `${skill.percentage}%` : "0%",
                  transitionDelay: `${index * 0.1}s`
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-inter font-bold dark:text-white">Technical Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-2 mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">A comprehensive overview of my technical expertise and capabilities</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCard title="Programming Languages" icon="fa-code" skills={programmingSkills} delay={0.1} />
          <SkillCard title="Web Development" icon="fa-laptop-code" skills={webDevSkills} delay={0.2} />
          <SkillCard title="Backend & Cloud" icon="fa-server" skills={backendCloudSkills} delay={0.3} />
          <SkillCard title="DevOps" icon="fa-cogs" skills={devOpsSkills} delay={0.4} />
          <SkillCard title="Design" icon="fa-paint-brush" skills={designSkills} delay={0.5} />
          <SkillCard title="Data Processing" icon="fa-database" skills={dataSkills} delay={0.6} />
        </div>
      </div>
    </section>
  );
}
