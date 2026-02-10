import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { Code, Palette, Smartphone, Database, Mail, Github, Linkedin, MessageCircle } from 'lucide-react';
import { Background3D } from './components/Background3D';
import { Navigation } from './components/Navigation';
import { ProjectCard } from './components/ProjectCard';
import { SkillCard } from './components/SkillCard';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import profile from './components/figma/profile-pic.jpg';
import qrScanner from './components/figma/QRScanner-project.png';
import PdfProject from './components/figma/Pdfmaker-project.png';
import aiProject from './components/figma/AI-chatbot-project.png';

function TypingText({
  text,
  className,
  start,
  speed = 25,
  onComplete,
}: {
  text: string;
  className?: string;
  start: boolean;
  speed?: number;
  onComplete?: () => void;
}) {
  const [visibleChars, setVisibleChars] = useState(0);

  useEffect(() => {
    if (!start) return;
    if (visibleChars >= text.length) {
      if (onComplete) onComplete();
      return;
    }

    const timeout = setTimeout(() => {
      setVisibleChars((prev) => prev + 1);
    }, speed);

    return () => clearTimeout(timeout);
  }, [start, text, visibleChars, speed, onComplete]);

  const isDone = visibleChars >= text.length;

  return (
    <p className={className}>
      {text.slice(0, visibleChars)}
      {!isDone && <span className="inline-block w-1 ml-1 bg-red-500 animate-pulse align-baseline" />}
    </p>
  );
}

function AboutContent() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-20% 0px' });
  const [firstDone, setFirstDone] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8 }}
      className="text-center"
    >
      <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
        About Me
      </h2>
      <div className="bg-gradient-to-br from-red-900/30 to-black/30 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-red-500/10 shadow-2xl">
        <TypingText
          start={isInView}
          className="text-lg md:text-xl text-white/80 leading-relaxed mb-6"
          text="I'm a full‑stack developer who loves turning real problems into clean, fast, and beautiful digital experiences. From QR scanners and PDF generators to AI chat bots, I enjoy building products that feel simple on the surface but are powered by solid engineering underneath."
          onComplete={() => setFirstDone(true)}
        />
        <TypingText
          start={isInView && firstDone}
          className="text-lg md:text-xl text-white/80 leading-relaxed"
          speed={18}
          text="I work across the stack with React, Next.js, TypeScript, Node.js, Python, PostgreSQL, MongoDB, and modern mobile frameworks like React Native and Flutter, GOLang while bringing a strong focus on design with Figma, UI/UX, and 3D visuals. My goal in every project is the same: ship reliable, scalable features that look great, feel smooth, and create a memorable experience for users."
        />
      </div>
    </motion.div>
  );
}

export default function App() {
  const [glowPos, setGlowPos] = useState<{ x: number; y: number } | null>(null);
  const glowContainerRef = useRef<HTMLSpanElement>(null);

  const contactLinks = {
    email: 'mailto:khemasai883@gmail.com',
    github: 'https://github.com/director-ram',
    linkedin: 'https://www.linkedin.com/in/hema-sai-8b068229b/',
    // WhatsApp link must NOT contain '+' or spaces in the number
    whatsapp: 'https://wa.me/919391763277',
    portfolio: 'https://portfolio-sigma-black-77.vercel.app/',
  };

  const projects = [
    {
      title: 'QR SCANNER',
      description: 'A responsive browser-based QR Code generator and scanner built with HTML5. Users can generate QR codes for custom content and scan real-world QR codes using their device camera — all without installing additional software. The app leverages modern web APIs to deliver fast, secure, and privacy-preserving QR code operations and is deployed live using Netlify.',
      image: qrScanner,
      liveUrl: 'https://hag-qrscanner.netlify.app/',
      codeUrl: 'https://github.com/director-ram/quick-qr-decode.git',
      technologies: ['React + TypeScript', 'Node.js', 'PostgreSQL', 'Firebase'],
    },
    {
      title: 'PDF MAKER',
      description: 'A responsive web application that allows users to upload images (JPG, PNG, GIF, etc.), edit and reorder them, and instantly convert them into a high-quality PDF document — all within the browser. Built with performance and ease-of-use in mind, this tool showcases modern frontend techniques for file processing and browser-based conversion.',
      image: PdfProject,
      liveUrl: 'https://hemasaipdfmaker.vercel.app/',
      codeUrl: 'https://github.com/director-ram/image-to-pdf-generator.git',
      technologies: ['TypeScript', 'Next.js', 'WebSocket', 'HTML5', 'Tailwind CSS'],
    },
    {
      title: 'SubjectChat-AI Tutor',
      description: 'SubjectChat is a full-stack, privacy-focused AI tutor that delivers subject-specific teaching through conversation. Features include next-question recommendations, subject-wise persistent history, and a feedback loop to evaluate and refine responses. The project demonstrates authentication, database modeling, LLM integration, and production-style orchestration via Docker Compose',
      image: aiProject,
      liveUrl: 'Yet to be deployed',
      codeUrl: 'https://github.com/director-ram/SubjectChat-AItutor.git',
      technologies: ['React Native', 'Redux', 'GraphQL', 'Python', 'Llama-3.2'],
    },
  ];

  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript'],
    },
    {
      icon: Database,
      title: 'Backend',
      skills: ['Node.js', 'PostgreSQL', 'MongoDB', 'REST APIs', 'Golang'],
    },
    {
      icon: Smartphone,
      title: 'Mobile',
      skills: ['React Native', 'iOS & Android', 'Expo', 'Native APIs', 'Flutter'],
    },
    {
      icon: Palette,
      title: 'Design',
      skills: ['Figma', 'UI/UX Design', '3D Graphics', 'Prototyping'],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Background3D />
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-32">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-6xl md:text-8xl font-bold mb-6"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent">
                FullStack Developer
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Crafting immersive digital experiences with cutting-edge <br /><span className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent">web technologies</span> and 3D design and integrating <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent">AI</span> in web applications
            </motion.p>

            <motion.div
              className="flex gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-red-500/50 transition-all hover:scale-105"
              >
                View My Work
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full text-lg font-semibold border border-white/20 hover:bg-white/20 transition-all hover:scale-105"
              >
                Get In Touch
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Profile Image Section */}
      <section className="relative py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
          >
            <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-red-500/30 shadow-2xl shadow-red-500/20 hover:shadow-red-500/40 transition-all duration-500 hover:scale-105">
              <ImageWithFallback
                src={profile}
                alt="Profile"
                className="w-full h-full object-cover"
              />
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/40 to-transparent pointer-events-none"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32 px-6">
        <div className="container mx-auto max-w-4xl">
          <AboutContent />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-32 px-6">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent"
          >
            Featured Projects
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-32 px-6">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent"
          >
            Skills & Expertise
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <SkillCard key={index} {...category} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              Let's Connect
            </h2>

            <div className="bg-gradient-to-br from-red-900/30 to-black/30 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-red-500/10 shadow-2xl">
              <p className="text-lg md:text-xl text-white/80 mb-8">
                Interested in collaborating or have a project in mind? I'd love to hear from you!
              </p>

              <div className="flex justify-center gap-6 mb-8">
                <motion.a
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  href={contactLinks.email}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-red-500/50 transition-all"
                >
                  <Mail size={24} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  href={contactLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-red-500/50 transition-all"
                >
                  <Github size={24} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  href={contactLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-red-500/50 transition-all"
                >
                  <Linkedin size={24} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  href={contactLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-red-500/50 transition-all"
                >
                  <MessageCircle size={24} />
                </motion.a>
              </div>

              <a
                href={contactLinks.email}
                className="inline-block px-8 py-4 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-red-500/50 transition-all hover:scale-105"
              >
                Connect for Work
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-6 border-t border-red-500/10">
        <div className="container mx-auto text-center text-white/60">
          <p>
            © {new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long' })} My Portfolio. Open for
            open for opportunities, collaborations and freelance work. With 💝 ;)
            <br />
            <span ref={glowContainerRef} className="relative inline-block pl-8">
              {glowPos && (
                <span
                  className="absolute inset-0 z-0 rounded-lg pointer-events-none"
                  style={{
                    background: `radial-gradient(circle 50px at ${glowPos.x}px ${glowPos.y}px, rgba(239,68,68,0.35), transparent 70%)`,
                  }}
                />
              )}
              <span className="relative z-10 font-bold">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href={contactLinks.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-red-500 hover:text-red-500"
                  onMouseMove={(e) => {
                    const rect = glowContainerRef.current?.getBoundingClientRect();
                    if (rect) setGlowPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
                  }}
                  onMouseLeave={() => setGlowPos(null)}
                >
                  -Hemasai
                </motion.a>
              </span>
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
}