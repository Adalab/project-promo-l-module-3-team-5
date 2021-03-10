/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../stylesheets/layout/_preview.scss";

class CardPreview extends React.Component {
  render() {
    const { data } = this.props;

    const githubPrefix = () => {
      let githubLink = data.github;
      if (!data.github) {
        return "#";
      } else {
        // githubLink.replace("https://github.com/", "");
        // console.log(githubLink);
        githubLink = "https://github.com/" + githubLink;
        return githubLink;
      }
    };

    const linkedinPrefix = () => {
      let linkedinLink = data.linkedin;
      if (!data.linkedin) {
        return "#";
      } else {
        return linkedinLink;
      }
    };

    console.log(githubPrefix());

    return (
      <article className={"preview__card palette" + data.palette}>
        <div className="card__name color--side">
          <h2 className="card__name--fullname color--fullname">
            {data.name || "Patti Smith"}
          </h2>
          <p className="card__name--ocupation ">{data.job || "Jefaza"}</p>
        </div>
        <div className=" card__photo"></div>
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
              <a href={ linkedinPrefix()} target="_blank" rel="noreferrer">
                <i className="card__icons--icon color--icon fab fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a href={githubPrefix()} target="_blank" rel="noreferrer">
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
