import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ExternalLink, Github, Code } from "lucide-react";

interface ProjectItemProps {
  title: string;
  description: string;
  tags: string[];
  demoLink?: string;
  githubLink?: string;
  delay?: number;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ 
  title, 
  description, 
  tags, 
  demoLink, 
  githubLink, 
  delay = 0 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5 }}
      className="glass-card p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-border"
    >
      <div className="flex items-center gap-2 mb-2 text-primary/80">
        <Code size={16} />
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-foreground/70">{description}</p>
      <div className="flex flex-wrap gap-2 mt-2">
        {tags.map((tag, index) => (
          <span key={index} className="text-xs px-2 py-1 bg-secondary rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-4 mt-3">
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary flex items-center gap-1 hover:underline"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
        )}
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/70 flex items-center gap-1 hover:underline"
          >
            <Github size={16} />
            GitHub
          </a>
        )}
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: "Travel Website",
      description: "Interactive travel website featuring destination exploration, booking functionality, and user reviews.",
      tags: ["HTML", "CSS", "JavaScript", "UI/UX Design", "AI & ML"],
      demoLink: "https://triphubbyanuja.vercel.app",
      githubLink: "https://github.com/anuja2430/Trip-hub",
    },
    {
      title: "Thrift Store UI/UX Design",
      description: "Complete UI/UX design for a thrift store application with user-friendly navigation and secure checkout.",
      tags: ["Figma", "Adobe XD", "UI/UX Design"],
      demoLink: "https://www.figma.com/proto/fvQIE2uzE9VVqymmu3rpXF/Fashion-E-commerce-Website",
    },
    {
      title: "AI-Based Fashion Application",
      description: "Fashion recommendation application using AI to suggest outfits based on user preferences and style.",
      tags: ["UI/UX", "Figma", "Adobe XD", "AI Integration"],
      githubLink: "https://github.com/anuja2430/Spotify",
    },
    {
      title: "Personal Finance Tracker",
      description: "Financial management tool that helps users track expenses, set budgets, and visualize spending patterns.",
      tags: ["MERN Stack", "HTML", "CSS", "Bootstrap", "AI/ML"],
    },
  ];

  return (
    <>
      <Navbar />
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold">Projects</h2>
            <p className="max-w-2xl mx-auto text-foreground/80 mt-4">
              A selection of my projects showcasing technical skills, design abilities, and problem-solving approach.
            </p>
          </motion.div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {projects.map((project, index) => (
              <ProjectItem
                key={index}
                title={project.title}
                description={project.description}
                tags={project.tags}
                demoLink={project.demoLink}
                githubLink={project.githubLink}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProjectsSection;
