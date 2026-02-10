import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  codeUrl?: string;
  index: number;
}

export function ProjectCard({ title, description, image, technologies, liveUrl, codeUrl, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        rotateY: 5,
        rotateX: -5,
        scale: 1.05,
      }}
      className="relative group perspective-1000"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="relative bg-gradient-to-br from-red-900/40 to-black/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-red-500/10 shadow-2xl">
        {/* Image */}
        <div className="relative h-64 overflow-hidden">
          <ImageWithFallback
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            unsplashId={title}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <p className="text-white/70 mb-4">{description}</p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 text-sm bg-white/10 backdrop-blur-sm rounded-full text-white/80 border border-red-500/20"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4">
            {liveUrl && (
              liveUrl === 'Yet to be deployed' ? (
                <p className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-600 to-red-800 rounded-lg text-white hover:shadow-lg hover:shadow-red-500/50 transition-all">Not yet live</p>
              ) : (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-600 to-red-800 rounded-lg text-white hover:shadow-lg hover:shadow-red-500/50 transition-all"
                >
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
                </a>
              )
            )}
            {codeUrl && (
              <a
                href={codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white border border-red-500/20 hover:bg-white/20 transition-all"
              >
                <Github size={16} />
                <span>Code</span>
              </a>
            )}
          </div>
        </div>

        {/* 3D Effect Overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(239, 68, 68, 0.2), transparent 50%)',
          }}
        ></div>
      </div>
    </motion.div>
  );
}