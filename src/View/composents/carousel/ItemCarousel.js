import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { styled } from '@mui/material/styles';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { NavLink, Link } from 'react-router-dom';
import './Carousel.css';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
// Icons
import IconButton from '@mui/material/IconButton';
import Facebook from '@mui/icons-material/Facebook';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Instagram from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import MenuIcon from '@mui/icons-material/Menu';
export default function ItemCarousel({ title, subtitle, img, sticker }) {
  const [sizeScreen, setSizeScreen] = useState(window.innerWidth);
  useEffect(() => {
    setSizeScreen(window.innerWidth);
  }, []);

  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const isActiveStyle = {
    color: '#FFF',
    fontWeight: 700,
    border: '1px solid white',
    padding: 2,
    paddingTop: 0,
    borderRadius: 10,
    BoxShadow: ' 0px 0px 5px black',
  };
  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#6F7835',
      color: 'rgba(225, 225, 225)',
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }));
  return (
    <div className="item" style={{ minHeight: sizeScreen > 600 ? '100vh':'120vh'}}>
      <div className="img" style={{ backgroundImage: `url(${img})` }}></div>
      <div className="content">
        <Container fluid="md">
          {sizeScreen > 600 ? (
            <Row>
              <Col>
                <img
                  className="logo"
                  src="assets/images/principal/logo.jpg"
                  alt="logo"
                />
              </Col>
              <Col md={8}>
                <Stack className="menu" direction="horizontal" gap={3}>
                  <NavLink
                    to="qui_sommes_nous"
                    className="menu-item"
                    style={({ isActive }) =>
                      isActive ? isActiveStyle : undefined
                    }
                  >
                    Apropos du DCV
                  </NavLink>
                  <NavLink
                    to="services"
                    className="menu-item"
                    style={({ isActive }) =>
                      isActive ? isActiveStyle : undefined
                    }
                  >
                  Nos Services
                  </NavLink>
                  <NavLink
                    to="/biens_DCV"
                    className="menu-item"
                    style={({ isActive }) =>
                      isActive ? isActiveStyle : undefined
                    }
                  >
                    Nos Biens
                  </NavLink>
                </Stack>
              </Col>
              <Col>
                <div className="btn_reservation">
                  <Button variant="contained" color="primary">
                    Langue
                  </Button>
                </div>
              </Col>
            </Row>
          ) : (
            <Row>
              <Col>
                <img
                  className="logo"
                  src="assets/images/principal/logo.jpg"
                  alt="logo"
                />
              </Col>
              <Col>
                <div className="btn_reservation">
                  <Button
                    variant="contained"
                    startIcon={<MenuIcon />}
                    id="fade-button"
                    aria-controls={open ? 'fade-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                  >
                    Menu
                  </Button>
                  <Menu
                    id="fade-menu"
                    MenuListProps={{
                      'aria-labelledby': 'fade-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                    sx={{ textAlign: 'center' }}
                  >
                    <Link
                      to="qui_sommes_nous"
                      style={{ textDecoration: 'none', color: 'white' }}
                    >
                      <MenuItem
                        onClick={handleClose}
                        style={{
                          backgroundColor: '#8A7E66',
                        }}
                      >
                        Apropos du DCV
                      </MenuItem>
                    </Link>
                    <Link
                      to="services"
                      style={{ textDecoration: 'none', color: 'black' }}
                    >
                      <MenuItem
                        onClick={handleClose}
                        style={{
                          backgroundColor: 'white',
                        }}
                      >
                       Nos Services
                      </MenuItem>
                    </Link>
                    <Link
                      to="/biens_DCV"
                      style={{ textDecoration: 'none', color: 'white' }}
                    >
                      <MenuItem
                        onClick={handleClose}
                        style={{
                          backgroundColor: '#6F7835',
                          textAlign: 'center',
                        }}
                      >
                        Nos Biens
                      </MenuItem>
                    </Link>
                    <MenuItem onClick={handleClose}>Langue</MenuItem>
                  </Menu>
                </div>
              </Col>
            </Row>
          )}
          <Row className="Footer">
            <Col md={10}>
              <Stack className="partie1" gap={4}>
                <div
                  className="etiquette"
                  style={{ display: sizeScreen < 500 && 'none' }}
                >
                  DCV <span className="disable">{'>' + sticker}</span>
                </div>
                <div
                  className="title"
                  style={{
                    textAlign: sizeScreen < 500 && 'center',
                    width: sizeScreen < 500 && '100%',
                    fontSize: sizeScreen < 500 && '3rem',
                  }}
                >
                  {title}
                </div>
                <div className="subtitle"  style={{
                    textAlign: sizeScreen < 500 && 'center'
                  }}>
                  <p>{subtitle}</p>
                </div>
              </Stack>
            </Col>
            <Col>
              <div className="partie2">
                <Stack
                  className="social"
                  direction={sizeScreen < 500 && 'horizontal'}
                >
                  <a
                    href="https://www.facebook.com/domainedelacouleeverte"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconButton>
                      <Facebook sx={{ fontSize: 40, color: 'white' }} />
                    </IconButton>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/domainde-de-la-coulee-verte/?viewAsMember=true"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconButton>
                      <LinkedIn sx={{ fontSize: 40, color: 'white' }} />
                    </IconButton>
                  </a>
                  <a
                    href="https://www.instagram.com/domainedelacouleeverte/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconButton>
                      <Instagram sx={{ fontSize: 40, color: 'white' }} />
                    </IconButton>
                  </a>
                  <IconButton>
                    <LightTooltip title="Info@domainedelacouleeverte.com">
                      <MailIcon sx={{ fontSize: 40, color: 'white' }} />
                    </LightTooltip>
                  </IconButton>
                  <IconButton>
                    <LightTooltip title="Tel (+225) 07 68 36 37 37 | 07 77 39 72 37">
                      <PhoneIcon sx={{ fontSize: 40, color: 'white' }} />
                    </LightTooltip>
                  </IconButton>
                </Stack>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
