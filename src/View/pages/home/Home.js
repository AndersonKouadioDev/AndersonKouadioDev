import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardService from '../../composents/cards/CardService';
import ImageList from '@mui/material/ImageList';
import Temoignage from '../../composents/temoignage/Temoignage';
import './Home.css';
import Footer from '../../composents/footer/Footer';
import Typography from '@mui/material/Typography';
import {categories } from '../../../data/db';

export default function Home() {

  const [sizeScreen, setSizeScreen] = useState(window.innerWidth);

  // Get Chambres
  useEffect(() => {
    setSizeScreen(window.innerWidth);
  }, []);
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
            <Col xs={12} sm={6} md={6}>
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
                <Typography
                  variant="body1"
                  sx={{ color: 'white', marginBottom: 5 }}
                >
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
            <Col xs={12} sm={6} md={6}>
              <ImageList
                variant="woven"
                cols={sizeScreen > 500 ? 2 : 1}
                gap={8}
              >
                {categories.map((categorie, index) => (
                  <CardService
                    img={categorie.image}
                    title={categorie.label}
                    key={index}
                  />
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
