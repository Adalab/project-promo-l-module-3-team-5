import React from "react";
import PropTypes from "prop-types";
import defaultAvatar from "../images/image-default.jpg";
import "../stylesheets/layout/_fill.scss";

class GetAvatar extends React.Component {
  constructor(props) {
    super(props);
    this.fr = new FileReader();

    this.myFileField = React.createRef();

    this.uploadImage = this.uploadImage.bind(this);
    this.getImage = this.getImage.bind(this);
  }

  uploadImage(ev) {
    console.log("La usuaria ha abierto la ventana para elegir ficheros");
    console.log("La usuaria ha elegido los ficheros", ev.currentTarget.files);
    console.log(
      "El primero de los ficheros elegidos es",
      ev.currentTarget.files[0]
    );
    if (ev.currentTarget.files.length > 0) {
      const myFile = ev.currentTarget.files[0];
      this.fr.addEventListener("load", this.getImage);
      this.fr.readAsDataURL(myFile);
    }
  }

  getImage() {
    console.log("Información útil sobre el fichero cargado", this.fr);
    const image = this.fr.result;
    this.props.getAvatar(image);
  }

  render() {
    console.log(this.props);
    const avatar = this.props.avatar === "" ? defaultAvatar : this.props.avatar;
    return (
      <div className="get-avatar">
        <label className="field__label" htmlFor="profile-image">
          Imagen de perfil<span> *</span>
        </label>
        <div className="fill-image">
          <label className="get-avatar__label" type="button">
            Get avatar!
            <input
              className="fill-image__hidden"
              type="file"
              ref={this.myFileField}
              onChange={this.uploadImage}
            />
          </label>

          <div
            className="get-avatar__preview"
            style={{ backgroundImage: `url(${avatar})` }}
          ></div>
        </div>
      </div>
    );
  }
}

// GetAvatar.propTypes = {
//   avatar: PropTypes.string.isRequired,
//   updateAvatar: PropTypes.func.isRequired
// };

export default GetAvatar;
