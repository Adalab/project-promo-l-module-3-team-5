import React from 'react';

const BtnImg = () => {
  return (
    <div className="field">
      <label className="field__label" htmlFor="profile-image">
        Imagen de perfil<span> *</span>
      </label>
      <div className="fill-image">
        <input type="file" className="fill-image__hidden" />
        <input
          className="fill-image__add"
          id="profile-image"
          type="button"
          value="Añadir imagen"
          name="photo"
          title="sube aquí tu foto, preferentemente cuadrada y bonita"
        />
        <div className="fill-image__square"></div>
      </div>
    </div>
  );
};

export default BtnImg;
