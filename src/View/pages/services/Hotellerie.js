import React, { useEffect, useRef, useState } from 'react';
import './Services.css';
import Header from '../../composents/header/Header';
import Card from 'react-bootstrap/Card';
import Footer from '../../composents/footer/Footer2';
import image from '../../../images/services/hotel.jpg';
import icone from '../../../images/services/hotel.png';
import VanillaTilt from 'vanilla-tilt';
import Typography from '@mui/material/Typography';

function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
    window.scrollTo(0, 0);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}

export default function Hotellerie() {
  const [sizeScreen, setSizeScreen] = useState(window.innerWidth);
  useEffect(() => {
    setSizeScreen(window.innerWidth);
  }, []);

  return (
    <div className="aboutpage">
      <Header title="hébergement" back="/services" />
      <div
        className="hotellerie"
        style={{ backgroundImage: `url(${image})` }}
      >
        {sizeScreen > 430 ? (
          <Tilt
            options={{ scale: 1.05, max: 25 }}
            style={{ width: '30rem', zIndex: 2 }}
            className="mb-2 card-tilt"
          >
            <Card>
              <Card.Header className="card-heard">
                <img src={icone} alt="icone" width={100} />
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  <p className="card-text">
                  {' '}
          Dans ce beau et reposant domaine, nous vous offrons quatre type de
          biens haut standing répondant aux normes internationales de
          l'hôtellerie. Au nombre de 11 chambres dont 02 suites (une exécutive,
          une junior), 03 supérieures, 03 studios et 03 standards, nos biens
          disposent de chaines câblées internationales et locales, d'un wifi
          haut débit, d'air conditionné sans oublier un petit déjeuner offert
          servi en buffet inclus dans le tarif. Piscine ouverte qu'aux
          résidents.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Tilt>
        ) : (
          <Card style={{ width: '30rem', zIndex: 2 }} className="mb-2">
            <Card.Header className="card-heard" style={{ textAlign: 'center' }}>
              <img src={icone} alt="icone" width={100} />
              <Typography variant="h3" color="primary">
              Hébergement
              </Typography>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <p className="card-text">
                {' '}
          Dans ce beau et reposant domaine, nous vous offrons quatre type de
          biens haut standing répondant aux normes internationales de
          l'hôtellerie. Au nombre de 11 chambres dont 02 suites (une exécutive,
          une junior), 03 supérieures, 03 studios et 03 standards, nos biens
          disposent de chaines câblées internationales et locales, d'un wifi
          haut débit, d'air conditionné sans oublier un petit déjeuner offert
          servi en buffet inclus dans le tarif. Piscine ouverte qu'aux
          résidents.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        )}
      </div>

      <Footer />
    </div>
  );
}
