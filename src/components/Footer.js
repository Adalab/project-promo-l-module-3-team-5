import React from 'react';
import logoAdalab from '../images/logo-adalab.png';
import '../stylesheets/layout/_footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <small className="footer__small">Awesome profile-cards @2021</small>
      <a className="footer__link" href="https://adalab.es/" target="_blank" rel="noreferrer">
        <img src={logoAdalab} alt="Logo de Adalab" title="Ir a Adalab" className="footer__link--logo" />
      </a>
    </footer>
  );
};

export default Footer;
