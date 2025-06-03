import React from 'react'
import "../custom.scss"

function Presentation() {
  return (
    <div className="presentation-container" >
            <div className="presentation-image-wrapper">
            <div className="gray-background-square"></div>
    <img  src='/images/enactusjaune.png' alt='back'  height={800} width={900}  className="presentation-image"  />
      </div>
       <div  className="presentation-box">

        <h1>ENACTUS</h1>
        <h2>ENTREPRENEURIAT - ACTION - US</h2>
        <p className='presentation '>Enactus est un réseau mondial qui inspire les jeunes à utiliser l'entrepreneuriat pour résoudre les défis sociaux et économiques. Enactus Maroc, fondé en 2003, fait partie de ce réseau et offre aux étudiants l'opportunité de concrétiser des projets innovants ayant un impact direct sur leur communauté.</p>
       </div>

    </div>
  )
}

export default Presentation;