import { useEffect } from "react";
import { motion } from "framer-motion";
import { User, Heart, Award, BookOpen, Code } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const facts = [
    {
      title: "Education",
      icon: <BookOpen size={24} className="text-primary" />,
      content: "B.Tech CSE from MIT-World Peace University, expected in 2026.",
    },
    {
      title: "Passion",
      icon: <Heart size={24} className="text-primary" />,
      content: "Creating intuitive user experiences and solving complex problems through design and coding.",
    },
    {
      title: "Achievements",
      icon: <Award size={24} className="text-primary" />,
      content: "Student Leader Award, Hackathon Winner, Design Competition Finalist.",
    },
    {
      title: "Hobbies",
      icon: <Code size={24} className="text-primary" />,
      content: "Photography, hiking, reading tech blogs, and building side projects in my free time.",
    },
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
              <User className="text-primary" />
              About Me
            </h1>
            <p className="max-w-3xl text-foreground/80 mt-6 text-lg">
              Welcome to my digital portfolio! I'm Anuja Konde, a passionate full-stack developer and UI/UX designer with a knack for creating meaningful digital experiences. My journey in the tech world is driven by curiosity and a desire to blend aesthetics with functionality.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="col-span-1"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl"></div>
                <div className="glass-card relative p-6 h-full flex flex-col">
                  <div className="mx-auto mb-6 w-64 h-64 rounded-full border-4 border-primary/30 overflow-hidden">
                    <img
                      src="/profile.jpg"
                      alt="Anuja Konde"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h2 className="text-2xl font-bold mb-2 text-center">Anuja Konde</h2>
                  <p className="text-foreground/70 text-center mb-4">Full-Stack Developer & UI/UX Designer</p>
                  <div className="mt-auto">
                    <div className="border-t border-white/10 pt-4 mt-4">
                      <div className="flex justify-center space-x-2">
                        {[...Array(5)].map((_, index) => (
                          <Code key={index} className="text-primary" size={16} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="col-span-2"
            >
              <div className="glass-card p-6 h-full">
                <h2 className="text-2xl font-bold mb-6 border-b border-white/10 pb-4">My Story</h2>
                <div className="prose prose-invert max-w-none">
                  <p className="mb-4">
                    I'm a full-stack developer and UI/UX designer passionate about creating efficient, 
                    user-friendly applications. With expertise in both front-end and back-end technologies, 
                    I build comprehensive solutions that look great and function seamlessly.
                  </p>
                  <p className="mb-4">
                    My journey began with a fascination for how design and technology intersect to create 
                    compelling user experiences. This curiosity led me to pursue Computer Science at MIT-WPU, 
                    where I've been expanding my technical skills while nurturing my creative abilities.
                  </p>
                  <p>
                    Beyond coding, I'm an active member of multiple tech communities where I collaborate 
                    with other developers, participate in hackathons, and mentor aspiring coders. These 
                    experiences have taught me the value of teamwork, effective communication, and 
                    continuous learning.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold mb-8"
          >
            Quick Facts
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-card p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  {fact.icon}
                  <h3 className="text-xl font-semibold">{fact.title}</h3>
                </div>
                <p className="text-foreground/70">{fact.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
};

export default About;
