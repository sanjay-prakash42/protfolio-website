import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const skillsData = [
  {
    category: "Programming",
    items: ["Embedded C", "C++"]
  },
  {
    category: "IoT & Microcontrollers",
    items: ["IoT using ESP32", "IoT using ESP8266", "Microcontroller Interfacing"]
  },
  {
    category: "Simulation & Design",
    items: ["Proteus", "Wokwi", "Circuit Design"]
  },
  {
    category: "Practical Skills",
    items: ["Circuit Troubleshooting", "Hardware Debugging", "Hardware Integration"]
  }
];

const certificationsData = [
  "IoT and Industrial IoT Project",
  "PCB Design Workshop",
  "Drone Workshop",
  "Circuit Debugging"
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-foreground/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Skills Section */}
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-sans tracking-tight">My <span className="text-secondary">Skills</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-primary rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {skillsData.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300"
            >
              <h3 className="text-xl font-bold mb-6 text-foreground">{skillGroup.category}</h3>
              <ul className="space-y-3">
                {skillGroup.items.map((skill, idx) => (
                  <li key={idx} className="flex items-center text-foreground/70">
                    <div className="w-2 h-2 rounded-full bg-primary mr-3" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Certifications & Learning Section */}
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-sans tracking-tight text-center">Certifications & <span className="text-primary">Learning</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass p-5 rounded-xl flex items-center gap-4 hover:border-primary/40 transition-colors"
            >
              <div className="p-3 bg-primary/10 text-primary rounded-full">
                <Award className="w-6 h-6" />
              </div>
              <span className="text-lg font-medium text-foreground/80">{cert}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
