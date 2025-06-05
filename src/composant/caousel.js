import { motion } from 'framer-motion';
import { useRef } from 'react';

const images = [
    "images/carousel/01.JPG",
    "images/carousel/04.JPG2",
    "images/carousel/05.JPG",
    "images/carousel/02.JPG",
    "images/carousel/06.JPG",
    "images/carousel/07.JPG",
    "images/carousel/03.JPG",
    "images/carousel/08.JPG",
    "images/carousel/09.JPG",
];

const InfiniteCarousel = () => {
  const containerRef = useRef(null);

  return (
    <div
      style={{
        overflow: 'hidden',
        width: '100%',
        height: '300px',
        position: 'relative',
        background: '#000', // avoid flashes
      }}
    >
      <motion.div
        ref={containerRef}
        style={{
          display: 'flex',
        }}
        animate={{ x: ['0%', '-50%'] }} // half, since we double the array
        transition={{
          duration: 20,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        {/* Duplicate the images */}
        {[...images, ...images].map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`carousel-img-${i}`}
            style={{
              height: '300px',
              width: 'auto',
              flexShrink: 0,
              objectFit: 'cover',
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteCarousel;
