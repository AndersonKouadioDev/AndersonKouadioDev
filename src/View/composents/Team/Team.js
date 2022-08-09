import React from 'react';
import './Team.css';
import img1 from '../../../images/team/01.jpeg';
import img2 from '../../../images/team/02.jpeg';
import img3 from '../../../images/team/03.jpeg';

export default function Team() {
  return (
    <div style={{backgroundColor: 'black' }}>
      <section className="page-section text-light" id="team">
        <div className="container">
          <div className="text-center">
          <h2 data-aos="fade-up" className="heading_center text-center section-heading" style={{fontFamily:'Jour Script, Arial Narrow Bold', lineHeight: 1.7}}>
          Notre Incroyable Equipe <span  style={{fontFamily:'Arial Narrow Bold'}}>. </span>
          </h2>
            <h3 data-aos="fade-up"  className="section-subheading subtext mt-5">
              Equipe de jeunes Dynamiques prêtes à vous servir!
            </h3>
          </div>

          <div className="row" data-aos="fade-up" >
            <div className="col-lg-4">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src={img1} alt="..." />
                <h4>Joel BOHUI</h4>
                <p className="subtext">Directeur pôle Hôtelier.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src={img2} alt="..." />
                <h4> Prisca KOUAME</h4>
                <p className="subtext">
                  Responsable relations clients en charge de la qualité
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src={img3} alt="..." />
                <h4>Anne KOFFI</h4>
                <p className="subtext">Floor manager</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
