import React from 'react';
import { Github, Linkedin, Twitter, Terminal } from 'lucide-react';
import { Link } from 'react-scroll';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6">
          
          <div className="flex items-center space-x-2">
            <Terminal className="w-6 h-6 text-primary" />
            <span className="font-bold text-lg tracking-tight text-foreground">Sanjay Prakash</span>
          </div>

          <div className="flex space-x-6">
            <a href="#" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-primary/20 hover:text-primary transition-all text-foreground/70">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-primary/20 hover:text-primary transition-all text-foreground/70">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-primary/20 hover:text-primary transition-all text-foreground/70">
              <Twitter className="w-5 h-5" />
            </a>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/50">
          <p>&copy; {currentYear} J. Sanjay Prakash. All rights reserved.</p>
          
          <div className="flex gap-4">
            <Link to="home" smooth={true} duration={500} className="hover:text-primary cursor-pointer transition-colors">Home</Link>
            <Link to="about" smooth={true} duration={500} offset={-70} className="hover:text-primary cursor-pointer transition-colors">About</Link>
            <Link to="projects" smooth={true} duration={500} offset={-70} className="hover:text-primary cursor-pointer transition-colors">Projects</Link>
            <Link to="contact" smooth={true} duration={500} offset={-70} className="hover:text-primary cursor-pointer transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
