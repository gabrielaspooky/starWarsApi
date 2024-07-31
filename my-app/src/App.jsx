import React, { useState, useEffect } from 'react';
import LoadingScreen from './Components/LoadingScreen';
import StarWarsCards from './Components/StarWarsCards'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Suscripcion from './Pages/Suscripcion';
import ParaEmpresa from './Pages/ParaEmpresa';
import Tienda from './Pages/Tienda';
import SobreNosotros from './Pages/SobreNosotros';
import Contacto from './Pages/Contacto';
import Nav from './Components/Nav';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <LoadingScreen isVisible={isLoading} />
      ) : (
        <div>
          <div className="flex items-center justify-center">
            <StarWarsCards />
            <BrowserRouter>
            <Nav/>
            <Routes>
                <Route path="/" element={<Tienda />} />
                <Route path="/suscripcion" element={<Suscripcion />} />
                <Route path="/paraempresa" element={<ParaEmpresa />} />
                <Route path="/sobrenosotros" element={<SobreNosotros />} />
                <Route path="/contacto" element={<Contacto />} />
            </Routes>
        </BrowserRouter>
        <footer>Esto es un footer</footer>
          </div>
        </div>
      )}
    </div>
  );
}


export default App;
