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
      className="bg-white rounded-md shadow-sm hover:shadow-md overflow-hidden border border-slate-200 hover:border-primary group transition-all duration-300 flex flex-col"
    >
      <div className="relative h-56 sm:h-72 overflow-hidden bg-white border-b border-slate-100 p-4">
        <img 
          src={product.image[0]} 
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
      
      <div className="p-5 sm:p-6 flex flex-col flex-grow bg-slate-50/50">
        <h3 className="text-lg sm:text-xl font-bold text-primary mb-2 line-clamp-2 leading-tight">{product.name}</h3>
        <p className="text-slate-600 text-sm mb-6 line-clamp-2 leading-relaxed flex-grow">
          {product.description}
        </p>
        
        <div className="flex flex-col gap-2 mt-auto">
          <Link 
            to={`/products/${product.id}`}
            className="inline-flex items-center justify-center w-full bg-primary hover:bg-slate-800 text-white transition-colors duration-300 py-2.5 rounded font-semibold text-sm uppercase tracking-wide"
          >
            Get Quotation
          </Link>
          <Link 
            to={`/products/${product.id}`}
            className="inline-flex items-center justify-center w-full bg-transparent hover:bg-slate-100 text-slate-600 hover:text-primary transition-colors duration-300 py-2 rounded font-medium text-sm border border-slate-200"
          >
            Technical Specs
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
