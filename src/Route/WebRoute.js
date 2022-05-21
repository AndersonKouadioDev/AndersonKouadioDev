import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../View/pages/home/Home';
import About from '../View/pages/apropos/About';
import Biens from '../View/pages/reservation/Biens';
import Detail from '../View/pages/reservation/Detail';

function WebRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/qui_sommes_nous" element={<About />} />
      <Route path="/biens_DCV" element={<Biens />} />
      <Route path="/reservation/:categorie/:id" element={<Detail />} />
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
