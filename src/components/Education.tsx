import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const nsutImages = [
  { src: '/images/nsut-1.png', alt: 'NSUT Main Building Entrance' },
  { src: '/images/nsut-2.png', alt: 'NSUT Main Gate at Night' },
  { src: '/images/nsut-3.jpg', alt: 'NSUT Campus Fountain' },
  { src: '/images/nsut-4.jpg', alt: 'NSUT Campus Aerial View' },
];

const Education = () => {
  return (
    <section id="education" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 font-medium text-sm uppercase tracking-widest mb-4 block">Education</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Academic <span className="gradient-text">Journey</span>
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* NSUT Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card overflow-hidden"
          >
            {/* Image Gallery */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
              {nsutImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="aspect-video bg-zinc-800 overflow-hidden group"
                >
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="flex flex-wrap items-start justify-between gap-6">
                {/* Main Info */}
                <div className="flex-1 min-w-[280px]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">NSUT</h3>
                      <p className="text-zinc-400">Netaji Subhas University of Technology</p>
                    </div>
                  </div>

                  <h4 className="text-xl font-semibold text-cyan-400 mb-4">
                    Bachelor of Technology (B.Tech)
                  </h4>

                  <p className="text-zinc-400 leading-relaxed mb-6">
                    Completed my undergraduate degree from one of Delhi's premier engineering institutions. 
                    Gained strong foundations in computer science, software development, and modern engineering practices.
                  </p>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 text-zinc-500">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">New Delhi, India</span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-500">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">Graduated</span>
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="glass-card p-6 min-w-[250px]">
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="w-5 h-5 text-cyan-400" />
                    <h5 className="font-semibold text-white">Highlights</h5>
                  </div>
                  <ul className="space-y-2 text-zinc-400 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      Strong foundation in CS fundamentals
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                      Hands-on project experience
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      Full-stack development skills
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                      Collaborative team projects
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
