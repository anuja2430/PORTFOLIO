
import { motion } from "framer-motion";
import { ArrowRight, Github, InstagramIcon, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react"; 

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const game = {
      rabbit: { x: canvas.width / 2, y: canvas.height - 80, size: 50 },
      carrots: [] as { x: number; y: number; size: number }[],
      animationId: 0,
    };

    const handleMouseMove = (e: MouseEvent) => {
      game.rabbit.x = e.clientX - game.rabbit.size / 2;
    };

    canvas.addEventListener("mousemove", handleMouseMove);

    const gameLoop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 🥕 Add carrots randomly
      if (Math.random() < 0.02) {
        game.carrots.push({
          x: Math.random() * (canvas.width - 30),
          y: -30,
          size: Math.random() * 20 + 30,
        });
      }

      // 🎮 Move carrots down
      for (let i = game.carrots.length - 1; i >= 0; i--) {
        const carrot = game.carrots[i];
        carrot.y += 3;

        // 🏆 Check collision with rabbit
        const dx = (game.rabbit.x + game.rabbit.size / 2) - (carrot.x + carrot.size / 2);
        const dy = (game.rabbit.y + game.rabbit.size / 2) - (carrot.y + carrot.size / 2);
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < game.rabbit.size / 2 + carrot.size / 2) {
          game.carrots.splice(i, 1);
          setScore((prev) => prev + 1);
          continue;
        }

        ctx.font = `${carrot.size}px Arial`;
        ctx.fillText("🥕", carrot.x, carrot.y);
      }

      // 🐰 Draw rabbit emoji
      ctx.font = `${game.rabbit.size}px Arial`;
      ctx.fillText("🐰", game.rabbit.x, game.rabbit.y);

      game.animationId = requestAnimationFrame(gameLoop);
    };

    game.animationId = requestAnimationFrame(gameLoop);

    return () => {
      cancelAnimationFrame(game.animationId);
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="min-h-screen pt-20 pb-10 flex items-center relative overflow-hidden bg-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-lg text-primary font-medium">Full-Stack Developer & UI/UX Designer</h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Anuja Konde Deshmukh
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-foreground/80 max-w-xl"
            >
              <p>An organized and motivated individual, who designs, builds, and brings ideas to life on the web! Whether it’s crafting sleek websites, designing eye-catching UIs, writing cool content, or managing socials, I love creating digital magic. ✨

Let’s make something awesome together! 😎.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Link to="https://www.linkedin.com/in/anujakondedeshmukh/" className="fancy-border">
                <div className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md transition-all duration-300 flex items-center gap-2">
                  <span>Get in Touch</span>
                  <ArrowRight size={16} />
                </div>
              </Link>
              
              <Link to="https://github.com/anuja2430" className="fancy-border">
                <div className="bg-background hover:bg-secondary border border-border px-6 py-3 rounded-md transition-all duration-300">
                  View Projects
                </div>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex gap-4 pt-4"
            >
              <a href="https://github.com/anuja2430" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors duration-300">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/anujakondedeshmukh/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="mailto:anujkonde2430@gmail.com" className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors duration-300">
                <Mail size={20} />
              </a>
              <a href="https://www.instagram.com/amuznuz/" className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors duration-300">
                 <InstagramIcon size={20} />
            </a>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full animate-spin-slow blur-3xl opacity-70" />
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <div className="glass-card w-full h-full rounded-2xl overflow-hidden p-6 flex items-center justify-center">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                    className="w-full max-w-xs"
                  >
                    <img 
                      src="/src/Untitled design-2.jpg" 
                      alt="Programming animation" 
                      className="w-full h-auto rounded-md shadow-lg"
                    />
                  </motion.div>
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                className="absolute -top-6 right-10 glass-effect p-3 rounded-lg shadow-xl"
              >
                <span className="text-xs font-medium">HTML</span>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                className="absolute top-1/4 -left-8 glass-effect p-3 rounded-lg shadow-xl"
              >
                <span className="text-xs font-medium">React</span>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-10 -right-4 glass-effect p-3 rounded-lg shadow-xl"
              >
                <span className="text-xs font-medium">Node.js</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
