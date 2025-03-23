import { useEffect } from "react";
import { motion } from "framer-motion";
import { 
  PawPrint, Code, Layout, Database, Brush, Brain, 
  CircleCheck, Sparkles, Users, TrendingUp, Video 
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SkillCard = ({ 
  title, 
  icon, 
  skills, 
  delay = 0 
}: { 
  title: string; 
  icon: React.ReactNode; 
  skills: { name: string; level: number }[];
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5 }}
      className="glass-card p-6"
    >
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">{skill.name}</span>
              <span className="text-xs text-primary">{`${skill.level}%`}</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 + (index * 0.1) }}
                className="bg-primary h-2 rounded-full"
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 🎯 Technical Skills
  const technicalSkills = [
    {
      title: "Frontend",
      icon: <Layout className="text-primary" size={24} />,
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React.js", level: 80 },
        { name: "Tailwind CSS", level: 85 }
      ]
    },
    {
      title: "Backend",
      icon: <Code className="text-primary" size={24} />,
      skills: [
        { name: "Node.js", level: 75 },
        { name: "Express.js", level: 70 },
        { name: "PHP", level: 60 },
        { name: "Python", level: 65 }
      ]
    },
    {
      title: "Database",
      icon: <Database className="text-primary" size={24} />,
      skills: [
        { name: "MySQL", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "Firebase", level: 65 },
        { name: "GraphQL", level: 60 }
      ]
    },
    {
      title: "Design",
      icon: <Brush className="text-primary" size={24} />,
      skills: [
        { name: "UI/UX", level: 85 },
        { name: "Figma", level: 80 },
        { name: "Adobe XD", level: 75 },
        { name: "Photoshop", level: 70 }
      ]
    }
  ];

  // 🧠 Soft Skills
  const softSkills = [
    { name: "Problem Solving", level: 90 },
    { name: "Communication", level: 85 },
    { name: "Teamwork", level: 90 },
    { name: "Adaptability", level: 80 },
    { name: "Time Management", level: 85 },
    { name: "Creativity", level: 90 }
  ];

  // 🚀 Social Media & Branding
  const socialMediaSkills = [
    { name: "Social Media Management", level: 90 },
    { name: "Content Creation", level: 85 },
    { name: "Brand Marketing", level: 80 },
    { name: "SEO & Analytics", level: 75 },
    { name: "Video Editing", level: 80 },
    { name: "Influencer Marketing", level: 70 }
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
              <Sparkles className="text-primary" />
              My Skills
            </h1>
            <p className="max-w-3xl text-foreground/80 mt-6 text-lg">
              A showcase of my technical and soft skills, refined through academic learning,
              professional experience, and personal projects. I continuously enhance these abilities
              to deliver high-quality, user-focused solutions.
            </p>
          </motion.div>
          
          {/* 🔥 Technical Skills */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <Brain className="text-primary" size={24} />
              Technical Skills
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {technicalSkills.map((skillGroup, index) => (
                <SkillCard key={index} {...skillGroup} delay={index * 0.1} />
              ))}
            </div>
          </div>

          {/* 🎯 Soft Skills */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <CircleCheck className="text-primary" size={24} />
              Soft Skills
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {softSkills.map((skill, index) => (
                <SkillCard key={index} title={skill.name} icon={<PawPrint size={24} />} skills={[{ name: skill.name, level: skill.level }]} />
              ))}
            </div>
          </div>

          {/* 🚀 Social Media & Branding */}
          <div>
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <Users className="text-primary" size={24} />
              Social Media & Branding
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {socialMediaSkills.map((skill, index) => (
                <SkillCard key={index} title={skill.name} icon={<TrendingUp size={24} />} skills={[{ name: skill.name, level: skill.level }]} />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </motion.div>
  );
};

export default Skills;
