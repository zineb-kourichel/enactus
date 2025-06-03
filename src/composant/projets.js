import React from 'react'
import '../custom.scss'

function Projets({projets}) {
  return (
    <div className="projets-wrapper">
    {projets.map((projet, index) => (
      <div className="card-container" key={projet.nom}>
        <div className="projet">
          <div className="front">
            <img src={projet.photo} alt={projet.nom} />
          </div>
          <div className="back">
            <h1>{projet.nom}</h1>
            <p>{projet.description}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
  
   
  )
}

export default Projets;