import { motion } from 'framer-motion';
import { Server, Globe, Wrench, Code2 } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Globe,
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Next.js', 'HTML5/CSS3'],
    color: 'cyan'
  },
  {
    title: 'Backend & Systems',
    icon: Server,
    skills: ['Node.js', 'Electron', 'Python', 'SQLite', 'REST APIs', 'Express'],
    color: 'purple'
  },
  {
    title: 'Tools & DevOps',
    icon: Wrench,
    skills: ['Git', 'GitHub', 'VS Code', 'Vite', 'npm/yarn', 'Vercel'],
    color: 'blue'
  }
];

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-cyan-400 font-medium text-sm uppercase tracking-widest mb-4 block">About Me</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Passion Meets <span className="gradient-text">Purpose</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4"
          >
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden border-2 border-zinc-800 shadow-2xl shadow-cyan-500/10">
                <img 
                  src="/images/profile.jpg" 
                  alt="Abhishek Gupta"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-2xl -z-10 opacity-50 blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl -z-10 opacity-30 blur-xl" />
            </div>
          </motion.div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8 space-y-6"
          >
            <div className="glass-card p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">The Developer</h3>
              </div>
              
              <p className="text-zinc-400 leading-relaxed mb-4">
                I'm a <span className="text-white font-medium">Full Stack Developer</span> with a deep passion for creating 
                software that solves real-world problems. My journey spans from crafting pixel-perfect interfaces to 
                architecting robust backend systems.
              </p>
              
              <p className="text-zinc-400 leading-relaxed mb-4">
                With projects like <span className="text-cyan-400">TIXO</span> and <span className="text-cyan-400">HER</span>, 
                I've explored the intersection of modern web technologies and desktop applications, always pushing 
                the boundaries of what's possible.
              </p>

              <p className="text-zinc-400 leading-relaxed">
                I believe in writing clean, maintainable code and staying curious about emerging technologies. 
                Every project is an opportunity to learn something new and create something meaningful.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="glass-card p-5 h-full hover-lift">
                    <div className="flex items-center gap-2 mb-3">
                      <div className={`p-2 rounded-lg ${
                        category.color === 'cyan' ? 'bg-cyan-500/10 text-cyan-400' :
                        category.color === 'purple' ? 'bg-purple-500/10 text-purple-400' :
                        'bg-blue-500/10 text-blue-400'
                      }`}>
                        <category.icon className="w-4 h-4" />
                      </div>
                      <h4 className="font-semibold text-white text-sm">{category.title}</h4>
                    </div>
                    
                    <div className="flex flex-wrap gap-1.5">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className={`px-2 py-1 text-xs rounded border ${
                            category.color === 'cyan' 
                              ? 'bg-cyan-500/5 border-cyan-500/20 text-cyan-400' 
                              : category.color === 'purple'
                              ? 'bg-purple-500/5 border-purple-500/20 text-purple-400'
                              : 'bg-blue-500/5 border-blue-500/20 text-blue-400'
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
