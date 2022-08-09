import React, { useEffect, useRef, useState } from 'react';
import './Services.css';
import Header from '../../composents/header/Header';
import Card from 'react-bootstrap/Card';
import Footer from '../../composents/footer/Footer2';
import image from '../../../images/services/hotel.jpg';
import icone from '../../../images/services/restauration.png';
import VanillaTilt from 'vanilla-tilt';
import Typography from '@mui/material/Typography';
import MenuRestaut from '../../composents/menu_restau/MenuRestaut';

function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
    window.scrollTo(0, 0);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}

export default function Restauration() {
  const [sizeScreen, setSizeScreen] = useState(window.innerWidth);
  useEffect(() => {
    setSizeScreen(window.innerWidth);
  }, []);

  return (
    <div className="aboutpage">
      <Header title="RESTAURATION & RAFFRAICHISSEMENT" back="/services" />
      <div
        className="hotellerie"
        style={{ backgroundImage: `url(${image})`,}}
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
                    Notre restaurant propose un brunch dominical, des soirées
        résidentes à thème, un service de sommellerie, de déjeuner
        d'affaires ou de dîner en amoureux, de buffet, menu sur mesure
        pour les évènements d’entreprise, les réunions d'affaires et
        les occasions spéciales avec des plats adaptés à tous les
        gouts et tous les régimes alimentaires en mettant en exergue
        le terroir local comme international. Le restaurant et le bar
        sont ouverts tous les jours de 7h-22H.
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
              Restauration
              </Typography>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <p className="card-text">
                  {' '}
                  Notre restaurant propose un brunch dominical, des soirées
                  résidentes à thème, un service de sommellerie, de déjeuner
                  d'affaires ou de dîner en amoureux, de buffet, menu sur mesure
                  pour les évènements d’entreprise, les réunions d'affaires et
                  les occasions spéciales avec des plats adaptés à tous les
                  gouts et tous les régimes alimentaires en mettant en exergue
                  le terroir local comme international. Le restaurant et le bar
                  sont ouverts tous les jours de 7h-22H.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        )}
      </div>
        <div>
        <MenuRestaut/>
        </div>
      <Footer />
    </div>
  );
}

