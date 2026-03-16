import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-100 group"
    >
      <div className="relative h-64 overflow-hidden bg-slate-100">
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
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary mb-2 line-clamp-1">{product.name}</h3>
        <p className="text-slate-600 text-sm mb-6 line-clamp-2">
          {product.description}
        </p>
        
        <Link 
          to={`/products/${product.id}`}
          className="inline-flex items-center justify-center w-full bg-slate-50 hover:bg-primary text-primary hover:text-white border border-slate-200 transition-all duration-300 py-2.5 rounded-lg font-medium"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  );
};

export default ProductCard;
