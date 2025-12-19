import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, Send, Sparkles, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

// Formspree Configuration
// 1. Go to https://formspree.io/ and sign up (free)
// 2. Create a new form and get your form ID
// 3. Replace the ID below with yours
const FORMSPREE_FORM_ID = 'mqezawrw'; // Replace with your Formspree form ID

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email || !formData.message) {
      setErrorMessage('Please fill in your email and message');
      setStatus('error');
      return;
    }

    setStatus('sending');
    setErrorMessage('');

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name || 'Website Visitor',
          email: formData.email,
          message: formData.message,
          _replyto: formData.email,
          _subject: `Portfolio Contact from ${formData.name || 'Website Visitor'}`
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Email send error:', error);
      setErrorMessage('Failed to send message. Please try again or email directly.');
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-cyan-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 font-medium text-sm uppercase tracking-widest mb-4 block">Contact</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-lg">
            Have a project in mind or just want to chat? I'm always open to discussing new opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-cyan-500/10">
                  <Sparkles className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">Get In Touch</h3>
              </div>
              
              <p className="text-zinc-400 leading-relaxed mb-8">
                I'm currently looking for new opportunities. Whether you have a question, 
                a project idea, or just want to say hi, my inbox is always open!
              </p>

              {/* Contact Links */}
              <div className="space-y-4">
                <a
                  href="mailto:abhisheksworkuk@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl border border-zinc-800 hover:border-cyan-400/50 hover:bg-cyan-400/5 transition-all group"
                >
                  <div className="p-3 rounded-lg bg-zinc-800 group-hover:bg-cyan-500/10 transition-colors">
                    <Mail className="w-5 h-5 text-zinc-400 group-hover:text-cyan-400 transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500">Email</p>
                    <p className="text-white group-hover:text-cyan-400 transition-colors">abhisheksworkuk@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+919354905230"
                  className="flex items-center gap-4 p-4 rounded-xl border border-zinc-800 hover:border-green-400/50 hover:bg-green-400/5 transition-all group"
                >
                  <div className="p-3 rounded-lg bg-zinc-800 group-hover:bg-green-500/10 transition-colors">
                    <Phone className="w-5 h-5 text-zinc-400 group-hover:text-green-400 transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500">Phone</p>
                    <p className="text-white group-hover:text-green-400 transition-colors">+91 93549 05230</p>
                  </div>
                </a>

                <a
                  href="https://github.com/abhishek325git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-zinc-800 hover:border-purple-400/50 hover:bg-purple-400/5 transition-all group"
                >
                  <div className="p-3 rounded-lg bg-zinc-800 group-hover:bg-purple-500/10 transition-colors">
                    <Github className="w-5 h-5 text-zinc-400 group-hover:text-purple-400 transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500">GitHub</p>
                    <p className="text-white group-hover:text-purple-400 transition-colors">@abhishek325git</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/abhishek-gupta-8112a4167/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-zinc-800 hover:border-blue-400/50 hover:bg-blue-400/5 transition-all group"
                >
                  <div className="p-3 rounded-lg bg-zinc-800 group-hover:bg-blue-500/10 transition-colors">
                    <Linkedin className="w-5 h-5 text-zinc-400 group-hover:text-blue-400 transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500">LinkedIn</p>
                    <p className="text-white group-hover:text-blue-400 transition-colors">Abhishek Gupta</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form 
              className="glass-card p-8 space-y-6"
              onSubmit={handleSubmit}
            >
              {/* Success Message */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/30"
                >
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <p className="text-green-400">Message sent successfully! I'll get back to you soon.</p>
                </motion.div>
              )}

              {/* Error Message */}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/30"
                >
                  <AlertCircle className="w-5 h-5 text-red-400" />
                  <p className="text-red-400">{errorMessage}</p>
                </motion.div>
              )}

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-xl text-white placeholder-zinc-600 focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20 outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
                  Your Email <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-xl text-white placeholder-zinc-600 focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20 outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-xl text-white placeholder-zinc-600 focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20 outline-none transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
