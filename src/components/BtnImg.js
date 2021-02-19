import React from 'react';

const BtnImg = () => {
  return (
    <div className="field">
      <label className="field__label" htmlFor="profile-image">
        Imagen de perfil<span> *</span>
      </label>
      <div className="rellena-image">
        <input type="file" className="js__profile-upload-btn rellena-image__hidden" />
        <input
          className="rellena-image__add js__profile-trigger"
          id="profile-image"
          type="button"
          value="Añadir imagen"
          name="photo"
          title="sube aquí tu foto, preferentemente cuadrada y bonita"
        />
        <div className="rellena-image__square js__profile-preview"></div>
      </div>
    </div>
  );
};

export default BtnImg;
