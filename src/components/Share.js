/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import Colapsable from './Colapsable';
import '../stylesheets/layout/_share.scss';

class Share extends React.Component {
  // constructor(props) {
  //   super(props)
  // }
  render() {
    return (
      <div className="collapsable--hide">
        <div className="share__nav">
          <button
            type="button"
            className="share__nav--btn share__nav--btngrey"
            title="Comprueba tus datos antes de pulsar"
          >
            <i className="far fa-address-card"></i>Crear tarjeta
          </button>
        </div>
        <div className="share__nav2 share__nav2--hidden">
          <h3 className="share__nav2--text">La tarjeta ha sido creada:</h3>
          <a className="share__nav2--link" href="" target="_blank" title="ir a tarjeta"></a>
          <nav>
            <a className="share__nav2--link2 twitter-share-button" href="" target="_blank">
              <i className="fab fa-twitter"></i>
              <span className="share__nav2--span">Compartir en twitter</span>
            </a>
          </nav>
        </div>
      </div>
    );
  }
}

export default Share;
