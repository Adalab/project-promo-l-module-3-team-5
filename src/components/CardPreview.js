/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../stylesheets/layout/_preview.scss';

class CardPreview extends React.Component {
  render() {
    return (
      <article className="preview__card js-card palette01">
        <div className="card__name color--side">
          <h2 className="card__name--fullname js-fullnamePreview color--fullname">Nombre Apellidos</h2>
          <p className="card__name--ocupation js-positionPreview">Front-end developer</p>
        </div>
        <div className="js__profile-image card__photo"></div>
        <nav>
          <ul className="card__icons">
            <li>
              <a href="" className="js-phonePreview">
                <i className="card__icons--icon color--icon fas fa-mobile-alt"></i>
              </a>
            </li>
            <li>
              <a href="" className="js-emailPreview">
                <i className="card__icons--icon color--icon far fa-envelope"></i>
              </a>
            </li>
            <li>
              <a href="" className="js-linkedinPreview" target="_blank">
                <i className="card__icons--icon color--icon fab fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a href="" className="js-githubPreview" target="_blank">
                <i className="card__icons--icon color--icon fab fa-github-alt"></i>
              </a>
            </li>
          </ul>
        </nav>
      </article>
    );
  }
}

export default CardPreview;