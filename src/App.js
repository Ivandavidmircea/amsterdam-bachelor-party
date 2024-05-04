import './App.css';

import React, { useState, useEffect } from 'react';

import Agenda from './components/Agenda'; 
import MobileAgenda from './components/MobileAgenda'; 
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
      const handleResize = () => {
          setIsMobile(window.innerWidth < 600);
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="App">
        <Header/>
        {/* <Agenda/> */}
        {isMobile ? <MobileAgenda /> : <Agenda/>}
        <Footer/>
    </div>
  );
}

export default App;
