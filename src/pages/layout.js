import { Outlet } from "react-router-dom";
import Navbar from "../composant/Navbar";
import Footer from "../composant/Footer";
import ScrollToTop from "../composant/skrolltotop";
import BackToTopButton from "../composant/backtotopbutton";

function Layout(){
    return (
     <>
     <ScrollToTop/>
     <BackToTopButton/>
     <Navbar/>
     <Outlet />
     <Footer/>
    
     
     </>

    )


}
export default Layout;