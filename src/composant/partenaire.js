import React, { useState } from 'react';
import '../custom.scss';

const logos = [
    '/images/partenaireslogo/eerchad.png',
    '/images/partenaireslogo/fsbm.png',
    '/images/partenaireslogo/imitech.png',
    '/images/partenaireslogo/injaz.png',
    '/images/partenaireslogo/pe2i.png',
    '/images/partenaireslogo/pie.png',
];

const visibleCount = 4; // Combien de logos visibles à la fois

function Partenaire() {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      prev + visibleCount < logos.length ? prev + 1 : prev
    );
  };

  const visibleLogos = logos.slice(startIndex, startIndex + visibleCount);

  return (
    <div className="partenaire-carousel">
      <h1>Nos Partenaires</h1>
      <div className="carousel">
        <button className="arrow left" onClick={handlePrev}>&#8592;</button>
        <div className="carousel-logos">
          {visibleLogos.map((logo, index) => (
            <img key={index} src={logo} alt={`logo-${index}`} />
          ))}
        </div>
        <button className="arrow right" onClick={handleNext}>&#8594;</button>
      </div>
    </div>
  );
}

export default Partenaire;

