/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../stylesheets/layout/_preview.scss';

class CardPreview extends React.Component {
  render() {
    return (
      <article className="preview__card palette01">
        <div className="card__name color--side">
          <h2 className="card__name--fullname color--fullname">Nombre Apellidos</h2>
          <p className="card__name--ocupation ">Front-end developer</p>
        </div>
        <div className=" card__photo"></div>
        <nav>
          <ul className="card__icons">
            <li>
              <a href={this.props.data.phone || ''}>
                <i className="card__icons--icon color--icon fas fa-mobile-alt"></i>
              </a>
            </li>
            <li>
              <a href={this.props.data.email || ''}>
                <i className="card__icons--icon color--icon far fa-envelope"></i>
              </a>
            </li>
            <li>
              <a href={this.props.data.linkedin || ''} target="_blank" rel="noreferrer">
                <i className="card__icons--icon color--icon fab fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a href={this.props.data.github || ''} target="_blank" rel="noreferrer">
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
