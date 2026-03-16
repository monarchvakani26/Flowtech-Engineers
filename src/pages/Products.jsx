import { motion } from 'framer-motion';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const Products = () => {
  return (
    <div className="w-full bg-slate-50 min-h-[calc(100vh-64px)]">
      {/* Header Banner */}
      <section className="bg-primary/95 py-20 px-4 relative overflow-hidden border-b-4 border-accent">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary rounded-full blur-[100px] transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent rounded-full blur-[100px] transform -translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-secondary font-medium tracking-wider text-sm mb-4 border border-white/10 uppercase">
              Our Catalog
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industrial Instrumentation Products
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Explore our complete range of high-precision flow measurement solutions designed for reliability in critical applications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
        
        {/* Contact Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-slate-100 flex flex-col md:flex-row items-center justify-between"
        >
          <div className="mb-6 md:mb-0 md:mr-8 text-center md:text-left">
            <h3 className="text-2xl font-bold text-primary mb-2">Need a Custom Solution?</h3>
            <p className="text-slate-600">Our engineering team can tailor instruments to your exact process specs.</p>
          </div>
          <a
            href="/contact"
            className="px-8 py-4 bg-accent hover:bg-orange-600 text-white rounded-lg font-bold transition-all shadow-md transform hover:-translate-y-1 whitespace-nowrap"
          >
            Contact Engineering
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default Products;
