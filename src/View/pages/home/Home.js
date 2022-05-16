import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardService from '../../composents/cards/CardService';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import About from '../../composents/about/About';
import Temoignage from '../../composents/temoignage/Temoignage';

import './Home.css';
import Footer from '../../composents/footer/Footer';

export default function Home() {
  const data = [
    {
      img: 'assets/images/carousel/c1.jpg',
      title: 'Suite Exécutive',
      content:
        'Facere repellat inventore corporis ratione eius mollitia numquam explicabo',
    },
    {
      img: 'assets/images/carousel/c2.jpg',
      title: 'Suite Junior',
      content:
        'Facere repellat inventore corporis ratione eius mollitia numquam explicabo',
    },
    {
      img: 'assets/images/carousel/c3.jpg',
      title: 'Supérieures',
      content:
        'Facere repellat inventore corporis ratione eius mollitia numquam explicabo',
    },
    {
      img: 'assets/images/carousel/c4.jpg',
      title: 'Studios',
      content:
        'Facere repellat inventore corporis ratione eius mollitia numquam explicabo',
    },
    {
      img: 'assets/images/carousel/c5.jpg',
      title: 'Standar',
      content:
        'Facere repellat inventore corporis ratione eius mollitia numquam explicabo',
    },
  ];
  return (
    <>
      <div style={{ paddingTop: '70px', backgroundColor: '#000', boxShadow: "0px 1px 10px #00000016"}}>
        <Container>
          <Row style={{ alignItems: 'center' }}>
            <Col>
              <About />
            </Col>
            <Col>
              <ImageList variant="woven" cols={2} gap={8}>
                {data.map((elt, index) => (
                  <ImageListItem key={index}>
                    <CardService
                      img={elt.img}
                      title={elt.title}
                      content={elt.content}
                    />
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
