import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardService from '../../composents/cards/CardService';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Temoignage from '../../composents/temoignage/Temoignage';
import './Home.css';
import Footer from '../../composents/footer/Footer';
import Typography from '@mui/material/Typography';

export default function Home() {
  const data = [
    {
      img: 'assets/images/carousel/c1.jpg',
      title: 'Suite Exécutive',
    },
    {
      img: 'assets/images/carousel/c2.jpg',
      title: '1 Suite Junior',
    },
    {
      img: 'assets/images/carousel/c3.jpg',
      title: '3 Supérieures',
    },
    {
      img: 'assets/images/carousel/c4.jpg',
      title: '3 Studios',
    },
    {
      img: 'assets/images/carousel/c5.jpg',
      title: '3 Standar',
    },
  ];
  return (
    <>
      <div
        style={{
          paddingTop: '70px',
          backgroundColor: '#000',
          boxShadow: '0px 1px 10px #00000016',
        }}
      >
        <Container>
          <Row style={{ alignItems: 'flex-start' }}>
            <Col>
              <div className="about">
                <Row style={{ marginBottom: 20 }}>
                  <Col sm={12} md={8}>
                    <img
                      src="assets/images/principal/logo2.png"
                      alt="logo2"
                      width="100%"
                    />
                  </Col>
                </Row>
                <Typography variant="h4" style={{ color: 'white' }}>
                  Qui sommes-nous ?
                </Typography>
                <Typography variant="body1" style={{ color: 'white' }}>
                  Situé dans la commune de Cocody Angré 7ème tranche dans la
                  ruelle BP V 56, le DCV est un hôtel urbain de 3étoiles (3 *)
                  avec pour ambition de se positionner comme référence pour les
                  boutiques hôtel comme un lieu incontournable tant pour les
                  voyageurs internationaux que pour les élites locales en quête
                  d'un havre de paix, d'environnement naturel et d’élégance,
                  accord parfait des affaires et du loisir.
                </Typography>
              </div>
            </Col>
            <Col>
              <ImageList variant="woven" cols={2} gap={8}>
                {data.map((elt, index) => (
                  <ImageListItem key={index}>
                    <CardService img={elt.img} title={elt.title} />
                  </ImageListItem>
                ))}
              </ImageList>
            </Col>
          </Row>
        </Container>
      </div>
      <div style={{ paddingTop: '70px' }}>
        <Row>
          <Col>
            <Temoignage />
          </Col>
        </Row>
      </div>
      <div style={{ paddingTop: '70px' }}>
        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>
      </div>
    </>
  );
}
