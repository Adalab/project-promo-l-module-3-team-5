import '../stylesheets/layout/_landing.scss';
import '../stylesheets/layout/_page.scss';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CardGenerator from './CardGenerator';
import { Link, Route, Switch } from 'react-router-dom';

class Landing extends React.Component {
  render() {
    return (
      <div id="body" className="page centralColumn">
        <Header logoClass="header__landing--img" />
        <main className="main--landing">
          <section className="landing">
            <h2 className="landing__title">Crea tu tarjeta de visita</h2>
            <p className="landing__text">
              Crea mejores contactos profesionales de forma fácil y cómoda
            </p>
            <ul className="landing__icons">
              <li>
                <i className="landing__icons--icon far fa-object-ungroup"></i>
                <h3 className="landing__icons--title">Diseña</h3>
              </li>
              <li>
                <i className="landing__icons--icon far fa-keyboard"></i>
                <h3 className="landing__icons--title">Rellena</h3>
              </li>
              <li>
                <i className="landing__icons--icon fas fa-share-alt"></i>
                <h3 className="landing__icons--title">Comparte</h3>
              </li>
            </ul>
          </section>
          <nav className="landing__nav">
            <a
              className="landing__nav--link"
              href="./designcard.html"
              title="Ir a generador de tarjetas"
            >
              Comenzar
            </a>
          </nav>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Landing;
