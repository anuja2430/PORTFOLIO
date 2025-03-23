import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar"; 
import HeroSection from "@/components/HeroSection"; 
import Footer from "@/components/Footer"; 


const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <HeroSection />
      
      <Footer />
    </>
  );
};

export default Index;
