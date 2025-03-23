import { useEffect } from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, ChevronRight, Code } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface ExperienceItemProps {
  title: string;
  company: string;
  date: string;
  description: string[];
  delay?: number;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ 
  title, 
  company, 
  date, 
  description,
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5 }}
      className="glass-card p-6 hover:border-primary/50 transition-all duration-300"
    >
      <div className="flex items-center gap-2 mb-2 text-primary/80">
        <Calendar size={16} />
        <span className="text-sm">{date}</span>
      </div>
      <h3 className="text-xl font-semibold mb-1 flex items-center gap-2">
        <Code className="text-primary" size={16} />
        {title}
      </h3>
      <p className="text-foreground/70 mb-4">{company}</p>
      <ul className="space-y-2">
        {description.map((item, index) => (
          <li key={index} className="flex">
            <span className="mr-2 mt-1 text-primary"><ChevronRight size={16} /></span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const Experience = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const experiences = [
    {
      title: "Product Manager Intern",
      company: "Engineer's Cradle - Events & Community Development",
      date: "01/2024 - 05/2024",
      description: [
        "Led outreach to engage students and community members, promoting tech events and fostering innovation.",
        "Organized workshops and networking events with industry partners, offering hands-on experience and real-world insights."
      ]
    },
    {
      title: "Software and Technical Team Member",
      company: "RIDE, MIT-WPU",
      date: "08/2023 - Current",
      description: [
        "Maintained strong collaboration with multiple teams to achieve project milestones.",
        "Collaborated with developers to interrogate, debug, and resolve technical issues."
      ]
    },
    {
      title: "Software Developer",
      company: "Innovation Hub (Student's Innovation Council MIT WPU)",
      date: "06/2023 - Current",
      description: [
        "Created applications using HTML, CSS, JavaScript, and other programming languages.",
        "Participated in hackathons as a mentor, guiding teams through ideation, development, and presentation stages.",
        "Supported students in building innovative projects, ensuring they met deadlines and delivered high-quality results."
      ]
    },
    {
      title: "Core Designer",
      company: "MIT-WPU Student Alumni Relations Society",
      date: "09/2023 - Current",
      description: [
        "Currently part of the Design Core Team, responsible for creating visually appealing designs for alumni events, campaigns, and promotional materials.",
        "Led all design work for the Nostalgia Event, creating everything from brochures, posters, banners, social media creatives, and event branding to other promotional materials."
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen relative overflow-hidden"
    >
      <Navbar />
      
      <section className="min-h-screen pt-28 pb-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h1 className="section-heading flex items-center gap-2">
              <Briefcase className="text-primary" />
              Work Experience
            </h1>
            <p className="max-w-3xl text-foreground/80 mt-6 text-lg">
              My professional journey includes various roles where I've developed both technical and soft skills,
              contributing to team success and personal growth.
            </p>
          </motion.div>
          
          <div className="space-y-6 max-w-5xl mx-auto">
            <div className="relative pl-8 before:content-[''] before:absolute before:left-3 before:top-0 before:bottom-0 before:w-0.5 before:bg-primary/50">
              {experiences.map((exp, index) => (
                <div key={index} className="mb-8 relative">
                  <div className="absolute left-[-30px] top-6 w-6 h-6 bg-primary rounded-full flex items-center justify-center z-10">
                    <div className="w-2 h-2 bg-background rounded-full"></div>
                  </div>
                  <ExperienceItem
                    title={exp.title}
                    company={exp.company}
                    date={exp.date}
                    description={exp.description}
                    delay={index * 0.1}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </motion.div>
  );
};

export default Experience;