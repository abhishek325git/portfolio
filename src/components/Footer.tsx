import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-zinc-950 border-t border-zinc-800/50 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold text-white mb-2 inline-block">
              <span className="text-cyan-400">&lt;</span>
              Abhishek
              <span className="text-cyan-400">/&gt;</span>
            </a>
            <p className="text-zinc-500 text-sm">
              © {currentYear} All rights reserved.
            </p>
          </div>

          {/* Made With */}
          <p className="text-zinc-500 text-sm flex items-center gap-1.5">
            Crafted with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> using React + Tailwind
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/abhishek325git"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-zinc-800 text-zinc-500 hover:text-cyan-400 hover:border-cyan-400/50 transition-all"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/abhishek-gupta-8112a4167/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-zinc-800 text-zinc-500 hover:text-blue-400 hover:border-blue-400/50 transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:abhisheksworkuk@gmail.com"
              className="p-2.5 rounded-lg border border-zinc-800 text-zinc-500 hover:text-green-400 hover:border-green-400/50 transition-all"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className="absolute right-6 -top-5 p-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all shadow-lg"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-4 h-4" />
      </button>
    </footer>
  );
};

export default Footer;
