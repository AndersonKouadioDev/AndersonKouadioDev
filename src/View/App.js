import React from 'react';
import Carousel from './composents/carousel/Carousel';
import { useLocation } from 'react-router-dom';

import WebRoute from '../Route/WebRoute';
function App() {
  const sampleLocation = useLocation();
  const pathname = sampleLocation.pathname;
  React.useEffect(() => {});
  return (
    <div>
      {pathname == '/' ? <Carousel /> :null}
      <WebRoute />
    </div>
  );
}

export default App;
