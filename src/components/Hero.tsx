import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, ArrowDown } from 'lucide-react';
import React from 'react';

export default function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-primary-500 via-accent-500 to-primary-600 dark:from-primary-900 dark:via-accent-800 dark:to-primary-900">
      {/* Animated geometric background patterns */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDYwIEwgNjAgMCIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>

      {/* Animated particle elements */}
      <ParticleBackground />

      <div className="container relative mx-auto px-4 py-16 flex flex-col justify-center min-h-screen">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-white"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6 border border-white/20"
            >
              <motion.span
                animate={{
                  opacity: [1, 0.5, 1],
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block mr-2"
              >
                👋
              </motion.span>
              Welcome to my portfolio
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-primary-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Hi, I'm{' '}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="relative inline-block"
              >
                <span className="relative z-10">Brijesh Adeshara</span>
                <motion.span
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  className="absolute bottom-2 left-0 h-3 bg-accent-500/30 z-0"
                ></motion.span>
              </motion.span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <motion.p
                className="text-2xl text-primary-100 mb-6"
                animate={{
                  opacity: [0.7, 1, 0.7],
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              >
                <TypewriterEffect text="Software Developer & IT Student" />
              </motion.p>
            </motion.div>

            <motion.p
              className="text-lg text-primary-50/80 mb-8 max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Passionate about building efficient, user-friendly, and scalable
              applications. Currently pursuing B.Tech in Information Technology
              at Ganpat University.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <motion.a
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/AdesharaBrijesh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-primary-600 hover:bg-primary-50 transition-all"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </motion.a>

              <motion.a
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/brijesh-adeshara-3bba2322b/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all backdrop-blur-sm border border-white/10"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </motion.a>

              <motion.a
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                }}
                whileTap={{ scale: 0.95 }}
                href="mailto:adesharabrijesh8@outlook.com"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all backdrop-blur-sm border border-white/10"
              >
                <Mail className="w-5 h-5" />
                <span>Email</span>
              </motion.a>
            </motion.div>

            <motion.div
              className="flex items-center text-primary-50/80 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm inline-flex border border-white/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              <MapPin className="w-5 h-5 mr-2" />
              <span>Ahmedabad, Gujarat</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative"
          >
            <div className="absolute inset-0 bg-gradient-radial from-accent-500/30 to-transparent blur-3xl"></div>
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotateZ: [0, 2, 0, -2, 0],
              }}
              transition={{
                y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
                rotateZ: { duration: 10, repeat: Infinity, ease: 'easeInOut' },
              }}
              className="relative"
            >
              <motion.div
                className="absolute -inset-10 bg-accent-500/20 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              />
              <img
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=600&h=600"
                alt="Professional headshot placeholder"
                className="rounded-3xl w-64 h-64 md:w-96 md:h-96 object-cover mx-auto shadow-2xl ring-4 ring-white/20"
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-accent-500/20 to-transparent"></div>

              {/* Decorative elements around the image */}
              <motion.div
                className="absolute -top-6 -right-6 w-12 h-12 bg-primary-300/30 rounded-full backdrop-blur-sm border border-white/20"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 10, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-8 -left-6 w-16 h-16 bg-accent-300/30 rounded-full backdrop-blur-sm border border-white/20"
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -360],
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 12, repeat: Infinity, delay: 0.5 }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="flex flex-col items-center cursor-pointer"
            whileHover={{ scale: 1.1 }}
            onClick={() =>
              window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth',
              })
            }
          >
            <span className="text-white/70 text-sm mb-2">Scroll Down</span>
            <ArrowDown className="w-6 h-6 text-white/70" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Typewriter effect component
function TypewriterEffect({ text }) {
  const [displayText, setDisplayText] = React.useState('');
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return (
    <span>
      {displayText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-1 h-6 bg-white ml-1"
      />
    </span>
  );
}

// Background particle effect
function ParticleBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {Array.from({ length: 20 }).map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-2 h-2 rounded-full bg-white/30"
          initial={{
            x: Math.random() * 100 + '%',
            y: Math.random() * 100 + '%',
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            x: [
              Math.random() * 100 + '%',
              Math.random() * 100 + '%',
              Math.random() * 100 + '%',
            ],
            y: [
              Math.random() * 100 + '%',
              Math.random() * 100 + '%',
              Math.random() * 100 + '%',
            ],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: Math.random() * 20 + 20,
            repeat: Infinity,
            repeatType: 'loop',
          }}
        />
      ))}
    </div>
  );
}
