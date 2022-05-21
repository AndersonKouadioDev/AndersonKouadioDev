import React from 'react';
import './About.css';
import Header from '../../composents/header/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Footer from '../../composents/footer/Footer'
export default function About() {
  return (
    <div
      className="aboutpage"
      style={{ backgroundImage: `url(assets/images/carousel/c10.jpg)` }}
    >
      <Header title="QUI SOMMES-NOUS ?" back='/' />
      {/* About */}
      <div style={{ paddingTop: 20, backgroundColor: 'white' }}>
        <Container>
          <Row
            style={{
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}
          >
            <Col sm={6} md={5}>
              <img
                src="assets/images/principal/logo.jpg"
                alt="logo2"
                width="100%"
              />
            </Col>
            <Col sm={6} md={5}>
              <Typography variant="h4" style={{ color: '#6F7835' }}>
                Hôtel Urbain 3
              </Typography>
              <Typography
                variant="body1"
                style={{ color: '#000', textAlign: 'justify' }}
              >
                Situé dans la commune de Cocody Angré 7ème tranche dans la
                ruelle BP V 56, le DCV est un hôtel urbain de 3étoiles (3 *)
                avec pour ambition de se positionner comme référence pour les
                boutiques hôtel comme un lieu incontournable tant pour les
                voyageurs internationaux que pour les élites locales en quête
                d'un havre de paix, d'environnement naturel et d’élégance,
                accord parfait des affaires et du loisir.
              </Typography>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Fin */}

      {/* Debut */}
      <div className="slogan">
        <Container>
          <Row>
            <Col>
              <Divider light={true}>
                <h1
                  className="display-1"
                  style={{ color: '#6F7835', marginTop: '50px' }}
                >
                  Notre slogan
                </h1>
              </Divider>
              <Typography
                variant="h3"
                align="center"
                style={{ color: 'white', marginBottom: '50px' }}
              >
                Un oasis dans la ville !
              </Typography>
              <Typography
                variant="body1"
                align="center"
                style={{ color: 'white' }}
              >
                Un service de réception disponible 24h/ 24 disposé pour toutes
                vos Un service de réception disponible 24h/ 24 disposé pour
                toutes vos requêtes de la prise de réservation, à l’organisation
                du transfert par notre navette de l'aéroport à l'hôtel
                gratuitement et enfin de l'accueil et de l'installation de nos
                clients en chambre le tout avec un service sur mesure.
              </Typography>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Fin */}

      <div className="hotellerie">
        {/* Debut */}
        <Row
          style={{
            margingTop: '20px',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}
        >
          <Col sm={6} md={5}>
            <Typography variant="h4" style={{ color: '#6F7835' }}>
              Hôtellerie
            </Typography>
            <Typography
              variant="body1"
              style={{ color: '#000', textAlign: 'justify' }}
            >
              Disposant d'une capacité de 11 chambres dont 1 suite exécutive, 1
              suite junior, 3 supérieures, 3 studios et 3 standards, nos
              chambres disposent toutes de chaines câblées internationales et
              locales, d'un wifi haut débit, d'air conditionné sans oublier un
              petit déjeuner offert servi en buffet inclus dans le tarif avec
              également un accès gratuit à notre piscine entièrement dédiée aux
              résidents.
            </Typography>
          </Col>
          <Col sm={6} md={5}>
            <img src="assets/images/carousel/c8.jpg" alt="logo2" width="100%" />
          </Col>
        </Row>
        {/* Fin */}
      </div>

      {/* Debut */}
      <div className="reservation">
        <Row
          style={{
            margingTop: '20px',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}
        >
          <Col sm={6} md={5}>
            <img src="assets/images/carousel/c1.jpg" alt="logo2" width="100%" />
          </Col>
          <Col sm={6} md={5}>
            <Typography variant="h4" style={{ color: '#FFF' }}>
              Restauration
            </Typography>
            <Typography
              variant="body1"
              style={{ color: '#FFF', textAlign: 'justify' }}
            >
              Notre restaurant propose un brunch dominical, des soirées
              résidentes à thème, un service de sommellerie, de déjeuner
              d'affaires ou de diner en amoureux, de buffet, menu sur mesure
              pour les évènements d’entreprise, les réunions d'affaires et les
              occasions spéciales avec des plats adaptés à tous les gouts et
              tous les régimes alimentaires en mettant en exergue le terroir
              local comme international, un bar.
            </Typography>
          </Col>
        </Row>
      </div>
      {/* Fin */}

      <div className='autre'>
              {/* Debut */}
      <Row
        style={{
          margingTop: '20px',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}
      >
        <Col sm={6} md={5}>
          <Typography
            variant="body1"
            style={{ color: '#FFF', textAlign: 'justify' }}
          >
            Une salle de réunion modulaire avec une capacité de 100 pax et 200
            pax en fonction du style adopté entièrement équipée d'un matériel
            multimédia et audiovisuel avec une vue imprenable sur la nature et
            la piscine.
          </Typography>
          <Divider />
          <Typography
            variant="body1"
            style={{ color: '#FFF', textAlign: 'justify' }}
          >
            D'un jardin avec une capacité de 300 personnes pouvant accueillir
            concert privé, diner ouvert, mariage et tous autres festivités sur
            mesure avec un service de qualité et de proximité alliant
            raffinement et discrétion.
          </Typography>
        </Col>
        <Col sm={6} md={5}>
          <img
            src="assets/images/carousel/c7.jpg"
            alt="logo2"
            width="100%"
          />
        </Col>
      </Row>
      {/* Fin */}
      </div>
      {/* Fin */}
      <Footer/>
    </div>

  );
}
