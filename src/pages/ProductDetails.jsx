import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, CheckCircle2, ChevronRight, Activity, Download, ChevronLeft, FileText } from 'lucide-react';
import { products } from '../data/products';
import EnquiryForm from '../components/EnquiryForm';
import SEO from '../components/SEO';

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Reset image index when product changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Product Not Found</h2>
        <p className="text-slate-600 mb-8">The flow measurement instrument you are looking for does not exist or has been removed.</p>
        <Link to="/products" className="bg-primary text-white px-6 py-3 rounded hover:bg-slate-800 transition-colors">
          Return to Products
        </Link>
      </div>
    );
  }

  const hasMultipleImages = product.image.length > 1;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.image.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.image.length) % product.image.length);
  };

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
          <span className="text-primary font-bold">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <Link 
          to="/products"
          className="inline-flex items-center text-secondary hover:text-primary font-bold mb-8 transition-colors group uppercase tracking-wide text-sm"
        >
          <ArrowLeft size={18} className="mr-2 transform group-hover:-translate-x-1 transition-transform" />
          Back to Catalog
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Column: Image Slider */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded shadow-sm border border-slate-200 p-2 relative sticky top-24"
            >
              <div className="relative h-[400px] md:h-[500px] overflow-hidden bg-slate-100 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    src={product.image[currentImageIndex]} 
                    alt={`${product.name} - View ${currentImageIndex + 1}`}
                    className="max-h-full max-w-full object-contain"
                  />
                </AnimatePresence>
                
                {hasMultipleImages && (
                  <>
                    <button 
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary p-2 rounded shadow-md border border-slate-200 transition-colors"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button 
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary p-2 rounded shadow-md border border-slate-200 transition-colors"
                    >
                      <ChevronRight size={24} />
                    </button>
                    
                    {/* Dots */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 bg-white/50 backdrop-blur-sm px-3 py-1.5 rounded border border-white/50">
                      {product.image.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`w-2.5 h-2.5 rounded-full transition-colors ${
                            idx === currentImageIndex ? 'bg-primary' : 'bg-slate-400 hover:bg-slate-600'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
                <div className="absolute top-4 right-4 bg-white p-2 rounded shadow-sm border border-slate-200 text-secondary">
                  <Activity size={20} />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Information & Form */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-3xl md:text-4xl font-extrabold text-primary mb-4 leading-tight">{product.name}</h1>
              <div className="w-16 h-1.5 bg-accent mb-6"></div>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href="#enquiry-form"
                  className="flex-1 bg-primary hover:bg-slate-800 text-white font-bold py-3.5 px-6 rounded text-center transition-colors shadow-sm uppercase tracking-wide border border-transparent"
                >
                  Get Quotation
                </a>
                <button 
                  onClick={() => alert('Datasheet download functionality will be implemented with actual PDFs.')}
                  className="flex-1 bg-white hover:bg-slate-50 text-slate-700 font-bold py-3.5 px-6 rounded text-center transition-colors shadow-sm flex items-center justify-center uppercase tracking-wide border border-slate-300"
                >
                  <Download size={18} className="mr-2" />
                  Datasheet (PDF)
                </button>
              </div>

              <div className="bg-white p-6 md:p-8 rounded shadow-sm border border-slate-200 mb-8">
                <h3 className="text-lg font-bold text-primary mb-4 border-b border-slate-100 pb-2 flex items-center">
                  <FileText className="mr-2 text-secondary" size={20} />
                  Technical Overview
                </h3>
                <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                  {product.description}
                </p>
              </div>
              
              <div className="grid grid-cols-1 gap-8 mb-12">
                {/* Specifications List */}
                <div className="bg-white p-6 md:p-8 rounded shadow-sm border border-slate-200">
                  <h3 className="text-xl font-bold text-primary mb-5 flex items-center border-b border-slate-100 pb-3">
                    <CheckCircle2 className="text-accent mr-2" size={24} />
                    Key Specifications
                  </h3>
                  <ul className="space-y-4">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-slate-700">
                        <div className="min-w-2 h-2 rounded-sm bg-accent mt-2 mr-4 shrink-0"></div>
                        <span className="leading-relaxed font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Applications List */}
                <div className="bg-white p-6 md:p-8 rounded shadow-sm border border-slate-200">
                  <h3 className="text-xl font-bold text-primary mb-5 flex items-center border-b border-slate-100 pb-3">
                    <Activity className="text-secondary mr-2" size={24} />
                    Industry Applications
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {product.applications.map((app, idx) => (
                      <li key={idx} className="flex items-center text-slate-700 bg-slate-50 p-3 rounded border border-slate-100">
                        <div className="min-w-2 h-2 rounded bg-secondary mr-3 shrink-0"></div>
                        <span className="font-medium text-sm">{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {product.usageHighlights && (
                <div className="bg-white p-6 md:p-8 rounded shadow-sm border border-slate-200 mb-8">
                  <h3 className="text-lg font-bold text-primary mb-4 border-b border-slate-100 pb-2 flex items-center">
                    <FileText className="mr-2 text-secondary" size={20} />
                    Usage & Highlights
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                    {product.usageHighlights}
                  </p>
                </div>
              )}
              
              {/* Form Section */}
              <div id="enquiry-form" className="bg-white p-1 rounded shadow-sm border border-slate-200 pt-8 mt-12">
                 <h2 className="text-2xl font-bold text-primary text-center mb-6">Request Pricing & Information</h2>
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
