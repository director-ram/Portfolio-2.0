import { motion } from 'motion/react';

export function Background3D() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Solid Black Background */}
      <div className="absolute inset-0 bg-black"></div>
      
      {/* Deep Layer - Most Blurred (Far background) */}
      <motion.div
        className="absolute top-10 left-10 w-96 h-96 bg-red-600/30 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 60, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-red-700/25 rounded-full blur-[150px]"
        animate={{
          scale: [1, 1.4, 1],
          x: [0, -50, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Middle Layer - Medium Blur (Mid-depth) */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-80 h-80 bg-red-500/40 rounded-full blur-[100px]"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -40, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-red-800/35 rounded-full blur-[90px]"
        animate={{
          scale: [1, 1.25, 1],
          x: [0, 45, 0],
          y: [0, -35, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Front Layer - Less Blur (Closer) */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-600/50 rounded-full blur-[60px]"
        animate={{
          scale: [1, 1.15, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* 3D Floating Elements with depth using CSS 3D transforms */}
      <div className="absolute inset-0" style={{ perspective: '2000px' }}>
        {/* Far depth */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-24 h-24 opacity-40"
          style={{ 
            transformStyle: 'preserve-3d',
            transform: 'translateZ(-400px)'
          }}
          animate={{
            rotateX: [0, 360],
            rotateY: [0, 360],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-red-600/40 to-black/40 backdrop-blur-md border border-red-500/20 rounded-2xl blur-[2px]"></div>
        </motion.div>

        {/* Mid depth */}
        <motion.div
          className="absolute top-2/3 right-1/3 w-32 h-32 opacity-60"
          style={{ 
            transformStyle: 'preserve-3d',
            transform: 'translateZ(-200px)'
          }}
          animate={{
            rotateX: [0, -360],
            rotateZ: [0, 360],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-red-500/50 to-black/50 backdrop-blur-md border border-red-500/30 rounded-2xl blur-[1px]"></div>
        </motion.div>

        {/* Close depth */}
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-40 h-40 opacity-80"
          style={{ 
            transformStyle: 'preserve-3d',
            transform: 'translateZ(-50px)'
          }}
          animate={{
            rotateY: [0, 360],
            rotateZ: [0, -360],
            x: [0, 35, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-red-700/60 to-black/60 backdrop-blur-md border border-red-500/40 rounded-2xl"></div>
        </motion.div>

        {/* Very close - sharp */}
        <motion.div
          className="absolute top-1/2 left-1/6 w-20 h-20 opacity-90"
          style={{ 
            transformStyle: 'preserve-3d',
            transform: 'translateZ(0px)'
          }}
          animate={{
            rotateX: [0, 360],
            rotateZ: [0, 360],
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-red-500/70 to-black/70 backdrop-blur-sm border border-red-500/50 rounded-2xl shadow-lg shadow-red-500/30"></div>
        </motion.div>
      </div>

      {/* Subtle Grid Pattern Overlay - Very faint for depth */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(239, 68, 68, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(239, 68, 68, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        ></div>
      </div>

      {/* Vignette effect for depth */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black opacity-60"></div>
    </div>
  );
}