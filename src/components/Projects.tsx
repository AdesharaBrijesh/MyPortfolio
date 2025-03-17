import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  ExternalLink,
  Github,
  ChevronRight,
  Eye,
  Code,
  Tag,
} from 'lucide-react';
import React, { useState } from 'react';

const projects = [
  {
    title: 'Attendou',
    description:
      'Online attendance management system built with HTML, CSS (Bootstrap), JavaScript, PHP, and SQL. Features user authentication, attendance tracking, and reporting functionalities.',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
    github: 'https://github.com/AdesharaBrijesh/Attendou',
    live: null,
    tags: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
    color: 'from-blue-500 to-indigo-600',
  },
  {
    title: 'Parivar Travels',
    description:
      'Professional travel agency website created using HTML, CSS, and JavaScript. Designed for easy tour package exploration, trip booking, and customer interaction.',
    image:
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800',
    github: null,
    live: 'https://parivartravelsonline.in/',
    tags: ['HTML', 'CSS', 'JavaScript'],
    color: 'from-teal-500 to-green-600',
  },
  {
    title: 'TripSage',
    description:
      'Collaborative capstone project built with MERN stack featuring trip planning, real-time collaboration, Google Maps API integration, and weather forecasting.',
    image:
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800',
    github: 'https://github.com/AdesharaBrijesh/TripSage',
    live: null,
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    color: 'from-orange-500 to-red-600',
  },
];

function ProjectCard({ project, index }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"
          animate={isHovered ? { opacity: 0.9 } : { opacity: 0.6 }}
          transition={{ duration: 0.3 }}
        />

        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={
            isHovered
              ? { scale: 1.1, filter: 'brightness(0.8)' }
              : { scale: 1, filter: 'brightness(1)' }
          }
          transition={{ duration: 0.5 }}
        />

        <motion.div
          className="absolute bottom-4 left-4 z-20"
          animate={isHovered ? { y: -5 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-white mb-2 flex items-center">
            <motion.span
              animate={isHovered ? { x: 5 } : { x: 0 }}
              transition={{ duration: 0.3 }}
            >
              {project.title}
            </motion.span>
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <motion.span
                key={tag}
                className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white flex items-center gap-1"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: 'rgba(255,255,255,0.3)',
                }}
              >
                <Tag className="w-3 h-3" />
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="p-6">
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          {project.description}
        </p>
        <div className="flex gap-4">
          {project.github && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${project.color} text-white transition-all duration-300 shadow-md hover:shadow-lg`}
            >
              <Github className="w-5 h-5" />
              <span>View Code</span>
            </motion.a>
          )}
          {project.live && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent-500 to-accent-600 text-white transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <ExternalLink className="w-5 h-5" />
              <span>Live Demo</span>
            </motion.a>
          )}
        </div>
      </div>

      {/* Interactive overlay on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary-500/0 to-accent-500/0 pointer-events-none"
        animate={
          isHovered
            ? {
                opacity: 0.05,
                background: `linear-gradient(135deg, ${project.color
                  .replace('from-', '')
                  .replace('to-', '')})`,
              }
            : { opacity: 0 }
        }
        transition={{ duration: 0.3 }}
      />

      {/* Decorative corner element */}
      <motion.div
        className="absolute top-0 right-0 w-16 h-16 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.5 + index * 0.2 }}
      >
        <div
          className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-r ${project.color} transform rotate-45 translate-x-16 -translate-y-16`}
        ></div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  // For the background animated shapes
  const shapes = Array.from({ length: 6 }).map((_, i) => ({
    size: 100 + Math.random() * 200,
    x: Math.random() * 100,
    y: Math.random() * 100,
    rotation: Math.random() * 360,
    delay: Math.random() * 2,
    duration: 15 + Math.random() * 30,
  }));

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background animated shapes */}
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary-500/5 dark:bg-primary-500/10 blur-3xl -z-10"
          style={{
            width: shape.size,
            height: shape.size,
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            rotate: `${shape.rotation}deg`,
          }}
          animate={{
            x: [0, 50, -50, 0],
            y: [0, -30, 30, 0],
            rotate: [shape.rotation, shape.rotation + 180, shape.rotation],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            delay: shape.delay,
          }}
        />
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100px' }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mt-4 mb-6 rounded-full"
          />
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Check out some of my recent work
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* "View all projects" button */}
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.a
            href="#"
            className="group flex items-center gap-2 px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm text-primary-600 border border-primary-200 hover:bg-primary-50 transition-all duration-300 shadow-md hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View All Projects</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
