import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './HeroIntro2.css'; // Still using your external styles

const title = "ENACTUS";
const subtitle = "Empowering the Future, One Step at a Time";

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
      damping: 15,
    },
  }),
};

export default function HeroIntro2() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="hero-container">
      <video
          src="images/enactusvideo2.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="hero-video"
      />

      <div className="overlay">
        <div className="title-logo-container">
          {/* Logo */}
          <motion.img
              src="images/logo.png"
            alt="Enactus Logo"
            className="logo"
            initial={{ rotate: -10, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          />

          {/* Title */}
          <div className="hero-title">
            {[...title].map((char, index) => (
              <motion.span
                key={index}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={letterVariants}
                whileHover={{
                  scale: 1.2,
                  color: '#FFD700',
                  textShadow: '0 0 12px #FFD700',
                }}
                className="hero-letter"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                {char}
              </motion.span>
            ))}
          </div>

          {/* Animated underline */}
          <motion.div
            className="underline"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ delay: 1.2, duration: 0.8 }}
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="subtitle"
        >
          {subtitle}
        </motion.p>
      </div>
    </div>
  );
}
