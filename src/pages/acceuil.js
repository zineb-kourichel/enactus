import Enactusfsbm from "../composant/enactusfsbm";
import Notreimpact  from "../composant/notreimpact";
import Notremission from "../composant/Notremission";
import Partenaire from "../composant/partenaire";
import Presentation from "../composant/presentation-enactus";
import Quote from "../composant/Quote";
import HeroIntro2 from "../composant/header2";
import InfiniteCarousel from "../composant/caousel";









function Acceuil() {
  

  return (
    <div>
      <HeroIntro2/>
      <Presentation/>
      <InfiniteCarousel/>
      <Notremission/>
    <Notreimpact/>
    <img className="fftm" src="/images/fftm2.png" alt="picture" />

    <Quote/>
    <Partenaire/>
    
    

    </div>
  );
  
}

export default Acceuil;
