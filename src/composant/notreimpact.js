import { useState } from 'react';
import '../custom.scss'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Notreimpact = () => {
  const [counterOn, setCounterOn] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  if (inView && !counterOn) {
    setCounterOn(true);
  }

  return (
    
    <div ref={ref} className="impact-section">
    <h1>Notre impact</h1>
    <div className="count-grid">
      <div className="count-block">
          <img src="images/newicon/etudi.png" alt="étudiant" />
        <div className="count-info">
          <p>Jeunes mobilisés</p>
          <div className="count-number">
            +{counterOn && <CountUp end={1000} duration={2} />}
          </div>
        </div>
      </div>

      <div className="count-block">
          <img src="images/newicon/project.png" alt="projets développés" />
        <div className="count-info">
          <p>Projets développés</p>
          <div className="count-number">
            +{counterOn && <CountUp end={40} duration={2} />}
          </div>
        </div>
      </div>

      <div className="count-block">
          <img src="images/newicon/finace2.png" alt="bénéficiaires impactés" />
        <div className="count-info">
          <p>Bénéficiaires impactés</p>
          <div className="count-number">
            +{counterOn && <CountUp end={500} duration={2} />}
          </div>
        </div>
      </div>

      <div className="count-block">
          <img src="images/newicon/learninghours.png" alt="heures de formation" />
        <div className="count-info">
          <p>Heures de formations</p>
          <div className="count-number">
            +{counterOn && <CountUp end={3000} duration={2} />}
          </div>
        </div>
      </div>

      <div className="count-block">
          <img src="images/newicon/brojetdurable.jpeg" alt="ODD touchés" />
        <div className="count-info">
          <p>Objectifs du développement durable touchés</p>
          <div className="count-number">
            +{counterOn && <CountUp end={13} duration={2} />}
          </div>
        </div>
      </div>
    </div>
  </div>

    );
    



    
  
};

export default Notreimpact;
