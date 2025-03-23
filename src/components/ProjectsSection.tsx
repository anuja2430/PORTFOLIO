
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink?: string;
  githubLink?: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  demoLink,
  githubLink,
  index,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={cardRef}
      style={{ y, opacity }}
      className="group"
    >
      <div className="bg-white dark:bg-black/20 rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-all duration-500">
        <div className="h-60 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-foreground/70 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="text-xs px-2 py-1 bg-secondary rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-3">
            {demoLink && (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors"
              >
                <ExternalLink size={14} />
                <span>Live Demo</span>
              </a>
            )}
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-foreground/70 hover:text-foreground transition-colors"
              >
                <Github size={14} />
                <span>GitHub</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: "Travel Website",
      description: "Interactive travel website featuring destination exploration, booking functionality, and user reviews.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      tags: ["HTML", "CSS", "JavaScript", "UI/UX Design", "AI & ML"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Thrift Store UI/UX Design",
      description: "Complete UI/UX design for a thrift store application with user-friendly navigation and secure checkout.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
      tags: ["Figma", "Adobe XD", "UI/UX Design"],
      demoLink: "#",
    },
    {
      title: "AI-Based Fashion Application",
      description: "Fashion recommendation application using AI to suggest outfits based on user preferences and style.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80",
      tags: ["UI/UX", "Figma", "Adobe XD", "AI Integration"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Personal Finance Tracker",
      description: "Financial management tool that helps users track expenses, set budgets, and visualize spending patterns.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
      tags: ["MERN Stack", "HTML", "CSS", "Bootstrap", "AI/ML"],
      demoLink: "#",
      githubLink: "#",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Projects</h2>
          <p className="max-w-2xl mx-auto text-foreground/80 mt-6">
            A selection of my projects showcasing technical skills, design abilities, and problem-solving approach.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              index={index}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              demoLink={project.demoLink}
              githubLink={project.githubLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
