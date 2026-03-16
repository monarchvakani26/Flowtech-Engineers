import { motion } from 'framer-motion';
import { Target, Compass, Award, ShieldCheck, Factory } from 'lucide-react';

const About = () => {
  return (
    <div className="w-full">
      {/* Hero Banner */}
      <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1920" 
            alt="About Flowtech Engineers" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary to-primary/80"></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
          >
            About Flowtech Engineers
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-24 h-1 bg-accent mx-auto rounded-full"
          ></motion.div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 text-lg text-slate-600 leading-relaxed"
            >
              <h2 className="text-3xl font-bold text-primary mb-8 relative inline-block">
                Company Overview
                <span className="absolute bottom-0 left-0 w-1/3 h-1 bg-secondary rounded-full transform translate-y-2"></span>
              </h2>
              <p>
                Founded with a vision to deliver unparalleled precision in industrial measurement, <strong>Flowtech Engineers</strong> has established itself as a cornerstone in the manufacturing and supply of process control instruments.
              </p>
              <p>
                Our expertise spans across the conceptualization, design, production, and quality assurance of comprehensive flow measurement systems. We serve a diverse clientele ranging from local chemical facilities to multi-national oil & gas conglomerates.
              </p>
              <p>
                We believe that accurate measurement is the heart of process efficiency. Every instrument that leaves our facility is a testament to our rigorous engineering standards and commitment to industrial excellence.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100"
              >
                <div className="text-secondary mb-4 bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-sm">
                  <Target size={28} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Our Mission</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  To provide the global industry with reliable, precise, and durable measurement solutions that optimize process control, enhance safety, and drive operational efficiency.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100 mt-0 sm:mt-12"
              >
                <div className="text-accent mb-4 bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-sm">
                  <Compass size={28} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Our Vision</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  To be recognized globally as the premier partner in flow measurement engineering, known for continuous innovation, unwavering quality, and customer-centric design.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Products Section */}
      <section className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">Why Choose Our Products</h2>
            <p className="text-slate-600 text-lg">
              Our instrumentation stands apart due to a stringent focus on material quality and calibration precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Factory size={32} />, title: "Industrial Quality", desc: "Manufactured for heavy-duty environments." },
              { icon: <Target size={32} />, title: "Precision Engineering", desc: "Calibrated to strict international tolerances." },
              { icon: <ShieldCheck size={32} />, title: "Durable Construction", desc: "Long lifecycle even in corrosive applications." },
              { icon: <Award size={32} />, title: "Trusted by Industries", desc: "Decades of proven reliable performance." }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-md border hover:border-secondary transition-colors group text-center"
              >
                <div className="mx-auto w-16 h-16 bg-blue-50 text-secondary rounded-full flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
