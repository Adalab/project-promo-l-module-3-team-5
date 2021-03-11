/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../stylesheets/layout/_preview.scss";
import defaultAvatar from '../images/image-default.jpg';

class CardPreview extends React.Component {
  render() {
    const { data } = this.props;

    const linkedinUser = () => {
      const linkedinPrefix = "https://www.linkedin.com/in/";
      let linkedinLink = data.linkedin.toString();
      if (!data.linkedin) {
        return "#";
      } else {
        linkedinLink = linkedinLink.replace(linkedinPrefix, "");
        linkedinLink = linkedinPrefix + linkedinLink;
        return linkedinLink;
      }
    };

    const githubUser = () => {
      const githubPrefix = "https://github.com/";
      let githubLink = data.github.toString();
      if (!data.github) {
        return "#";
      } else {
        githubLink = githubLink.replace(githubPrefix, "");
        githubLink = githubPrefix + githubLink;
        return githubLink;
      }
    };

    console.log(githubUser());
    const avatar = this.props.avatar === '' ? defaultAvatar : this.props.avatar;
    return (
      <article className={"preview__card palette" + data.palette}>
        <div className="card__name color--side">
          <h2 className="card__name--fullname color--fullname">
            {data.name || "Patti Smith"}
          </h2>
          <p className="card__name--ocupation ">{data.job || "Jefaza"}</p>
        </div>
        <div className=" card__photo" style={{ backgroundImage: `url(${avatar})` }}></div>
        <nav>
          <ul className="card__icons">
            <li>
              <a href={data.phone || ""}>
                <i className="card__icons--icon color--icon fas fa-mobile-alt"></i>
              </a>
            </li>
            <li>
              <a href={"mailto:" + data.email || "#"}>
                <i className="card__icons--icon color--icon far fa-envelope"></i>
              </a>
            </li>
            <li>
              <a href={linkedinUser()} target="_blank" rel="noreferrer">
                <i className="card__icons--icon color--icon fab fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a href={githubUser()} target="_blank" rel="noreferrer">
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
