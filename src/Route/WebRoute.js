import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../View/pages/home/Home';
import About from '../View/pages/apropos/About';
import Biens from '../View/pages/reservation/Biens';
import Detail from '../View/pages/reservation/Detail';
import Services from '../View/pages/services/Service';
import Restauration from '../View/pages/services/Restauration';
import Hotellerie from '../View/pages/services/Hotellerie';
import Evenementiel from '../View/pages/services/Evenementiel';
function WebRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/qui_sommes_nous" element={<About />} />
      <Route path="/biens_DCV" element={<Biens />} />
      <Route path="/reservation/:id" element={<Detail />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/restauration" element={<Restauration />} />
      <Route path="/services/hotellerie" element={<Hotellerie />} />
      <Route path="/services/evenementiel" element={<Evenementiel />} />
      <Route
        path="/*"
        element={
          <main style={{ padding: '1rem' }}>
            <p>Désolé il n'y a pas de page disponible pour cette URL</p>
          </main>
        }
      />
    </Routes>
  );
}
export default WebRoute;
