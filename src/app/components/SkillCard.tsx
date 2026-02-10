import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  icon: LucideIcon;
  title: string;
  skills: string[];
  index: number;
}

export function SkillCard({ icon: Icon, title, skills, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        rotateY: 10,
        rotateZ: 2,
        scale: 1.05,
      }}
      className="relative group"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="relative bg-gradient-to-br from-red-900/30 to-black/30 backdrop-blur-md rounded-2xl p-8 border border-red-500/10 shadow-xl hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-300">
        {/* Icon */}
        <div className="relative mb-6">
          <motion.div
            animate={{
              rotateY: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="w-16 h-16 mx-auto bg-gradient-to-br from-red-600 to-red-800 rounded-2xl flex items-center justify-center shadow-lg"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <Icon className="text-white" size={32} />
          </motion.div>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-white text-center mb-4">{title}</h3>

        {/* Skills */}
        <div className="space-y-2">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + i * 0.05 }}
              className="flex items-center gap-2"
            >
              <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-red-700 rounded-full"></div>
              <span className="text-white/80">{skill}</span>
            </motion.div>
          ))}
        </div>

        {/* Glow effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/0 to-red-800/0 group-hover:from-red-500/10 group-hover:to-red-800/10 transition-all duration-300 pointer-events-none"></div>
      </div>
    </motion.div>
  );
}