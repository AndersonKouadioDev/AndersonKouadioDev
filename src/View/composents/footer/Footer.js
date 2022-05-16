import React from 'react';
import './Footer.css';
import Stack from 'react-bootstrap/Stack';
// Icons
import IconButton from '@mui/material/IconButton';
import Facebook from '@mui/icons-material/Facebook';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Instagram from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';
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
                Vitae aut explicabo fugit facere alias distinctio, exem commodi
                mollitia minusem dignissimos atque asperiores incidunt vel
                voluptate iste
              </p>
              <Stack className="info_social" direction="horizontal">
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
          </div>
          <div className="col-md-6 col-lg-4 info-col">
            <div className="info_contact">
              <h4>Addresse</h4>
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
                  <MailIcon />
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
            &copy; <span id="displayYear"></span> Tout Droit Réservé Par &nbsp;
            <a href="https://www.facebook.com/andyjojoofficial-115063973195765">
              Andy Jojo Dev
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
