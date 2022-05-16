import React from 'react';
import Button from '@mui/material/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import './Carousel.css';
// Icons
import IconButton from '@mui/material/IconButton';
import Facebook from '@mui/icons-material/Facebook';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Instagram from '@mui/icons-material/Instagram';

export default function ItemCarousel({ title, subtitle,img, sticker, children }) {
  const styleBtn = {
    backgroundColor: '#6F7835',
    '&:hover': {
      backgroundColor: '#8A7E66',
    },
  };
  const isActiveStyle = {
    color: '#FFF',
    fontWeight:700,
    border:"1px solid white",
    padding:2,
    paddingTop:0,
    borderRadius:10,
    BoxShadow:" 0px 0px 5px black",

  };
  return (
    <div className="item">
      <div
        className="img"
        style={{ backgroundImage:`url(${img})`}}
      ></div>
      <div className="content">
        <Container fluid="md">
          <Row>
            <Col>
              <img
                className="logo"
                src="assets/images/principal/logo.jpg"
                alt="logo"
              />
            </Col>
            <Col>
              <Stack className="menu" direction="horizontal" gap={3}>
                <NavLink
                  to="qui_sommes_nous"
                  className="menu-item"
                  style={({ isActive }) =>
                    isActive ? isActiveStyle : undefined
                  }
                >
                  Apropos
                </NavLink>
                <NavLink
                  to="dcv_services"
                  className="menu-item"
                  style={({ isActive }) =>
                    isActive ? isActiveStyle : undefined
                  }
                >
                  DCV Services
                </NavLink>
              </Stack>
            </Col>
            <Col>
              <div className="reservation">
                <Button variant="contained" sx={styleBtn}>
                  Reservation
                </Button>
              </div>
            </Col>
          </Row>
          <Row className="Footer">
            <Col md={8}>
              <Stack className="partie1" gap={4}>
                <div className="etiquette">
                  Etiquette <span className="disable">{'>' + sticker}</span>
                </div>
                <div className="title">{title}</div>
                <div className="subtitle">
                  <p className="header">{subtitle}</p>
                  {children}
                </div>
              </Stack>
            </Col>
            <Col>
              <div className="partie2">
                <Stack className="social">
                  <a
                    href="https://www.facebook.com/domainedelacouleeverte"
                    target="_blank"
                  >
                    <IconButton>
                      <Facebook sx={{ fontSize: 40, color: 'white' }} />
                    </IconButton>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/domainde-de-la-coulee-verte/?viewAsMember=true"
                    target="_blank"
                  >
                    <IconButton>
                      <LinkedIn sx={{ fontSize: 40, color: 'white' }} />
                    </IconButton>
                  </a>
                  <a
                    href="https://www.instagram.com/domainedelacouleeverte/"
                    target="_blank"
                  >
                    <IconButton>
                      <Instagram sx={{ fontSize: 40, color: 'white' }} />
                    </IconButton>
                  </a>
                </Stack>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
