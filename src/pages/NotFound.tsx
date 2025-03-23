
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary/20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-md mx-auto"
      >
        <div className="mb-8">
          <h1 className="text-8xl font-bold text-primary">404</h1>
          <div className="h-0.5 w-16 bg-primary/30 mx-auto my-6"></div>
          <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-foreground/70 mb-8">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
        </div>
        
        <Link 
          to="/" 
          className="fancy-border inline-block"
        >
          <div className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md transition-all duration-300 flex items-center gap-2">
            <ArrowLeft size={16} />
            <span>Return to Home</span>
          </div>
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
