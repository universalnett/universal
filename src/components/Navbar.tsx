import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Wifi } from "lucide-react";
import PhoneButton from "@/components/PhoneButton";
import { DISPLAY_PHONE } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setIsSticky(window.scrollY > heroHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Plans", path: "/plans" },
    { name: "Coverage", path: "/coverage" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className={`${isSticky ? 'fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border shadow-lg' : 'relative bg-transparent'} z-50 transition-all duration-300`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-xl lg:text-2xl font-bold tracking-tight">
              <span className={isSticky ? "text-primary" : "text-white"}>Universal</span>
              <span className={isSticky ? "text-foreground" : "text-white/80"}> Net</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors relative group ${
                  isSticky 
                    ? 'text-foreground/80 hover:text-primary' 
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </Link>
            ))}
            <PhoneButton size="sm" className="neon-glow-strong" />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 transition-colors ${
              isSticky 
                ? 'text-foreground hover:text-primary' 
                : 'text-white hover:text-white/80'
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`lg:hidden border-t ${
              isSticky 
                ? 'border-border bg-background' 
                : 'border-white/20 bg-black/50 backdrop-blur-sm'
            }`}
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium transition-colors py-2 ${
                    isSticky 
                      ? 'text-foreground/80 hover:text-primary' 
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div onClick={() => setIsOpen(false)}>
                <PhoneButton size="sm" className="neon-glow-strong w-full" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
