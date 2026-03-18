import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import SEO from '../components/SEO';
import { ShieldCheck, Settings, Award, CheckCircle, Factory, Droplets, Zap, Activity } from 'lucide-react';

const Home = () => {
  // Take first 4 products for preview
  const featuredProducts = products.slice(0, 4);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="w-full">
      <SEO 
        title="Flowtech Engineers | Precision Flow Measurement Solutions" 
        description="High quality flow measurement instruments designed for demanding industrial applications. Engineered for accuracy, built for durability." 
      />
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center bg-primary overflow-hidden">
        {/* Abstract Background Design */}
        <div className="absolute inset-0 w-full h-full opacity-20">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/40 to-transparent transform -skew-x-12"></div>
          <div className="absolute bottom-0 left-0 w-3/4 h-1/2 bg-gradient-to-t from-accent/20 to-transparent"></div>
          {/* Subtle grid pattern */}
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-accent font-medium tracking-wide text-sm mb-6 border border-white/10 backdrop-blur-md">
              INDUSTRIAL INSTRUMENTATION EXPERTS
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              Precision <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-blue-400">Flow Measurement</span> Solutions
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              High quality flow measurement instruments designed for demanding industrial applications. Engineered for accuracy, built for durability.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/products"
                className="w-full sm:w-auto px-8 py-4 bg-secondary hover:bg-blue-600 text-white rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg shadow-secondary/30 transform hover:-translate-y-1"
              >
                View Products
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-lg font-semibold text-lg transition-all duration-300 backdrop-blur-sm transform hover:-translate-y-1"
              >
                Send Enquiry
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50"
        >
          <div className="w-[30px] h-[50px] rounded-full border-2 border-white/30 flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* About Introduction Section */}
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 text-secondary font-semibold mb-4 text-sm tracking-wider uppercase">
                <span className="w-8 h-0.5 bg-secondary"></span>
                <span>About Flowtech Engineers</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
                Trusted Provider of Flow Measurement Solutions
              </h2>
              <div className="space-y-4 text-slate-600 text-lg mb-8 leading-relaxed">
                <p>
                  Flowtech Engineers is a premier manufacturer and supplier of high-precision flow measurement instruments. With years of engineering excellence, we deliver robust solutions that meet the demanding needs of modern process industries.
                </p>
                <p>
                  Our comprehensive range of products, from Glass Tube Rotameters to comprehensive Chlorination Systems, are manufactured using industrial-grade materials to ensure long-term reliability and precise monitoring capabilities.
                </p>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center text-accent font-semibold hover:text-orange-600 transition-colors group text-lg"
              >
                Read More 
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-secondary/20 rounded-2xl transform rotate-3 scale-105 -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&q=80&w=1000" 
                alt="Industrial facility showing Flowtech Engineer's environment" 
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
              {/* Floating Stat Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100 flex items-center space-x-4">
                <div className="bg-primary/5 p-3 rounded-full text-primary">
                  <Award size={32} />
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">ISO</p>
                  <p className="text-sm text-slate-500 font-medium">9001:2015 Certified</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section className="py-20 lg:py-28 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 text-secondary font-semibold mb-4 text-sm tracking-wider uppercase">
              <span className="w-8 h-0.5 bg-secondary"></span>
              <span>Our Portfolio</span>
              <span className="w-8 h-0.5 bg-secondary"></span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Explore Our Product Range</h2>
            <p className="text-slate-600 text-lg">
              Discover our comprehensive selection of flow measurement instruments designed for accuracy and durability across various industrial sectors.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          >
            {featuredProducts.map(product => (
              <motion.div key={product.id} variants={itemVariants}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center">
            <Link
              to="/products"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-slate-800 text-white rounded-lg font-semibold text-lg transition-all shadow-md hover:shadow-lg"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Why Partner With Us?</h2>
            <p className="text-slate-600 text-lg">
              We stand out in the flow instrumentation industry through our unwavering commitment to precision, quality, and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Activity />, title: "High Precision Instruments", desc: "Engineered for tight tolerance and exact calibration ensuring accurate measurement." },
              { icon: <ShieldCheck />, title: "Industrial Grade Materials", desc: "Built with premium SS316, standard acrylics, and borosilicate to withstand harsh environments." },
              { icon: <CheckCircle />, title: "Reliable Performance", desc: "Consistent and repeatable readings maintaining stability over long operational periods." },
              { icon: <Settings />, title: "Custom Engineering Solutions", desc: "Tailored modifications to meet unique process specifications and extreme conditions." },
              { icon: <Award />, title: "Quality Assurance", desc: "Rigorous testing protocols adhering to international standards (ISO/BS) for every unit." },
              { icon: <Factory />, title: "Industry Experience", desc: "Decades of combined engineering expertise serving diverse industrial sectors globally." }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-slate-50 p-8 rounded-xl border border-slate-100 hover:border-secondary/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-white rounded-lg shadow-sm flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served Section */}
      <section className="py-20 lg:py-28 bg-primary text-white relative">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(45deg, #1e293b 25%, transparent 25%, transparent 75%, #1e293b 75%, #1e293b), linear-gradient(45deg, #1e293b 25%, transparent 25%, transparent 75%, #1e293b 75%, #1e293b)', backgroundSize: '20px 20px', backgroundPosition: '0 0, 10px 10px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Industries We Serve</h2>
            <p className="text-slate-400 text-lg">
              Our flow measurement solutions power critical processes across a wide spectrum of industrial sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: <Droplets size={32} />, name: "Chemical" },
              { icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>, name: "Water Treatment" },
              { icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>, name: "Oil & Gas" }, // Using chemistry flask as proxy for Oil/Gas
              { icon: <Zap size={32} />, name: "Power Plants" },
              { icon: <Factory size={32} />, name: "Manufacturing" },
              { icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>, name: "Pharma" } // Proxy for Pharma
            ].map((industry, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center justify-center p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-secondary transition-all duration-300 group cursor-default"
              >
                <div className="text-secondary group-hover:text-white transition-colors duration-300 mb-4">
                  {industry.icon}
                </div>
                <h4 className="font-medium text-center">{industry.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action Section */}
      <section className="py-24 bg-gradient-to-br from-secondary to-blue-700 text-white relative overflow-hidden">
        {/* Abstract Background for CTA */}
        <div className="absolute top-0 right-0 w-full h-full opacity-10">
          <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 40L40 0H20L0 20M40 40V20L20 40" fill="none" stroke="currentColor" strokeWidth="2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pattern)"/>
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Need Flow Measurement Solutions?</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Contact our engineering team today. We provide expert guidance to help you select the precise instruments for your specific application requirements.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-10 py-5 bg-accent hover:bg-orange-600 text-white rounded-lg font-bold text-xl transition-all duration-300 shadow-xl shadow-accent/40 transform hover:-translate-y-1"
            >
              Request a Quote
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Home;
