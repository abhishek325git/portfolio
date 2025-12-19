import { motion } from 'framer-motion';
import { Server, Wrench, Globe } from 'lucide-react';

const skills = [
  {
    category: "Frontend",
    icon: <Globe className="w-6 h-6" />,
    items: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML5", "CSS3", "Vite"]
  },
  {
    category: "Backend & Systems",
    icon: <Server className="w-6 h-6" />,
    items: ["Node.js", "Electron", "SQLite", "REST APIs", "Python", "SQL"]
  },
  {
    category: "Tools & DevOps",
    icon: <Wrench className="w-6 h-6" />,
    items: ["Git", "GitHub", "VS Code", "Postman", "Chrome DevTools", "npm/yarn"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-slate-950/50 skew-y-3 transform origin-top-left z-0" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Beyond the <span className="text-primary">Code</span>
            </h2>
            <p className="text-slate-400 text-lg mb-6 leading-relaxed text-justify">
              I'm not just a developer; I'm a creator who loves building software that solves real-world problems. 
              My journey involves exploring the intersection of modern web technologies and desktop applications, 
              as seen in my work with <span className="text-white font-medium">TIXO</span> and <span className="text-white font-medium">HER</span>.
            </p>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed text-justify">
              Whether it's crafting pixel-perfect UIs with Tailwind or architecting local-first data solutions with SQLite, 
              I strive for excellence in every commit. I'm always eager to learn new tools and push the boundaries of what's possible on the web.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span 
                      key={item} 
                      className="px-3 py-1 bg-slate-900 text-slate-300 rounded-md text-sm border border-slate-800 hover:border-primary hover:text-primary transition-all cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
