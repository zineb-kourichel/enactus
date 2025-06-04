import React from 'react'
import Enactusfsbm from '../composant/enactusfsbm';
import Notreequipe from '../composant/Notreequipe';
import RandomMovementPage from '../composant/bbomerang';
import { motion } from 'framer-motion';


function Apropos() {

  const membres=[
        {nom:"Younes TAOUMI ",poste:"Team Leader",photo:"images/equipe/younes.png"},
        {nom:"Maryam BADRI",poste:" Vice Team Leader",photo:"images/equipe/maryam.png"},
        {nom:"Wiam ABOUTARA BELRHITI ",poste:" Vice President Project",photo:"images/equipe/wiam.png"},
        {nom:"Ammar MASSAOUDI ",poste:" Communication Manager",photo:"images/equipe/ammar.png"},
        {nom:"Hind ZAKY ",poste:" Human Ressources Manager",photo:"images/equipe/hind.png"},
          {nom:"Abdelwadoud EL BAROUJI ",poste:"Treasurer",photo:"images/equipe/abdelwadoud.png"},
        {nom:"Basma JAWHAR",poste:"Event Manager",photo:"images/equipe/basma.png"},
        {nom:"Imane OUAZZANI CHAHDI",poste:" Head of partnerships",photo:"images/equipe/imane.png"}
  ]
  return (
    <div >
      <div className="apropos-section">

          <img src='images/apropos.jpg' alt='apropos' className='aproposdenactus'/>
      <h1 className='apropos'>À propos d’Enactus</h1>   
      </div>
      <RandomMovementPage/>
        <Enactusfsbm/>
        <Notreequipe membres={membres} />
        
    </div>
  )
}

export default Apropos;