import { motion } from 'framer-motion';
import { ExternalLink, Github, Monitor, Cpu, ShoppingCart, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'TIXO',
    description: 'A modern movie information and ticketing platform featuring real-time data, rich visuals, and a seamless booking experience.',
    longDescription: 'Full-stack application with React frontend and Node.js backend, integrating movie APIs for real-time data.',
    tags: ['React', 'Node.js', 'Movie API', 'Vercel'],
    links: {
      github: 'https://github.com/abhishek325git/TIXO',
      live: 'https://tixo-two.vercel.app/',
    },
    gradient: 'from-orange-500 via-red-500 to-pink-500',
    icon: Monitor,
    image: '/images/tixo-hero.png',
  },
  {
    title: 'HER',
    description: 'A privacy-focused, local-first Personal AI Assistant for Windows with advanced tracking and memory capabilities.',
    longDescription: 'Built with Electron and TypeScript for high performance. Uses SQLite for local data storage ensuring complete privacy.',
    tags: ['Electron', 'TypeScript', 'SQLite', 'AI/ML'],
    links: {
      github: 'https://github.com/abhishek325git/HER',
      live: null,
    },
    gradient: 'from-cyan-500 via-blue-500 to-purple-500',
    icon: Cpu,
    image: '/images/her-dashboard.png',
  },
  {
    title: 'Kilangi Jewellery',
    description: 'A responsive e-commerce frontend with modern design patterns optimized for conversion and user experience.',
    longDescription: 'Clean, mobile-first design focusing on elegant product showcase and seamless shopping flow.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive'],
    links: {
      github: 'https://github.com/abhishek325git/ecommerceWeb',
      live: 'https://abhishek325git.github.io/ecommerceWeb/',
    },
    gradient: 'from-green-500 via-emerald-500 to-teal-500',
    icon: ShoppingCart,
    image: '/images/ecommerce.png',
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/50 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-cyan-400 font-medium text-sm uppercase tracking-widest mb-4 block">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            A selection of my work spanning web development, desktop applications, and AI-driven solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card overflow-hidden hover-lift">
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Image */}
                  <div className={`relative overflow-hidden aspect-video lg:aspect-auto ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`} />
                  </div>

                  {/* Content */}
                  <div className={`p-8 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    {/* Header with Icon */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient}`}>
                        <project.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex gap-2">
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 transition-all"
                          aria-label="View code"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                        {project.links.live && (
                          <a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg border border-zinc-800 text-zinc-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all"
                            aria-label="View live demo"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-zinc-400 mb-2 leading-relaxed">
                      {project.description}
                    </p>
                    <p className="text-zinc-500 text-sm mb-6">
                      {project.longDescription}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span key={tag} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* View Project Link */}
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors group/link"
                      >
                        View Live Project
                        <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
