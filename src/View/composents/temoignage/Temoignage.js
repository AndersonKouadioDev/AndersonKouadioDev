import React,{ useEffect, useState }  from 'react';
import TemoignageItem from './TemoignageItem';
import './Temoignage.css';

// OWL
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/src/owl.carousel.css';

import 'react-owl-carousel2/src/owl.theme.default.css';

export default function Temoignage() {

  const [sizeScreen, setSizeScreen] = useState(window.innerWidth);

  useEffect(() => {
    setSizeScreen(window.innerWidth);
  }, []);

  const data = [
    {
      avatar: 'assets/images/temoignages/1.jpeg',
      message:
        'Franchement, j\'ai été très impressionné, le complexe, il est magnifique. Le thème de la "Coulée Verte" est original et franchement les chambres sont belles, et les prix sont très attrayants.',
      name: "RAISSA N'GOM",
      job: 'Directrice de Société',
    },
    {
      avatar: 'assets/images/temoignages/2.jpeg',
      message:
        "Vraiment, j'aime m'approcher de la nature, et à Abidjan c'est difficile de pouvoir le faire. Quand j'ai franchi le premier pas dans cet hôtel, j'ai découvert la nature, la verdure, ça m'a permis de reposer mon esprit dans cet hôtel.",
      name: 'KOUAME BLAISE',
      job: 'Directeur Technique de Société',
    },
    {
      avatar: 'assets/images/temoignages/3.jpeg',
      message:
        "J'ai passé un agréable séjour au DCV, la qualité du service est vraiment top, et l'hygiène est de mise. Je recommande vivement!",
      name: 'Marcelle BILE',
      job: 'Médecin',
    },
  ];

  const options = {
    items: sizeScreen > 430 ? 3: 1,
    autoplay: true,
    loop: true,
    center: true,
    animateOut: 'fadeOut',
    smartSpeed: 450,
  };

  return (
    <div
      className="client_section layout_padding"
      style={{backgroundColor: 'black' }}
    >
      <div className="container page-section">
        <div className="heading_container">
          <h2  data-aos="fade-up" className="heading_center text-center section-heading" style={{fontFamily:'Jour Script, Arial Narrow Bold',  lineHeight: 1.7}}>
            Notre Obsession <span  style={{fontFamily:'Arial Narrow Bold'}}>, </span> Le Client !
          </h2>
        </div>
        <div className="row" data-aos="fade-up">
          <OwlCarousel options={options}>
            {data.map((item, index) => (
              <TemoignageItem
                key={index}
                avatar={item.avatar}
                message={item.message}
                name={item.name}
                job={item.job}
              />
            ))}
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
}
