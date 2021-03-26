/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
// import Colapsable from './Colapsable';
import '../stylesheets/layout/_share.scss';

class Share extends React.Component {
  constructor(props) {
    super(props);
    this.handleShare = this.handleShare.bind(this);
  }

  handleShare() {
    this.props.handleApi();
  }

  render() {
    const cardShare = () => {
      if (this.props.data.cardURL) {
        return (
          <div className="share__nav2 ">
            {/* share__nav2--hidden */}
            <h3 className="share__nav2--text">La tarjeta ha sido creada: </h3>
            <a
              className="share__nav2--link"
              href={this.props.data.cardURL}
              target="_blank"
              title="ir a tarjeta"
              rel="noreferrer"
            >
              {this.props.data.cardURL}
            </a>
            <div>
              <a className="share__nav2--link2 twitter-share-button" href="" target="_blank">
                <i className="fab fa-twitter"></i>
                <span className="share__nav2--span">Compartir en twitter</span>
              </a>
            </div>
          </div>
        );
      } else if (this.props.data.err) {
        return (
          <div className="share__nav2 ">
            <h3 className="share__nav2--text">Rellena todos los campos para que tu tarjeta sea realmente AWESOME. </h3>
          </div>
        );
      }
    };

    return (
      <div className="collapsable--hide">
        <div className="share__nav">
          <button
            type="button"
            className="share__nav--btn share__nav--btngrey"
            title="Comprueba tus datos antes de pulsar"
            onClick={this.handleShare}
          >
            <i className="far fa-address-card"></i>Crear tarjeta
          </button>
        </div>
        {cardShare()}
      </div>
    );
  }
}

export default Share;
