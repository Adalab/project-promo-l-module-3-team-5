import React from "react";
import "../stylesheets/layout/_comparte.scss";

class Share extends React.Component {
  // constructor(props) {
  //   super(props)
  // }
  render() {
    return (
      <div className="collapsable--hide">
        <div className="comparte__nav">
          <button
            type="button"
            className="comparte__nav--button comparte__nav--buttongrey js-create-btn"
            title="comprueba tus datos antes de pulsar"
          >
            <i className="far fa-address-card"></i>crear tarjeta
          </button>
        </div>
        <div className="comparte__nav2 js-hidden-div comparte__nav2--hidden">
          <h3 className="comparte__nav2--text">La tarjeta ha sido creada:</h3>
          <a
            className="comparte__nav2--link js-card-result"
            href=""
            target="_blank"
            title="ir a tarjeta"
          ></a>
          <nav>
            <a
              className="comparte__nav2--link2 twitter-share-button js-twitter"
              href=""
              target="_blank"
            >
              <i className="fab fa-twitter"></i>
              <span className="comparte__nav2--span">compartir en twitter</span>
            </a>
          </nav>
        </div>
      </div>
    );
  }
}

export default Share;
