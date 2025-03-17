import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-500 via-accent-500 to-primary-600 dark:from-primary-900 dark:via-accent-800 dark:to-primary-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-primary-50">Let's work together on something amazing</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href="mailto:adesharabrijesh8@outlook.com"
                  className="flex items-center gap-4 hover:text-primary-200 transition-colors"
                >
                  <div className="p-3 rounded-lg bg-white/10">
                    <Mail className="w-6 h-6" />
                  </div>
                  <span>adesharabrijesh8@outlook.com</span>
                </motion.a>
                
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href="tel:+919510667912"
                  className="flex items-center gap-4 hover:text-primary-200 transition-colors"
                >
                  <div className="p-3 rounded-lg bg-white/10">
                    <Phone className="w-6 h-6" />
                  </div>
                  <span>+91 95106 67912</span>
                </motion.a>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-white/10">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <span>Ahmedabad, Gujarat</span>
                </div>
              </div>
              
              <div className="flex gap-4 mt-8">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://github.com/AdesharaBrijesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <Github className="w-6 h-6" />
                </motion.a>
                
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://www.linkedin.com/in/brijesh-adeshara-3bba2322b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </motion.a>
              </div>
            </div>
          </motion.div>
          
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 backdrop-blur-md rounded-xl p-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-white/20"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-white/20"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-white/20"
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-white text-primary-600 py-3 px-6 rounded-lg font-medium hover:bg-primary-50 transition-colors"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}