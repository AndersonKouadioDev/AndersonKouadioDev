import React, { useEffect } from 'react';
import './Services.css';
import Header from '../../composents/header/Header';
import Card from 'react-bootstrap/Card';
import Footer from '../../composents/footer/Footer2';
import image from '../../../images/services/hotel.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CheckIcon from '@mui/icons-material/Check';
import { Link } from 'react-router-dom';

export default function Service() {
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);
  return (
    <div>
      <Header title="Nos Services" back="/" />
      <Container fluid className='service_header'  style={{ backgroundImage: `url(${image})`}}>
        <Row className=" service_header">
          <Col
            xs={12}
            sm={12}
            md={12}
            className="service_header_image"
          >
            <h1 style={{ lineHeight: 1.7}}>Un Oasis Dans La Ville</h1>
          </Col>
          <Col xs={12} sm={12} md={12} className="service_header_content">
            <Row
              xs={12}
              sm={4}
              md={4}
              lg={4}
              className="justify-content-evenly"
            >
               <Card
                className="card text-center mb-4"
                style={{
                  maxWidth: '260px',
                  height: '200px',
                  boxShadow: '0px 0px 10px rgba(0,0,0,.5)',
                  backgroundColor: '#121212',
                  border: '2px solid #6F7835',
                }}
                data-aos="fade-right" 
                id="hebergement"
              >
                <Link
                  style={{ color: 'white', textDecoration: 'none' }}
                  to="hotellerie"
                >
                  <Card.Body>
                    <Card.Title>
                      <CheckIcon
                        fontSize="large"
                        style={{ color: '#6f7835', fontSize: '3rem' }}
                      />
                    </Card.Title>
                    <Card.Title>HEBERGEMENT</Card.Title>
                    <Card.Text>Cliquez pour accéder au service.</Card.Text>
                  </Card.Body>
                </Link>
              </Card>

              <Card
                className="card text-center  mb-4"
                style={{
                  maxWidth: '260px',
                  height: '200px',
                  boxShadow: '0px 0px 10px rgba(0,0,0,.5)',
                  backgroundColor: '#121212',
                  border: '2px solid #6F7835',
                }}
                data-aos="fade-up" 
                data-aos-anchor="#hebergement"
                id='restauration'
              >
                <Link
                  style={{ color: 'white', textDecoration: 'none' }}
                  to="restauration"
                >
                  <Card.Body>
                    <Card.Title>
                      <CheckIcon
                        fontSize="large"
                        style={{ color: '#6f7835', fontSize: '3rem' }}
                      />
                    </Card.Title>
                    <Card.Title>RESTAURATION & RAFFRAICHISSEMENT</Card.Title>
                    <Card.Text>Cliquez pour accéder au service.</Card.Text>
                  </Card.Body>
                </Link>
              </Card>

              <Card
                className=" card text-center  mb-4"
                style={{
                  maxWidth: '260px',
                  height: '200px',
                  boxShadow: '0px 0px 10px rgba(0,0,0,.5)',
                  backgroundColor: '#121212',
                  border: '2px solid #6F7835',
                }}
                data-aos="fade-left" 
                data-aos-anchor="#restauration"
              >
                <Link
                  style={{ color: 'white', textDecoration: 'none' }}
                  to="evenementiel"
                >
                  <Card.Body>
                    <Card.Title>
                      <CheckIcon
                        fontSize="large"
                        style={{ color: '#6f7835', fontSize: '3rem' }}
                      />
                    </Card.Title>
                    <Card.Title>EVENEMENTIEL</Card.Title>
                    <Card.Text>Cliquez pour accéder au service.</Card.Text>
                  </Card.Body>
                </Link>
              </Card>
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
