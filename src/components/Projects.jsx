import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "IoT Based Industrial Monitoring System",
    description: "Real-time industrial parameter monitoring using IoT. Features sensor data analytics and cloud integration for remote tracking.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    techStack: ["ESP32", "IoT Cloud", "C++", "Sensors"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 2,
    title: "Solar Panel Power System Design",
    description: "Design and monitoring of a solar power energy system integrating sensors to calculate efficiency and power metrics.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800",
    techStack: ["Embedded C", "Proteus", "Power Electronics"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 3,
    title: "Fire Fighting Robot",
    description: "An autonomous robotics system equipped with flame detection sensors and an automated extinguisher mechanism.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
    techStack: ["Arduino", "C++", "Motor Drivers", "Sensors"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 4,
    title: "Arduino Based Home Automation",
    description: "Smart home automation system allowing users to remotely control lighting and appliances using a centralized dashboard.",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=800",
    techStack: ["Arduino", "ESP8266", "Relays", "IoT Data"],
    liveLink: "#",
    githubLink: "#",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-sans tracking-tight">Featured <span className="text-primary">Projects</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl overflow-hidden group hover:border-primary/50 transition-colors duration-300 flex flex-col h-full"
            >
              {/* Project Image Container */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-300 z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Project Info */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-foreground/70 mb-6 text-sm flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
                    <Github className="w-4 h-4" /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
