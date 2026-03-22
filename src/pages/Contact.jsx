import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import EnquiryForm from '../components/EnquiryForm';
import SEO from '../components/SEO';

const Contact = () => {
  return (
    <div className="w-full bg-slate-50 pb-20">
      <SEO
        title="Contact Flowtech Engineers | Request a Quote"
        description="Get in touch with our engineering team for quick quotes or technical specification requests regarding Flowtech measurement solutions."
      />
      {/* Header Banner */}
      <section className="bg-primary/95 pt-24 pb-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.8) 1px, transparent 0)', backgroundSize: '30px 30px' }}></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Contact Us</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Get in touch with our engineering team for inquiries, quotes, or custom instrumentation solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
              <h2 className="text-2xl font-bold text-primary mb-8 relative inline-block">
                Corporate Office
                <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-accent rounded-full transform translate-y-2"></span>
              </h2>

              <ul className="space-y-8">
                <li className="flex items-start">
                  <div className="w-12 h-12 bg-blue-50 text-secondary rounded-full flex items-center justify-center shrink-0 mt-1">
                    <MapPin size={24} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-slate-800 mb-1">Address</h4>
                    <p className="text-slate-600 leading-relaxed">
                      105, Krushna Laxmi industrial premises,<br />Vartak nagar,<br />
                      Thane Mumbai - 400606,<br />
                      Maharashtra, India
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="w-12 h-12 bg-blue-50 text-secondary rounded-full flex items-center justify-center shrink-0 mt-1">
                    <Phone size={24} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-slate-800 mb-1">Phone</h4>
                    <p className="text-slate-600 leading-relaxed">
                      Main: +91 99201 31677 <br />
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="w-12 h-12 bg-blue-50 text-secondary rounded-full flex items-center justify-center shrink-0 mt-1">
                    <Mail size={24} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-slate-800 mb-1">Email</h4>
                    <p className="text-slate-600 leading-relaxed">
                      flowtechengineers.mumbai@gmail.com<br />
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="w-12 h-12 bg-blue-50 text-secondary rounded-full flex items-center justify-center shrink-0 mt-1">
                    <Clock size={24} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-slate-800 mb-1">Working Hours</h4>
                    <p className="text-slate-600 leading-relaxed">
                      Monday - Saturday: 9:00 AM - 6:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-7"
          >
            <EnquiryForm />
          </motion.div>

        </div>
      </section>

      {/* Map Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white p-4 rounded-2xl shadow-md border border-slate-100 overflow-hidden"
        >
          <div className="w-full h-[400px] rounded-xl overflow-hidden bg-slate-200">
            {/* Embedded Google Map - Coordinates pointing approximately to Mumbai */}
            <iframe
              src="https://maps.app.goo.gl/eDgL9Fy4SaoKwWK17"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Flowtech Engineers Location"
            ></iframe>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
