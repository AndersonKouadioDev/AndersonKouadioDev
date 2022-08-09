import React from 'react';
import Carousel from './composents/carousel/Carousel';
import { useLocation } from 'react-router-dom';
import WebRoute from '../Route/WebRoute';

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const sampleLocation = useLocation();
  const pathname = sampleLocation.pathname;
  React.useEffect(() => {
    AOS.init({
      anchorPlacement:"bottom-center",
      duration:1500
    });
  },[]);
  return (
    
    <div style={{ overflow: 'hidden'}}>
      {pathname === '/' ? <Carousel /> : null}
      <WebRoute />
    </div>
  );
}

export default App;
