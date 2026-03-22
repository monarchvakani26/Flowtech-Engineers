import { motion } from 'framer-motion';
import { Target, Compass, Award, ShieldCheck, Factory, CheckCircle2, MapPin, Phone, Mail } from 'lucide-react';
import SEO from '../components/SEO';

const About = () => {
  return (
    <div className="w-full bg-slate-50 pb-24">
      <SEO 
        title="Flowtech Engineers | Flow Measurement Instrument Manufacturer India" 
        description="Flowtech Engineers is a leading manufacturer of rotameters and industrial flow measurement instruments in Mumbai, India. High precision, durable, and reliable solutions." 
      />
      
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1920" 
            alt="Flow measurement instrument manufacturing facility in Mumbai" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/90 to-primary/60"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-accent font-bold tracking-widest uppercase mb-4 text-sm sm:text-base border-b border-accent/30 pb-2 inline-block"
          >
            Leading Manufacturer of Flow Measurement Instruments in Mumbai
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight"
          >
            About Flowtech Engineers
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-24 h-1.5 bg-accent mx-auto"
          ></motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Article (Left) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8 space-y-12"
          >
            {/* Overview */}
            <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm border border-slate-200">
              <h2 className="text-3xl font-bold text-primary mb-6 border-l-4 border-secondary pl-4">Company Overview</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
                <p>
                  Flowtech Engineers is a trusted manufacturer and supplier of flow measurement instruments in India, specializing in high-precision solutions for industrial applications. Based in Mumbai, we design and manufacture reliable instruments such as glass tube rotameters, acrylic rotameters, metal tube rotameters, and industrial flow meters.
                </p>
                <p>
                  With a strong foundation in engineering excellence, we deliver products that meet the demanding requirements of industries including chemical processing, water treatment, oil & gas, pharmaceuticals, and power plants.
                </p>
                <p>
                  Established with a commitment to precision and performance, Flowtech Engineers has built a reputation as a dependable provider of industrial flow measurement solutions.
                </p>
                <p><strong>Our expertise includes:</strong></p>
                <ul className="list-disc pl-6 space-y-2 pb-2">
                  <li>Design and manufacturing of rotameters and flow meters</li>
                  <li>Custom-built solutions for specialized applications</li>
                  <li>Calibration and quality assurance of instruments</li>
                  <li>End-to-end support for industrial measurement systems</li>
                </ul>
                <p>
                  We serve a wide range of clients across India and international markets, ensuring every product delivers accurate flow measurement, durability, and long operational life.
                </p>
                <p className="font-semibold text-primary">
                  We believe that accurate measurement is the backbone of efficient process control, and every instrument we produce reflects our dedication to quality and reliability.
                </p>
              </div>
            </div>

            {/* Why Flowtech Engineers */}
            <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm border border-slate-200">
              <h2 className="text-3xl font-bold text-primary mb-6 border-l-4 border-secondary pl-4">Why Flowtech Engineers? | Industrial Flow Meter Experts</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-600">
                <div>
                  <h3 className="text-xl font-bold text-primary mb-3 flex items-center"><Target className="w-5 h-5 text-accent mr-2" />High Precision Flow Measurement</h3>
                  <p className="leading-relaxed mb-6">Our instruments are engineered for accurate and repeatable flow readings, ensuring reliable performance in critical applications.</p>
                  
                  <h3 className="text-xl font-bold text-primary mb-3 flex items-center"><ShieldCheck className="w-5 h-5 text-accent mr-2" />Industrial-Grade Materials</h3>
                  <p className="leading-relaxed mb-3">We use high-quality materials such as:</p>
                  <ul className="space-y-2 mb-6 ml-1">
                    <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-secondary mr-2" /> SS316 stainless steel</li>
                    <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-secondary mr-2" /> Borosilicate glass</li>
                    <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-secondary mr-2" /> Acrylic and polycarbonate</li>
                  </ul>
                  <p className="leading-relaxed">These materials ensure durability in corrosive and high-temperature environments.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-primary mb-3 flex items-center"><Factory className="w-5 h-5 text-accent mr-2" />Custom Flow Measurement Solutions</h3>
                  <p className="leading-relaxed mb-6">We offer customized rotameters and flow meters designed to meet specific process requirements, pressure conditions, and flow ranges.</p>

                  <h3 className="text-xl font-bold text-primary mb-3 flex items-center"><Award className="w-5 h-5 text-accent mr-2" />Reliable & Long-Lasting Performance</h3>
                  <p className="leading-relaxed mb-3">Our products are known for:</p>
                  <ul className="space-y-2 mb-6 ml-1">
                    <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-secondary mr-2" /> Low maintenance</li>
                    <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-secondary mr-2" /> Long service life</li>
                    <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-secondary mr-2" /> Stable calibration over time</li>
                  </ul>

                  <h3 className="text-xl font-bold text-primary mb-3 flex items-center"><ShieldCheck className="w-5 h-5 text-accent mr-2" />Strict Quality Assurance</h3>
                  <p className="leading-relaxed">Each instrument undergoes rigorous testing to meet international standards and industrial specifications.</p>
                </div>
              </div>
            </div>

            {/* Geography & Conclusion */}
            <div className="bg-primary text-white p-8 md:p-10 rounded-xl shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,#fff_1px,transparent_0)] [background-size:24px_24px]"></div>
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Flow Measurement Solutions in Mumbai, India</h2>
                <p className="text-slate-300 leading-relaxed text-lg mb-0">
                  Located in Mumbai, Flowtech Engineers serves clients across India and globally. We are committed to providing high-quality flow meters and instrumentation solutions with fast response, technical support, and competitive pricing.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Sidebar (Right) */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Mission & Vision */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 border-t-4 border-t-secondary"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-secondary/10 rounded flex items-center justify-center text-secondary mr-3">
                  <Target size={24} />
                </div>
                <h3 className="text-xl font-bold text-primary">Our Mission</h3>
              </div>
              <p className="text-slate-600 leading-relaxed mb-8 text-sm">
                To provide industries worldwide with accurate, durable, and high-performance flow measurement instruments that improve process efficiency, enhance safety, and reduce operational downtime.
              </p>

              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-accent/10 rounded flex items-center justify-center text-accent mr-3">
                  <Compass size={24} />
                </div>
                <h3 className="text-xl font-bold text-primary">Our Vision</h3>
              </div>
              <p className="text-slate-600 leading-relaxed text-sm">
                To become a globally recognized brand in flow measurement instrumentation, known for innovation, precision engineering, and customer-focused solutions.
              </p>
            </motion.div>

            {/* Industries We Serve */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white p-6 rounded-xl shadow-sm border border-slate-200"
            >
              <h3 className="text-xl font-bold text-primary mb-4 pb-2 border-b border-slate-100">Industries We Serve</h3>
              <p className="text-sm text-slate-500 mb-4 tracking-wide">Flowtech Engineers provides flow measurement solutions for:</p>
              <ul className="space-y-3">
                {[
                  "Chemical & Petrochemical Industries",
                  "Water & Wastewater Treatment Plants",
                  "Oil & Gas Industry",
                  "Power Generation Plants",
                  "Pharmaceutical Industry",
                  "Food & Beverage Manufacturing"
                ].map((industry, index) => (
                  <li key={index} className="flex items-center text-slate-700 bg-slate-50 p-2 rounded text-sm hover:bg-secondary hover:text-white transition-colors group cursor-default">
                    <div className="w-2 h-2 rounded-full bg-secondary group-hover:bg-white mr-3 shrink-0"></div>
                    <span className="font-medium">{industry}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-slate-400 mt-4 italic">Our instruments are designed to perform reliably in harsh industrial environments.</p>
            </motion.div>

            {/* Our Product Range */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-sm border border-slate-200"
            >
              <h3 className="text-xl font-bold text-primary mb-4 pb-2 border-b border-slate-100">Our Product Range</h3>
              <p className="text-sm text-slate-500 mb-4 tracking-wide">We specialize in a wide range of flow measurement instruments, including:</p>
              <ul className="space-y-3">
                {[
                  "Glass Tube Rotameter (Type 1, 2, 3)",
                  "Metal Tube Rotameter",
                  "Acrylic & Polycarbonate Rotameters",
                  "Low Flow Rotameters",
                  "Bypass Rotameters",
                  "Orifice Plates & Flange Assemblies",
                  "Level Indicators & Switches",
                  "Industrial Sight Glasses"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-slate-700 text-sm">
                    <CheckCircle2 size={16} className="text-accent mr-3 shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-slate-400 mt-4 italic">Each product is engineered for accuracy, durability, and ease of operation.</p>
            </motion.div>

            {/* Contact Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 border-t-4 border-t-primary"
            >
              <h3 className="text-xl font-bold text-primary mb-5">Contact Flowtech Engineers</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin size={20} className="mr-3 text-secondary shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-600 leading-relaxed">
                    105, Krushna Laxmi Industrial Premises,<br/>
                    Vartak Nagar, Thane, Mumbai &ndash; 400606, India
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone size={20} className="mr-3 text-secondary shrink-0" />
                  <span className="text-sm text-slate-600 font-medium">+91 99201 31677</span>
                </li>
                <li className="flex items-center">
                  <Mail size={20} className="mr-3 text-secondary shrink-0" />
                  <span className="text-sm text-slate-600 font-medium">flowtechengineers.mumbai<wbr/>@gmail.com</span>
                </li>
              </ul>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
