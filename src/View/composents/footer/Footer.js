import React from 'react';
import './Footer.css';
import Stack from 'react-bootstrap/Stack';
// Icons
import IconButton from '@mui/material/IconButton';
import Facebook from '@mui/icons-material/Facebook';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Instagram from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Footer() {
  return (
    <div
      className="info_section layout_padding2"
      style={{ boxShadow: '0px 0px 10px #00000016' }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-4 info-col">
            <div className="info_detail">
              <h4>Qui sommes-nous</h4>
              <p>
                Situé dans la commune de Cocody Angré 7ème tranche dans la
                ruelle BP V 56, le DCV est un hôtel urbain de 3étoiles...
              </p>
              <Stack className="info_social" direction="horizontal">
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
              </Stack>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 info-col">
            <div className="info_contact">
              <h4>Adresse</h4>
              <div className="contact_link_box">
                <p>
                  <LocationOnIcon />
                  <span>Lieu</span> Marcory
                </p>
                <p>
                  <PhoneIcon />
                  <span>Tel (+225) 07 68 36 37 37 | 07 77 39 72 37</span>
                </p>
                <p>
                  <span>Info@domainedelacouleeverte.com</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 info-col">
            <div className="info_contact">
              <h4>Newsletter</h4>
              <form action="#">
                <input type="text" placeholder="Enter email" />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer_section">
        <div className="container">
          <p>
            &copy; <span id="displayYear"></span> Tout Droit Réservé Par Le
            Domaine de la Coulée Verte &nbsp;
          </p>
        </div>
      </footer>
    </div>
  );
}
