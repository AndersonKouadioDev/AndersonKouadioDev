import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../View/pages/home/Home';
import Services from '../View/pages/dcv_services/Services';
import About from '../View/pages/apropos/About';

function WebRoute() {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="qui_sommes_nous" element={<About />} />
      <Route path="dcv_services" element={<Services />} />
    </Routes>
  );
}
export default WebRoute;
