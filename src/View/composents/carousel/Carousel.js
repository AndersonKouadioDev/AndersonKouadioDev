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
      title: 'Lorem ipsum dolor sit amet',
      subtitle: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      img: 'assets/images/carousel/c1.jpg',
      sticker: 'Divertissement',
      children:
        'Facere repellat inventore corporis ratione eius mollitia numquam explicabo fuga ipsa voluptates obcaecati, voluptate, impedit, blanditiis aut facilis nobis recusandae ducimus cum ex molestiae aspernatur natus! Eos, excepturi quis autem dolorum minima accusamus quam laborum iste animi dolore vero vitae nobis repudiandae molestiae',
    },
    {
      title: 'Lorem ipsum dolor sit amet',
      subtitle: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      img: 'assets/images/carousel/c2.jpg',
      sticker: 'Divertissement',
      children:
        'Facere repellat inventore corporis ratione eius mollitia numquam explicabo fuga ipsa voluptates obcaecati, voluptate, impedit, blanditiis aut facilis nobis recusandae ducimus cum ex molestiae aspernatur natus! Eos, excepturi quis autem dolorum minima accusamus quam laborum iste animi dolore vero vitae nobis repudiandae molestiae',
    },
    {
      title: 'Lorem ipsum dolor sit amet',
      subtitle: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      img: 'assets/images/carousel/c3.jpg',
      sticker: 'Divertissement',
      children:
        'Facere repellat inventore corporis ratione eius mollitia numquam explicabo fuga ipsa voluptates obcaecati, voluptate, impedit, blanditiis aut facilis nobis recusandae ducimus cum ex molestiae aspernatur natus! Eos, excepturi quis autem dolorum minima accusamus quam laborum iste animi dolore vero vitae nobis repudiandae molestiae',
    },
    {
      title: 'Lorem ipsum dolor sit amet',
      subtitle: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      img: 'assets/images/carousel/c4.jpg',
      sticker: 'Divertissement',
      children:
        'Facere repellat inventore corporis ratione eius mollitia numquam explicabo fuga ipsa voluptates obcaecati, voluptate, impedit, blanditiis aut facilis nobis recusandae ducimus cum ex molestiae aspernatur natus! Eos, excepturi quis autem dolorum minima accusamus quam laborum iste animi dolore vero vitae nobis repudiandae molestiae',
    },
    {
      title: 'Lorem ipsum dolor sit amet',
      subtitle: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      img: 'assets/images/carousel/c5.jpg',
      sticker: 'Divertissement',
      children:
        'Facere repellat inventore corporis ratione eius mollitia numquam explicabo fuga ipsa voluptates obcaecati, voluptate, impedit, blanditiis aut facilis nobis recusandae ducimus cum ex molestiae aspernatur natus! Eos, excepturi quis autem dolorum minima accusamus quam laborum iste animi dolore vero vitae nobis repudiandae molestiae',
    },
    {
      title: 'Lorem ipsum dolor sit amet',
      subtitle: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      img: 'assets/images/carousel/c6.jpg',
      sticker: 'Divertissement',
      children:
        'Facere repellat inventore corporis ratione eius mollitia numquam explicabo fuga ipsa voluptates obcaecati, voluptate, impedit, blanditiis aut facilis nobis recusandae ducimus cum ex molestiae aspernatur natus! Eos, excepturi quis autem dolorum minima accusamus quam laborum iste animi dolore vero vitae nobis repudiandae molestiae',
    },
    {
      title: 'Lorem ipsum dolor sit amet',
      subtitle: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      img: 'assets/images/carousel/c7.jpg',
      sticker: 'Divertissement',
      children:
        'Facere repellat inventore corporis ratione eius mollitia numquam explicabo fuga ipsa voluptates obcaecati, voluptate, impedit, blanditiis aut facilis nobis recusandae ducimus cum ex molestiae aspernatur natus! Eos, excepturi quis autem dolorum minima accusamus quam laborum iste animi dolore vero vitae nobis repudiandae molestiae',
    },
    {
      title: 'Lorem ipsum dolor sit amet',
      subtitle: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      img: 'assets/images/carousel/c8.jpg',
      sticker: 'Divertissement',
      children:
        'Facere repellat inventore corporis ratione eius mollitia numquam explicabo fuga ipsa voluptates obcaecati, voluptate, impedit, blanditiis aut facilis nobis recusandae ducimus cum ex molestiae aspernatur natus! Eos, excepturi quis autem dolorum minima accusamus quam laborum iste animi dolore vero vitae nobis repudiandae molestiae',
    },
    {
      title: 'Lorem ipsum dolor sit amet',
      subtitle: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      img: 'assets/images/carousel/c9.jpg',
      sticker: 'Divertissement',
      children:
        'Facere repellat inventore corporis ratione eius mollitia numquam explicabo fuga ipsa voluptates obcaecati, voluptate, impedit, blanditiis aut facilis nobis recusandae ducimus cum ex molestiae aspernatur natus! Eos, excepturi quis autem dolorum minima accusamus quam laborum iste animi dolore vero vitae nobis repudiandae molestiae',
    },
    {
      title: 'Lorem ipsum dolor sit amet',
      subtitle: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      img: 'assets/images/carousel/c10.jpg',
      sticker: 'Divertissement',
      children:
        'Facere repellat inventore corporis ratione eius mollitia numquam explicabo fuga ipsa voluptates obcaecati, voluptate, impedit, blanditiis aut facilis nobis recusandae ducimus cum ex molestiae aspernatur natus! Eos, excepturi quis autem dolorum minima accusamus quam laborum iste animi dolore vero vitae nobis repudiandae molestiae',
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
            subtitle={item.subtitle}
            img={item.img}
            sticker={item.sticker}
          >
            {item.children}
          </ItemCarousel>
        ))}
      </OwlCarousel>
    </>
  );
}
