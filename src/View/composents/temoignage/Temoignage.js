import React from 'react';
import TemoignageItem from './TemoignageItem';
import './Temoignage.css';

export default function Temoignage() {
  const data = [
    {
      avatar: 'assets/images/carousel/c1.jpg',
      message:
        "Editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by",
      name: 'Anderson Kouadio',
      name: 'Anderson Kouadio',
      jo: 'Développeur',
    },
    {
      avatar: 'assets/images/carousel/c2.jpg',
      message:
        "Editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by",
      name: 'Anderson Kouadio',
      name: 'Anderson Kouadio',
      jo: 'Développeur',
    },
    {
      avatar: 'assets/images/carousel/c3.jpg',
      message:
        "Editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by",
      name: 'Anderson Kouadio',
      name: 'Anderson Kouadio',
      jo: 'Développeur',
    },
  ];
  return (
    <div
      className="client_section layout_padding"
      style={{ boxShadow: '0px 1px 10px #00000016' }}
    >
      <div className="container ">
        <div className="heading_container heading_center">
          <h2>Les Témoignages</h2>
        </div>
        <div className="row">
          {data.map((item, index) => (
            <div className="col-md-6 mx-auto" key="index">
              <TemoignageItem
                avatar={item.avatar}
                message={item.message}
                name={item.name}
                job={item.job}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
