import { Routes, Route } from 'react-router-dom';
import Navbar from './Componentes/Navbar';
import Home from './Componentes/Home';
import Footer from './Componentes/Footer';
import QuienesSomos from './Componentes/Quienesomos';
import Inscripcion from './Componentes/Inscripción';
import CarouselFadeExample from './Componentes/Capacitacion';
import Contacto from './Componentes/Contacto';



function App() {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route index element={ <Home /> }></Route>
        <Route path='/home' element={ <Home /> }></Route> 
        <Route path='/quienessomos'element={ <QuienesSomos /> } > </Route>
        <Route path='/inscripcion' element={ <Inscripcion /> } > </Route>
        <Route path='/capacitacion' element={ <CarouselFadeExample />} > </Route>
        <Route path='/contacto' element={ <Contacto /> } > </Route>
      </Routes>
     
      <Footer />
  
    
  </>
  );
}

export default App;
