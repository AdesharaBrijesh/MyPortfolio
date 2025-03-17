import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Code2,
  Database,
  Layout,
  Server,
  ChevronRight,
  Star,
} from 'lucide-react';
import React, { useState } from 'react';

const skills = {
  'Programming Languages': {
    icon: Code2,
    color: 'from-blue-500 to-purple-600',
    textColor: 'blue-600',
    skills: [
      { name: 'JavaScript', proficiency: 90 },
      { name: 'Python', proficiency: 85 },
      { name: 'PHP', proficiency: 80 },
    ],
  },
  'Frontend Development': {
    icon: Layout,
    color: 'from-teal-500 to-green-600',
    textColor: 'teal-600',
    skills: [
      { name: 'React', proficiency: 88 },
      { name: 'HTML5', proficiency: 95 },
      { name: 'CSS3', proficiency: 90 },
      { name: 'Tailwind CSS', proficiency: 85 },
    ],
  },
  'Backend Development': {
    icon: Server,
    color: 'from-red-500 to-orange-600',
    textColor: 'red-600',
    skills: [
      { name: 'Flask', proficiency: 82 },
      { name: 'Node.js', proficiency: 85 },
      { name: 'Express', proficiency: 80 },
    ],
  },
  Databases: {
    icon: Database,
    color: 'from-indigo-500 to-purple-600',
    textColor: 'indigo-600',
    skills: [
      { name: 'MongoDB', proficiency: 85 },
      { name: 'MySQL', proficiency: 88 },
    ],
  },
};

function SkillCategory({ title, data, index }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isHovered, setIsHovered] = useState(false);
  const Icon = data.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="group bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="flex items-center gap-4 mb-6"
        whileHover={{ x: 5 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      >
        <motion.div
          className={`p-3 rounded-lg bg-gradient-to-br ${data.color} text-white transform transition-all duration-300`}
          animate={
            isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }
          }
        >
          <Icon className="w-6 h-6" />
        </motion.div>
        <h3
          className={`text-2xl font-bold bg-gradient-to-r ${data.color} bg-clip-text text-transparent`}
        >
          {title}
        </h3>
      </motion.div>
      <div className="space-y-6">
        {data.skills.map((skill, skillIndex) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-2">
              <motion.span
                className="text-gray-700 dark:text-gray-300 font-medium flex items-center"
                whileHover={{ x: 5 }}
              >
                <motion.span
                  animate={isHovered ? { x: 3 } : { x: 0 }}
                  transition={{ delay: skillIndex * 0.1 }}
                >
                  <ChevronRight className="w-4 h-4 inline mr-1 text-accent-500" />
                </motion.span>
                {skill.name}
              </motion.span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={
                      inView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0 }
                    }
                    transition={{ delay: 0.5 + skillIndex * 0.1 + i * 0.05 }}
                  >
                    <Star
                      className={`w-4 h-4 ${
                        i < Math.round(skill.proficiency / 20)
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  </motion.span>
                ))}
              </div>
            </div>
            <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={
                  inView ? { width: `${skill.proficiency}%` } : { width: 0 }
                }
                transition={{
                  duration: 1,
                  delay: skillIndex * 0.1,
                  ease: 'easeOut',
                }}
                className={`h-full rounded-full bg-gradient-to-r ${data.color}`}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Interactive floating elements */}
      <div className="absolute -z-10">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full bg-gradient-to-r ${data.color} opacity-10 blur-lg`}
            style={{
              width: 20 + i * 15,
              height: 20 + i * 15,
              left: 30 + i * 100,
              top: 20 + i * 40,
            }}
            animate={{
              x: [0, 10, -10, 0],
              y: [0, 15, 5, 0],
              scale: [1, 1.1, 0.9, 1],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  // For the floating background elements
  const floatingElements = Array.from({ length: 5 }).map((_, i) => ({
    size: 20 + Math.random() * 30,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 5 + Math.random() * 10,
  }));

  return (
    <section className="py-20 bg-gradient-to-br from-accent-50 to-primary-50 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Decorative background elements */}
      {floatingElements.map((el, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-r from-primary-500/10 to-accent-500/10 blur-3xl -z-10"
          style={{
            width: el.size,
            height: el.size,
            left: `${el.left}%`,
            top: `${el.top}%`,
          }}
          animate={{
            x: [0, 30, -30, 0],
            y: [0, 20, -20, 0],
            scale: [1, 1.2, 0.8, 1],
            opacity: [0.3, 0.5, 0.3, 0.3],
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            delay: el.delay,
          }}
        />
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100px' }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mt-4 mb-6 rounded-full"
          />
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Technologies I work with
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, data], index) => (
            <SkillCategory
              key={category}
              title={category}
              data={data}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
