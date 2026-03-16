import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Droplets } from 'lucide-react';

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

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
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

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full">
          <div className="px-2 pt-2 pb-5 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'bg-blue-50 text-secondary border-l-4 border-accent'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-3 pt-3">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full flex justify-center bg-accent hover:bg-orange-600 text-white px-4 py-3 rounded-md font-medium transition-colors duration-200"
              >
                Send Enquiry
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
