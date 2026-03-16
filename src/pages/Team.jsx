import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Rohit Sharma",
      role: "Founder & Director",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
      description: "Visionary leader with 25+ years shaping Flowtech's industrial strategy."
    },
    {
      id: 2,
      name: "Meera Reddy",
      role: "Technical Head",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
      description: "Chief engineering architect overseeing instrument calibration and design."
    },
    {
      id: 3,
      name: "Amit Patel",
      role: "Operations Manager",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800",
      description: "Ensures seamless manufacturing processes and supply chain logic."
    },
    {
      id: 4,
      name: "Priya Desai",
      role: "Sales Manager",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800",
      description: "Drives client relations and international business expansion."
    }
  ];

  return (
    <div className="w-full bg-slate-50 min-h-screen">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary hover:bg-secondary hover:text-white transition-colors transform hover:-translate-y-1">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary hover:bg-secondary hover:text-white transition-colors transform hover:-translate-y-1">
                    <Mail size={20} />
                  </a>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-primary mb-1">{member.name}</h3>
                <p className="text-secondary font-medium text-sm mb-4 uppercase tracking-wider">{member.role}</p>
                <div className="w-12 h-1 bg-slate-200 mx-auto mb-4 rounded-full"></div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Team;
