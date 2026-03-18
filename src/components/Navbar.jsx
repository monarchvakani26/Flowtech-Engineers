import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Droplets } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-lg shadow-sm z-50 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-primary text-white p-2 rounded-lg">
              <Droplets size={24} className="text-accent" />
            </div>
            <span className="font-bold text-xl text-primary tracking-tight">
              Flowtech <span className="text-secondary">Engineers</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-medium transition-colors duration-200 hover:text-secondary ${
                    isActive(link.path) ? 'text-secondary border-b-2 border-accent' : 'text-slate-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <Link
              to="/contact"
              className="bg-accent hover:bg-orange-600 text-white px-5 py-2 rounded-md font-medium transition-colors duration-200 shadow-sm"
            >
              Send Enquiry
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary hover:text-secondary focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Premium Glassmorphism Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden fixed inset-0 top-16 bg-white/95 backdrop-blur-xl z-40 overflow-y-auto"
          >
            <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] p-6 space-y-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.1, duration: 0.4 }}
                  className="w-full"
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block w-full text-center py-4 rounded-2xl text-2xl font-semibold tracking-wide transition-all ${
                      isActive(link.path)
                        ? 'bg-secondary/10 text-secondary'
                        : 'text-slate-800 hover:bg-slate-50'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="w-full pt-6 border-t border-slate-200/50"
              >
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full block text-center bg-gradient-to-r from-accent to-orange-500 shadow-lg shadow-orange-500/30 text-white px-6 py-5 rounded-2xl text-xl font-bold uppercase tracking-wider"
                >
                  Request a Quote
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
