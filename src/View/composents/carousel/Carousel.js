import React from 'react';
import OwlCarousel from 'react-owl-carousel2';
import './Carousel.css';
import ItemCarousel from './ItemCarousel';
// OWL
import 'react-owl-carousel2/src/owl.carousel.css';

import 'react-owl-carousel2/src/owl.theme.default.css';

export default function Carousel() {
  const options = {
    items: 1,
    autoplay: true,
    loop: true,
    center: true,
    animateOut: 'fadeOut',
    smartSpeed:450
  };
  const data = [
    {
      title: 'Un oasis dans la ville',
      img: 'assets/images/carousel/c1.jpg',
      sticker: 'Abidjan',
      subtitle:
        "Leader du tourisme de proximité en Côte d'Ivoire.",
    },
    {
      title: 'Un oasis dans la ville',
      img: 'assets/images/carousel/c2.jpg',
      sticker: 'Abidjan',
      subtitle:
        "Cadre enchanteur avec un beau jardin...",
    },
    {
      title: 'Un oasis dans la ville',
      img: 'assets/images/carousel/c3.jpg',
      sticker: 'Abidjan',
      subtitle:
        "Votre résidence hôtelière prête à vous accueillir pour passer d'agréables moments de détente et de repos.",
    },
    {
      title: 'Un oasis dans la ville',
      img: 'assets/images/carousel/c4.jpg',
      sticker: 'Abidjan',
      subtitle:
        "Leader du tourisme de proximité en Côte d'Ivoire.",
    },
    {
      title: 'Un oasis dans la ville',
      img: 'assets/images/carousel/c5.jpg',
      sticker: 'Abidjan',
      subtitle:
        "Cadre enchanteur avec un beau jardin...",
    },
    {
      title: 'Un oasis dans la ville',
      img: 'assets/images/carousel/c6.jpg',
      sticker: 'Abidjan',
      subtitle:
        "Votre résidence hôtelière prête à vous accueillir pour passer d'agréables moments de détente et de repos.",
    },
    {
      title: 'Un oasis dans la ville',
      img: 'assets/images/carousel/c7.jpg',
      sticker: 'Abidjan',
      subtitle:
        "Leader du tourisme de proximité en Côte d'Ivoire.",
    },
    {
      title: 'Un oasis dans la ville',
      img: 'assets/images/carousel/c8.jpg',
      sticker: 'Abidjan',
      subtitle:
        "Cadre enchanteur avec un beau jardin...",
    },
    {
      title: 'Un oasis dans la ville',
      img: 'assets/images/carousel/c9.jpg',
      sticker: 'Abidjan',
      subtitle:
        "Votre résidence hôtelière prête à vous accueillir pour passer d'agréables moments de détente et de repos.",
    },
    {
      title: 'Un oasis dans la ville',
      img: 'assets/images/carousel/c10.jpg',
      sticker: 'Abidjan',
      subtitle:
        "Leader du tourisme de proximité en Côte d'Ivoire.",
    },
  ];
  return (
    <>
      <OwlCarousel
        options={options}
        style={{ boxShadow: '0px 0px 10px black' }}
      >
        {data.map((item, index) => (
          <ItemCarousel
            title={item.title}
            img={item.img}
            sticker={item.sticker}
           subtitle={ item.subtitle}
          >
          </ItemCarousel>
        ))}
      </OwlCarousel>
    </>
  );
}
