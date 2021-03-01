import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/tarjetas-molonas.svg';
import '../stylesheets/layout/_header.scss';

class Header extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <header className="header">
        <Link to="./" className="header__link">
          <img
            className={this.props.logoClass}
            src={logo}
            alt="Logo de awesome profile cards"
            title="Ir a página principal"
          />
        </Link>
        <h1 className="header__title">Awesome profile-cards</h1>
      </header>
    );
  }
}
export default Header;
