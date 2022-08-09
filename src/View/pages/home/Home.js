import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardService from '../../composents/cards/CardService';
import ImageList from '@mui/material/ImageList';
import Temoignage from '../../composents/temoignage/Temoignage';
import './Home.css';
import Team from '../../composents/Team/Team';
import Footer from '../../composents/footer/Footer';
import Typography from '@mui/material/Typography';
import { categories } from '../../../data/db';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

export default function Home() {
  const [sizeScreen, setSizeScreen] = useState(window.innerWidth);

  // Get Chambres
  useEffect(() => {
    setSizeScreen(window.innerWidth);
    window.scrollTo(0, 0);
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
        <Row style={{ alignItems: 'flex-start', padding: '50px' }}>
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
                Le Domaine de la Coulée Verte est un cadre verdoyant, reposant,
                paradisiaque offrant les services de restauration, d'hébergement
                et d'événementiel.
                <br /> <br /> Vous souhaitez vous rapprochez de la nature, dès
                vos premiers pas dans notre espace, vous apprécierez. <br />{' '}
                <br />
                <Button variant="contained">
                  <Link
                    style={{ color: 'white', textDecoration: 'none' }}
                    to="qui_sommes_nous"
                  >
                    Savoir Plus
                  </Link>
                </Button>
              </Typography>
            </div>
          </Col>
          <Col xs={12} sm={6} md={6} data-aos="fade-left"  id="anchor_card_aos" >
            <ImageList variant="woven" cols={sizeScreen > 500 ? 2 : 1} gap={8}>
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
      </div>
      <div>
      <Temoignage />
      </div>
      <Team />
      <div>
        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>
      </div>
    </>
  );
}
