import { Github, Heart, Instagram, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-black border-t border-border relative">
      <div className="container mx-auto px-6 py-12 relative">
        
     
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <span className="text-primary font-bold text-xl">
              <span className="text-2xl">A</span>nuja <span className="text-2xl">K</span>onde
            </span>
            <p className="text-sm text-foreground/70 mt-2">
              Full-Stack Developer & UI/UX Designer
            </p>
          </div>

          <div className="flex gap-4 mt-8 md:mt-0">
            <a
              href="https://github.com/anuja2430"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors duration-300"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/anujakondedeshmukh/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:anujkonde2430@gmail.com"
              className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors duration-300"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://www.instagram.com/amuznuz/"
              className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors duration-300"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-foreground/70">
          <p className="flex items-center justify-center gap-1">
            Designed with <Heart size={14} className="text-primary" /> by Anuja Konde Deshmukh © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
