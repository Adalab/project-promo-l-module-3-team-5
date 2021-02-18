import React from 'react';

const BtnImg = () => {
  return (
    <div class="field">
      <label class="field__label" for="profile-image">
        Imagen de perfil<span> *</span>
      </label>
      <div class="rellena-image">
        <input type="file" class="js__profile-upload-btn rellena-image__hidden" />
        <input
          class="rellena-image__add js__profile-trigger"
          id="profile-image"
          type="button"
          value="Añadir imagen"
          name="photo"
          title="sube aquí tu foto, preferentemente cuadrada y bonita"
        />
        <div class="rellena-image__square js__profile-preview"></div>
      </div>
    </div>
  );
};

export default BtnImg;
