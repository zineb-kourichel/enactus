import React from 'react';
import '../custom.scss';

function Notreequipe({ membres }) {
  return (
    <div className="notre-equipe">
      <h1>Notre équipe</h1>
      <div className="membres-container">
        {membres.map((membre, index) => (
          <div key={index} className="membre">
            <img src={membre.photo} alt={membre.nom} />
            <h3>{membre.nom}</h3>
            <p>{membre.poste}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notreequipe;
