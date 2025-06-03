import { motion } from 'framer-motion';
import { useRef } from 'react';

const images = [
  '/images/carousel/01.jpg',
  '/images/carousel/04.jpg',
  '/images/carousel/05.jpg',
  '/images/carousel/02.jpg',
  '/images/carousel/06.jpg',
  '/images/carousel/07.jpg',
  '/images/carousel/03.jpg',
  '/images/carousel/08.jpg',
  '/images/carousel/09.jpg',
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
