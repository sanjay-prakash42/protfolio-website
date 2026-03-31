import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-sans tracking-tight">About <span className="text-primary">Me</span></h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden glass p-2 max-w-md mx-auto"
            >
              <div className="aspect-[3/4] rounded-xl flex items-center justify-center relative overflow-hidden bg-white/5">
                 <img src="/profile.png" alt="J. Sanjay Prakash" className="object-cover w-full h-full hover:scale-105 transition-transform duration-500" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-8 text-lg text-foreground/70"
            >
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Career Objective</h3>
                <p className="mb-4">
                  I am a motivated <strong className="text-primary">3rd-year Electronics and Communication Engineering (ECE)</strong> student with a strong interest in embedded systems, microcontrollers, IoT, circuit design, and hardware-based mini projects.
                </p>
                <p className="mb-4">
                  Passionate about designing smart electronics systems, automation projects, and sharing knowledge through educational content. I am actively seeking opportunities to apply my technical skills in real-time projects, internships, and research work.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Education</h3>
                <div className="glass p-6 rounded-xl border-l-4 border-l-secondary hover:border-l-primary transition-colors">
                  <h4 className="text-xl font-bold text-foreground">B.E Electronics & Communication Engineering</h4>
                  <p className="text-primary font-medium text-sm mb-3">3rd Year Pursuing</p>
                  <p className="font-medium text-foreground/90">SACS MAVMM Engineering College</p>
                  <p className="text-sm text-foreground/60">(Anna University Affiliated College)</p>
                </div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
