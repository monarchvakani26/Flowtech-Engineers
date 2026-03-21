import { motion } from 'framer-motion';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import SEO from '../components/SEO';

const Products = () => {
  return (
    <div className="w-full bg-slate-50 min-h-[calc(100vh-64px)]">
      <SEO 
        title="Industrial Instrumentation Catalog | Flowtech Engineers" 
        description="Explore our complete catalog of precision flow measurement instruments including Rotameters, Chlorination Systems, and Orifice Plates." 
      />
      {/* Header Banner */}
      <section className="bg-primary pt-24 pb-16 px-4 relative border-b-4 border-accent">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1.5 px-4 bg-white/10 text-slate-200 font-bold tracking-widest text-sm mb-4 border border-white/20 uppercase rounded-sm">
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
          className="mt-20 bg-slate-100 p-8 md:p-12 rounded shadow-sm border border-slate-200 flex flex-col md:flex-row items-center justify-between"
        >
          <div className="mb-6 md:mb-0 md:mr-8 text-center md:text-left">
            <h3 className="text-2xl font-bold text-primary mb-2">Need a Custom Engineering Solution?</h3>
            <p className="text-slate-600">Our technical team can tailor flow measurement instruments to your exact process specifications.</p>
          </div>
          <a
            href="/contact"
            className="px-8 py-4 bg-primary hover:bg-slate-800 text-white rounded font-bold uppercase tracking-wide transition-colors shadow-sm flex-shrink-0"
          >
            Contact Engineering
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default Products;
