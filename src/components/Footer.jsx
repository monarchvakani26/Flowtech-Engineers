import { Link } from 'react-router-dom';
import { Droplets, MapPin, Phone, Mail, ChevronRight } from 'lucide-react';
import { products } from '../data/products';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  // Take first 5 products for typical footer usage
  const quickProducts = products.slice(0, 5);

  return (
    <footer className="bg-primary text-slate-300 pt-16 pb-8 border-t-4 border-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="bg-white/10 p-2 rounded-lg backdrop-blur-sm">
                <Droplets size={24} className="text-accent" />
              </div>
              <span className="font-bold text-xl text-white tracking-tight">
                Flowtech <span className="text-secondary">Engineers</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Trusted providers of high-precision flow measurement instruments and industrial solutions. Engineering excellence since foundation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-accent rounded"></span>
            </h3>
            <ul className="space-y-4">
              {['Home', 'About', 'Products', 'Team', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="flex items-center text-base py-1 hover:text-secondary hover:translate-x-1 transition-all duration-200"
                  >
                    <ChevronRight size={18} className="mr-2 text-accent" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6 relative inline-block">
              Our Products
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-accent rounded"></span>
            </h3>
            <ul className="space-y-4">
              {quickProducts.map((product) => (
                <li key={product.id}>
                  <Link
                    to={`/products/${product.id}`}
                    className="flex items-center text-base py-1 hover:text-secondary hover:translate-x-1 transition-all duration-200 line-clamp-1"
                  >
                    <ChevronRight size={18} className="mr-2 text-accent" />
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6 relative inline-block">
              Contact Info
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-accent rounded"></span>
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start">
                <MapPin size={22} className="mr-4 text-accent shrink-0 mt-0.5" />
                <span className="text-base leading-relaxed">105, Krushna Laxmi Industrial Premises, Vartak Nagar, Thane, Mumbai - 400606, Maharashtra, India</span>
              </li>
              <li className="flex items-center pt-1">
                <Phone size={22} className="mr-4 text-accent shrink-0" />
                <span className="text-base">+91 99201 31677</span>
              </li>
              <li className="flex items-center pt-1">
                <Mail size={22} className="mr-4 text-accent shrink-0" />
                <span className="text-base">flowtechengineers.mumbai@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>Copyright &copy; {currentYear} Flowtech Engineers. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed securely for Industry.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
