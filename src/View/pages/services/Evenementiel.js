import React, { useEffect, useRef, useState } from 'react';
import './Services.css';
import Header from '../../composents/header/Header';
import Card from 'react-bootstrap/Card';
import Footer from '../../composents/footer/Footer2';
import image from '../../../images/services/hotel.jpg';
import icone from '../../../images/services/event.png';
import VanillaTilt from 'vanilla-tilt';
import Typography from '@mui/material/Typography';

function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
    window.scrollTo(0,0);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}

export default function Evenementiel() {
  const [sizeScreen, setSizeScreen] = useState(window.innerWidth);
  useEffect(() => {
    setSizeScreen(window.innerWidth);
  }, []);

  return (
    <div className="aboutpage">
      <Header title="Evènementiel" back="/services" />
      <div
        className="hotellerie"
        style={{ backgroundImage: `url(${image})` }}
      >
        {sizeScreen > 430 ? (
          <Tilt
          options={{ scale:1.05, max: 25 }}
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
                  Cadre propice à la tenue des conférences, des séminaires, et
                  des colloques loin des dictatures du bruit. Une salle de
                  réunion modulaire avec une capacité de 100 pax et 200 pax en
                  fonction du style adopté. Entièrement équipée d'un matériel
                  multimédia et audiovisuel avec une vue imprenable sur la
                  nature et la piscine. D'un jardin avec une capacité de 300
                  personnes pouvant accueillir concert privé, dîner ouvert,
                  mariage et tous autres festivités sur mesure avec un service
                  de qualité et de proximité alliant raffinement et discrétion.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Tilt>
        ) : (
          <Card  style={{ width: '30rem', zIndex: 2 }}
          className="mb-2">
            <Card.Header className="card-heard" style={{textAlign:'center'}}>
              <img src={icone} alt="icone" width={100} />
              <Typography variant="h3" color="primary">
              Evènementiel
              </Typography>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <p className="card-text">
                  Cadre propice à la tenue des conférences, des séminaires, et
                  des colloques loin des dictatures du bruit. Une salle de
                  réunion modulaire avec une capacité de 100 pax et 200 pax en
                  fonction du style adopté. Entièrement équipée d'un matériel
                  multimédia et audiovisuel avec une vue imprenable sur la
                  nature et la piscine. D'un jardin avec une capacité de 300
                  personnes pouvant accueillir concert privé, dîner ouvert,
                  mariage et tous autres festivités sur mesure avec un service
                  de qualité et de proximité alliant raffinement et discrétion.
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
