import React from 'react';
import './Temoignage.css';

export default function TemoignageItem({ avatar, message, name, job }) {
  return (
    <div className="client_container ">
      <div className="detail-box">
        <p>{message}</p>
        <span>
          <i className="fa fa-quote-left" aria-hidden="true"></i>
        </span>
      </div>
      <div className="client_id">
        <div className="img-box" style={{ backgroundImage: `url(${avatar})` }}></div>
        <div className="client_name">
          <h5>{name}</h5>
          <h6>{job}</h6>
        </div>
      </div>
    </div>
  );
}
