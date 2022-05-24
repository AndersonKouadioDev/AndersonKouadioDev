import React from 'react';
import './Footer.css';


export default function Footer2() {
  return (
    <div
      className="info_section layout_padding2"
      style={{ boxShadow: '0px 0px 10px #00000016' }}
    >
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
