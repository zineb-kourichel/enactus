import React from 'react';
import "../custom.scss";
import { motion } from 'framer-motion';

function Notremission() {
  return (
    <div className="mission-wrapper">
      <div className="mission-container">
        <div className="mission-text">
          <h1>NOTRE MISSION</h1>
          <p>
            Enactus Morocco est une ONG qui a pour mission de révéler le potentiel entrepreneurial des jeunes en les accompagnant à la
            création d’impact durable et inclusif.
          </p>
          <p>
            Oeuvrant dans le domaine de l’entrepreneuriat social et le développement durable, Enactus développe des partenariats entre
            le monde des affaires, les acteurs institutionnels et ceux de l’enseignement supérieur, afin de préparer les jeunes à contribuer
            substantiellement au développement de leur pays en tant que leaders entrepreneurs, éthiques et socialement responsables.
          </p>
        </div>
        <div className="mission-image">
            <img src="/images/mission.jpg" alt="mission" />
        </div>
      </div>
    </div>
  );
}

export default Notremission;


