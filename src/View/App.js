import React from 'react';
import Carousel from './composents/carousel/Carousel';
import { useLocation } from 'react-router-dom';

import WebRoute from '../Route/WebRoute';
import Container from 'react-bootstrap/Container';

function App() {
  const sampleLocation = useLocation();
  const pathname = sampleLocation.pathname;
  React.useEffect(() => {});
  return (
    <Container fluid>
      {pathname === '/' ? <Carousel /> : null}
      <WebRoute />
    </Container>
  );
}

export default App;
