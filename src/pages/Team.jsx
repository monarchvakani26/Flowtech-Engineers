import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';
import SEO from '../components/SEO';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Vaibhav Teredesai",
      role: "Founder and Director",
      description: "Leading Flowtech Engineers with a vision for industrial excellence and innovation."
    }
  ];

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      <SEO 
        title="Our Engineering Team | Flowtech Engineers" 
        description="Meet the technical minds and operations directors behind Flowtech Engineers. Decades of combined experience in industrial flow measurement." 
      />
      {/* Header Banner */}
      <section className="bg-primary pt-24 pb-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Meet Our Leadership Team
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-300 max-w-2xl mx-auto"
          >
            The engineering minds and operational backbone driving Flowtech's commitment to industrial excellence.
          </motion.p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 pb-24 relative z-20">
        <div className="max-w-md mx-auto">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden p-8 hover:shadow-2xl transition-all duration-300 text-center border-t-4 border-accent"
            >
              <div className="w-20 h-20 bg-primary/5 rounded-full mx-auto flex items-center justify-center mb-6 text-primary border-2 border-primary/10">
                <span className="text-3xl font-bold">{member.name.charAt(0)}</span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">{member.name}</h3>
              <p className="text-secondary font-medium text-base mb-6 tracking-wide">{member.role}</p>
              <div className="w-16 h-1 bg-slate-200 mx-auto mb-6 rounded-full"></div>
              <p className="text-slate-600 text-base leading-relaxed mb-8">
                {member.description}
              </p>
              
              <div className="flex items-center justify-center space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 hover:bg-secondary hover:text-white hover:border-secondary transition-colors">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 hover:bg-secondary hover:text-white hover:border-secondary transition-colors">
                  <Mail size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Team;
