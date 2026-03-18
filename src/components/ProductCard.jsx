import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden border filter drop-shadow-sm border-slate-100/80 group transition-all duration-300"
    >
      <div className="relative h-56 sm:h-72 overflow-hidden bg-slate-50">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full">
            <Link 
              to={`/products/${product.id}`}
              className="text-white flex items-center justify-between w-full font-medium"
            >
              <span>Quick View</span>
              <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </div>
      
      <div className="p-6 sm:p-8 flex flex-col h-full">
        <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3 line-clamp-2 leading-tight">{product.name}</h3>
        <p className="text-slate-500 text-sm sm:text-base mb-6 line-clamp-2 leading-relaxed flex-grow">
          {product.description}
        </p>
        
        <Link 
          to={`/products/${product.id}`}
          className="inline-flex items-center justify-center w-full bg-slate-50 hover:bg-gradient-to-r hover:from-primary hover:to-primary/90 text-primary hover:text-white border border-slate-200 hover:border-transparent transition-all duration-300 py-3 rounded-xl font-semibold text-sm sm:text-base uppercase tracking-wide group-hover:shadow-md"
        >
          View Technical Details
        </Link>
      </div>
    </motion.div>
  );
};

export default ProductCard;
