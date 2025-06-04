import React from 'react'
import Event from '../composant/Event';

function Evenements() {

    const evenements=[
            {nom:'Demi finale ',
              photo:"images/event/demifinale.JPG",
            description:`La fin d'une aventure, mais le début d'une autre. Nous aurions pu atteindre des sommets, mais les choses ne se passent pas toujours comme on l'aurait souhaité.
            L'histoire est en marche et nous sommes fiers d’être parmi les 12 meilleures équipes du Maroc, une première historique pour Enactus FSBM.
            The journey is ongoing.
            E la storia continua.
            `},
            
            
              {nom:'Journée 8 mars',photo:"images/event/8Mars.JPG",description:` L'événement "L'innovation au féminin : Explorer la science et l'entrepreneuriat" a mis en lumière le rôle des femmes dans ces deux domaines. Au programme : des panels sur les femmes leaders en sciences et l'entrepreneuriat, suivis d'un atelier sur le Brand Building. Des experts tels qu’Abdellah Zerhouni, Sanaâ Benahmed et Malika Izid ont partagé leurs expériences inspirantes, clôturant ainsi une journée riche en échanges et apprentissages.`},
              {nom:'Hackathon ',photo:"images/event/Hackathon.JPG",description:`Du 15 au 17 décembre 2023, notre équipe a participé au Méga Hackathon Panafricain, où nous avons eu l'opportunité de développer des idées de projets innovants en un temps limité, démontrant notre créativité et notre capacité à relever des défis dans un cadre compétitif.`},


    ]
  return (
    <div>
    <div className="evenement-section">
    <img src="images/event/demifinale.JPG" className="evenement" />
  <h1 className="evenement-titre">Événements</h1>
</div>

      <Event evenements={evenements} />
      


    </div>
  )
}

export default Evenements;