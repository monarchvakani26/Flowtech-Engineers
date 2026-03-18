import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, ChevronRight, Activity } from 'lucide-react';
import { products } from '../data/products';
import EnquiryForm from '../components/EnquiryForm';
import SEO from '../components/SEO';

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Product Not Found</h2>
        <p className="text-slate-600 mb-8">The flow measurement instrument you are looking for does not exist or has been removed.</p>
        <Link to="/products" className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-slate-800 transition-colors">
          Return to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full bg-slate-50 pb-24">
      <SEO 
        title={`${product.name} | Flowtech Engineers`} 
        description={product.description} 
      />
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-slate-200 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center text-sm text-slate-500">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight size={16} className="mx-2" />
          <Link to="/products" className="hover:text-primary transition-colors">Products</Link>
          <ChevronRight size={16} className="mx-2" />
          <span className="text-primary font-medium">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <Link 
          to="/products"
          className="inline-flex items-center text-secondary hover:text-blue-700 font-medium mb-8 transition-colors group"
        >
          <ArrowLeft size={20} className="mr-2 transform group-hover:-translate-x-1 transition-transform" />
          Back to all products
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left Column: Image & Details */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 sticky top-24"
            >
              <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-xl bg-slate-100 group">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Decorative overlay graphic */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-sm border border-white/50 text-secondary">
                  <Activity size={24} />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Information & Form */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4 leading-tight">{product.name}</h1>
              <div className="w-20 h-1 bg-accent rounded-full mb-6"></div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 mb-8">
                <h3 className="text-lg font-bold text-primary mb-3">Product Overview</h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {product.description}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {/* Features List */}
                <div className="bg-slate-100/50 p-6 rounded-xl border border-slate-200">
                  <h3 className="text-xl font-bold text-primary mb-4 flex items-center">
                    <CheckCircle2 className="text-secondary mr-2" size={24} />
                    Key Features
                  </h3>
                  <ul className="space-y-3">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-slate-700">
                        <span className="min-w-1.5 h-1.5 rounded-full bg-accent mt-2 mr-3 block"></span>
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Applications List */}
                <div className="bg-slate-100/50 p-6 rounded-xl border border-slate-200">
                  <h3 className="text-xl font-bold text-primary mb-4 flex items-center">
                    <Activity className="text-secondary mr-2" size={24} />
                    Applications
                  </h3>
                  <ul className="space-y-3">
                    {product.applications.map((app, idx) => (
                      <li key={idx} className="flex items-start text-slate-700">
                        <span className="min-w-1.5 h-1.5 rounded-full bg-secondary mt-2 mr-3 block"></span>
                        <span className="leading-relaxed">{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Form Section */}
              <div id="enquiry-form">
                <EnquiryForm prefilledProduct={product.name} />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
