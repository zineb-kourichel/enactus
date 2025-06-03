import React from 'react'
import '../custom.scss'


function Event({evenements}) {
  return (
<div className="event-list">
  {evenements.map((evenement, index) => (
    <div
      key={evenement.nom}
      className={`evenement-card ${index % 2 === 1 ? 'reverse' : ''}`}
    >
      <div className="event-text">
        <h2>{evenement.nom}</h2>
        <p>{evenement.description}</p>
      </div>
      <img src={evenement.photo} alt={evenement.nom} />
    </div>
  ))}
</div>


  )
}

export default Event;