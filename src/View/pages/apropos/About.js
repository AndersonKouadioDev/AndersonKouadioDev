import React,{useEffect} from 'react';
import './About.css';
import Header from '../../composents/header/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Footer from '../../composents/footer/Footer2';
export default function About() {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
    <div
      className="aboutpage"
      style={{ backgroundImage: `url(assets/images/carousel/c10.jpg)` }}
    >
      <Header title="QUI SOMMES-NOUS ?" back="/" />
      {/* About */}
      <div className="section" style={{ backgroundColor: 'white' }}>
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
                Le Domaine de la Coulée Verte est un cadre verdoyant, reposant,
                paradisiaque offrant les services de restauration, d'hébergement
                et d'événementiel.
                <br /> <br /> Vous souhaitez vous rapprochez de la nature, dès
                vos premiers pas dans notre espace, vous apprécierez.
                <br /> <br />
                Situé dans la commune de Cocody Angré 7ème tranche dans la
                ruelle BP V 56, le DCV est un hôtel urbain de 3étoiles avec pour
                ambition de se positionner comme référence pour les boutiques
                hôtel comme un lieu incontournable tant pour les voyageurs
                internationaux que pour les élites locales en quête d'un havre
                de paix, d'environnement naturel et d’élégance, accord parfait
                des affaires et du loisir.
              </Typography>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Fin */}

      {/* Debut */}
      <div className="slogan section">
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
                vos requêtes de la prise de réservation, à l’organisation du
                transfert par notre navette de l'aéroport à l'hôtel gratuitement
                et enfin de l'accueil et de l'installation de nos clients en
                chambre le tout avec un service sur mesure.
              </Typography>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Fin */}
      <Footer />
    </div>
  );
}
