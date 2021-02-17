import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header class="header">
        <a href="./index.html#body" class="header__link">
          <img
            class="@@logoClass"
            src="./assets/images/tarjetas-molonas.svg"
            alt="logo de awesome profile cards"
            title="ir a página principal"
          />
        </a>
        <h1 class="header__title">Awesome profile-cards</h1>
      </header>
    );
  }
}
export default Header;
