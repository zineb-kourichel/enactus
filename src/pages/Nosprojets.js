import React from 'react'
import Projets from '../composant/projets'

function Nosprojets() {
    const projets=[
              {nom:"Biogazify",description:" projet vise à convertir du biogaz issu de déchets organiques en une source d'énergie pratique pour la cuisine. ",photo:"images/projets/biogazify.png"},
              {nom:"Bistrokabb",description:"le câprier, trésor nutritionnel souvent négligé au Maroc, est mis en lumière par Bistrolabb. En créant des produits alimentaires sains et variés à base de câpres, cette initiative soutient les producteurs locaux, valorise le savoir-faire artisanal et crée des opportunités économiques pour les femmes, tout en ravivant la cuisine marocaine traditionnelle.",photo:"images/projets/bistrokab.png"},
              {nom:" Botabaقa",description:"Lorsque des coupures inattendues de gaz interrompent vos repas ou douches, cela perturbe votre quotidien. Bota Baقa apporte une solution intelligente avec un capteur qui mesure le niveau de gaz restant et envoie des alertes avant que la bouteille ne soit vide, garantissant ainsi une gestion fluide et sans surprise de vos réserves. ",photo:"images/projets/Botaba9a.png"},
              {nom:"Bottle 3D:",description:"projet vise à collecter et traiter les bouteilles en plastique pour les recycler en filaments utilisables dans les imprimantes 3D.",photo:"images/projets/bottle3d.png"},
              {nom:"Educlass mingle",description:"un site web intégrant réseaux sociaux et étude, facilitant l'apprentissage, la révision et la communication simultanément pour les utilisateurs. ",photo:"images/projets/educlass.png"},
              {nom:"Enbo",description:"propose des boîtes écologiques à trois couches, faites de matériaux recyclés, pour protéger les produits et assurer leur traçabilité.",photo:"images/projets/enbo.png"},
              {nom:"Potrinov",description:"POTRINOV réinvente l’art de la poterie en alliant savoir-faire traditionnel et innovation moderne. Avec des créations uniques et un service digital en cours de finalisation, nous offrirons à nos partenaires une visibilité authentique et engageante. Ce projet vise à soutenir un artisanat durable et éco-responsable, tout en promettant une expérience enrichissante pour tous",photo:"images/projets/potrinov.png"},
              {nom:" Reskin",description:"Face au gaspillage alimentaire et à l'impact néfaste des cosmétiques industriels sur l’environnement, Reskin transforme ces résidus en cosmétiques durables. En recyclantles déchets alimentaires, l'entreprise réduit l'empreinte carbone et crée des produits respectueux de la peau et de la planète, répondant ainsi aux attentes des consommateurs éco-conscients. ",photo:"images/projets/reskin.png"},
              {nom:"Sitauti ",description:"Une plateforme interactive dédiée à l'autisme, offrant divers moyens de soutien aux autistes, leurs familles et aidants,répondant à un besoin social urgent.",photo:"images/projets/sitauti.png"},
              {nom:"Uniride",description:"une application mobile optimise le transport étudiant au Maroc avec covoiturage adaptatif, promouvant mobilité durable, économique et sécurisée. ",photo:"images/projets/uniride.png"},
              {nom:"Voltainos",description:"Avec sa solution énergétique durable, VOLTAINOS combine l'énergie éolienne avec la technologie piézo électrique pour une production d'électricité flexible et durable. ",photo:"images/projets/voltainos.png"},
    ]
  return (
    <div>
      <div className="projets-section">
        <img src="images/projet.JPG" alt="project" className="project" />
       <h1 className="projets-titre">Nos projets</h1>
      </div>
        <Projets projets={projets} />
    </div>
  )
}

export default Nosprojets