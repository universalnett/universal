import { ArrowRight, Zap, Wifi, Signal, Globe, Radio, Router, Phone } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-bg.jpg";
import heroVideo from "@/assets/video.mp4";
import { Navbar } from "./Navbar";
import { Link } from "react-router-dom";

export const Hero = () => {
  const services = [
    "High-Speed Internet",
    "Fiber Optic Cable",
    "Business Internet",
    "24/7 Tech Support",
    "WiFi Installation",
    "Network Security",
  ];

  return (
    <section className="relative h-screen flex flex-col overflow-hidden bg-background">
      {/* Integrated Navbar */}
      <Navbar />
      
      {/* Hero Content Container */}
      <div className="flex-1 flex items-center">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
          {/* Fallback image if video fails to load */}
          <img
            src={heroImage}
            alt="Digital Agency Team"
            className="w-full h-full object-cover"
          />
        </video>
        <div className="absolute inset-0 bg-black/80" />
        <div className="absolute inset-0 bg-white/5" />
      </div>

      {/* Floating Internet Icons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute inset-0 z-[5] pointer-events-none"
      >
        {/* Wifi Icon - Top Left */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 left-[10%] text-primary/30"
        >
          <Wifi className="w-16 h-16" />
        </motion.div>

        {/* Signal Icon - Top Right */}
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            x: [0, -10, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-40 right-[15%] text-primary/20"
        >
          <Signal className="w-12 h-12" />
        </motion.div>

        {/* Globe Icon - Left Side */}
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 360]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-[5%] text-primary/25"
        >
          <Globe className="w-20 h-20" />
        </motion.div>

        {/* Radio Icon - Right Side */}
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            x: [0, 10, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/3 right-[8%] text-primary/20"
        >
          <Radio className="w-14 h-14" />
        </motion.div>

        {/* Router Icon - Bottom Left */}
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute bottom-48 left-[20%] text-primary/30"
        >
          <Router className="w-12 h-12" />
        </motion.div>

        {/* Small Wifi Icon - Bottom Right */}
        <motion.div
          animate={{ 
            y: [0, 12, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          className="absolute bottom-56 right-[25%] text-primary/25"
        >
          <Wifi className="w-10 h-10" />
        </motion.div>
      </motion.div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 h-full flex items-center justify-center">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          {/* Centered Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold leading-tight text-white px-4 sm:px-0">
              Connecting{" "}
              <span className="inline-block rounded-full relative" style={{ boxShadow: '6px 6px 0px 0px rgb(255, 255, 255)' }}>
                <a href="tel:+18888541959" className="text-highlight-rounded transition-all relative hover:translate-x-[6px] hover:translate-y-[6px] inline-block">
                  homes
                </a>
              </span>
              <br />
              and digital{" "}
              <span className="inline-block rounded-full relative" style={{ boxShadow: '6px 6px 0px 0px rgb(255, 255, 255)' }}>
                <a href="tel:+18888541959" className="text-highlight-rounded transition-all relative hover:translate-x-[6px] hover:translate-y-[6px] inline-block">
                  networks
                </a>
                {/* Floating Phone Indicator with Arrow */}
                <motion.div
                  animate={{ 
                    x: [3, 8, 3]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                  className="hidden md:flex absolute -bottom-3 -right-24 items-center gap-1 z-10"
                >
                  {/* Arrow pointing left to button */}
                  <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-r-[8px] border-r-black" />
                  <div className="bg-black text-primary px-5 py-2 rounded-full shadow-lg flex items-center gap-2 text-sm font-bold whitespace-nowrap">
                    <Phone className="w-4 h-4" />
                    <span>Call Now</span>
                  </div>
                </motion.div>
              </span>
            </h1>
          </motion.div>
        </div>


      </div>
      </div>

      {/* Scrolling Service Tags */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-0 left-0 right-0 bg-primary border-t border-primary/30 py-4 overflow-hidden"
      >
        <div className="flex gap-4 animate-scroll whitespace-nowrap">
          {[...services, ...services].map((service, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-2 px-6 py-2 bg-white/10 rounded-full border border-white/20 shadow-sm"
            >
              <span className="w-1.5 h-1.5 bg-white rounded-full" />
              <span className="text-sm font-medium text-white">{service}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
};
