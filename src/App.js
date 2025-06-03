import './App.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import JoinUs from './composant/JoinUs2' ;
import Layout from './pages/layout';
import Acceuil from './pages/acceuil';
import Apropos from './pages/Apropos';
import Nosprojets from './pages/Nosprojets';
import Evenements from './pages/Evenements';





function App() {
  return (
    <div className="App" style={{ overflowX: "hidden" }}   >
      
      <Router>
      <Routes>
      <Route element={<Layout/>} >
      <Route path ="/" element={<Acceuil/>} />
      <Route path="/JoinUs2" element={<JoinUs/>} />
      <Route path='Apropos'element={<Apropos/>} />
      <Route path='nosprojets' element={<Nosprojets/>} />
      <Route path='Evenement' element={<Evenements/>}  />
     
      </Route>
      </Routes>
    </Router>
     
    </div>
  );
}

export default App;
