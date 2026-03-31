import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../config/supabase';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = formDataState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  function formDataState(initial) {
    return useState(initial);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      if (!supabase) {
        setStatus({ type: 'error', message: 'Supabase client is not initialized. Please add environment variables.' });
        return;
      }
      const { error } = await supabase
        .from('contact_messages')
        .insert([{ 
          name: formData.name, 
          email: formData.email, 
          message: formData.message,
          created_at: new Date()
        }]);

      if (error) throw error;
      setStatus({ type: 'success', message: 'Message sent successfully!' });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      setStatus({ type: 'error', message: 'Something went wrong. Please try again later.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-foreground/[0.02] relative">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-sans tracking-tight">Get in <span className="text-secondary">Touch</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-primary rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start relative z-10">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">Let's Talk</h3>
              <p className="text-foreground/70 leading-relaxed mb-8">
                I'm currently available to take on new projects. Whether you have a question, a project in mind, or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className="space-y-6">
              <a href="mailto:jsanjayprakahjsanjayprakah@gmail.com" className="flex items-center gap-4 group p-4 glass rounded-2xl hover:bg-white/5 transition-colors cursor-pointer">
                <div className="p-3 bg-primary/10 text-primary rounded-full group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">Email Me</h4>
                  <p className="text-foreground/70 text-sm">jsanjayprakahjsanjayprakah@gmail.com</p>
                </div>
              </a>

              <a href="https://wa.me/917603951395" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group p-4 glass rounded-2xl hover:bg-white/5 transition-colors cursor-pointer">
                <div className="p-3 bg-secondary/10 text-secondary rounded-full group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-foreground group-hover:text-secondary transition-colors">WhatsApp Me</h4>
                  <p className="text-foreground/70 text-sm">+91 76039 51395</p>
                </div>
              </a>

               <div className="flex items-center gap-4 group p-4 glass rounded-2xl hover:bg-white/5 transition-colors">
                <div className="p-3 bg-primary/10 text-primary rounded-full group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-foreground">Location</h4>
                  <p className="text-foreground/70 text-sm">India</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass p-8 rounded-2xl relative"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-foreground/30 text-foreground"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-foreground/30 text-foreground"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-foreground/30 text-foreground resize-none"
                  placeholder="Hey, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" /> Send Message
                  </>
                )}
              </button>

              {status && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-sm text-center mt-4 ${status.type === 'success' ? 'text-green-400' : 'text-red-400'}`}
                >
                  {status.message}
                </motion.p>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
