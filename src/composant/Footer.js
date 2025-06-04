import "../custom.scss"
import InstagramLink from "./imstagramlink";
import LinkedinLink from "./linkedinlink";
import Tiktoklink from "./tiktoklink";

function Footer(){
     return(
        <div className="Footer">
     
         <div className="Contact">
                <img src="/images/logowhite.png" alt="logowhite"  className="logowhite"/>
            <p>Contactez-nous</p>
            <h1 className="address">
                Enactus FSBM, Faculté des Sciences Ben M'Sick - Bd Commandant Driss Al Harti, Casablanca 20670 - Maroc
            </h1>
            <h2> 

            <br/>E-mail : enactus24.25fsbm@gmail.com<br/>
            Tél : Team leader +212 639 380 894  head of partnerships
            </h2>
           
        </div>
        <div className="connecter">
            <p>Restez connectés</p>
            <InstagramLink/>
            <LinkedinLink/>
            <Tiktoklink/>

        </div>
        <div className="copyright">
        ENACTUS MOROCCO © 2024 TOUS LES DROITS RÉSERVÉS — POLITIQUE DE CONFIDENTIALITÉ

        </div>
        </div>
     )


}
export default Footer;