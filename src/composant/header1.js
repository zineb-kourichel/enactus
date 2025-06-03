import React from 'react';
import { motion } from 'framer-motion';

const title = "ENACTUS";
const subtitle = "Empowering the Next Generation";

const letterVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      type: 'spring',
      stiffness: 100,
      damping: 8,
    },
  }),
};

export default function HeroIntro() {
  return (
    <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      {/* Video Background */}
      <video
        src="/images/enactusvideo2.mp4"
        autoPlay
        muted
        loop
        playsInline
        style={{
          width: '100%',
          height: '100vh',
          objectFit: 'cover',
          display: 'block',
        }}
      />

      {/* Cinematic Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.6)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 2,
        }}
      >
        {/* Bold Title Animation */}
        <div style={{ display: 'flex', gap: '0.2em' }}>
          {[...title].map((char, index) => (
            <motion.span
              key={index}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={letterVariants}
              style={{
                fontSize: '5rem',
                fontWeight: '900',
                color: '#FFD700',
                textShadow: '0 0 20px #FFD700',
              }}
            >
              {char}
            </motion.span>
          ))}
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          style={{
            marginTop: '1.5rem',
            fontSize: '1.5rem',
            color: '#fff',
            letterSpacing: '1px',
          }}
        >
          {subtitle}
        </motion.p>
      </div>
    </div>
  );
}
