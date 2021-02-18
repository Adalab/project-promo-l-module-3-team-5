import React from 'react';
import Input from './Input';
import '../stylesheets/layout/_rellena.scss';

const Fill = () => {
  return (
    <>
      <Input
        for="completeName"
        text="Nombre completo"
        placeText="Ej: Sally Jill"
        id="completeName"
        type="text"
        name="name"
        required={true}
      />

      <Input
        for="position"
        text="Puesto"
        placeText="Ej: Front-end unicorn"
        id="position"
        type="text"
        name="job"
        required={true}
      />

      <Input for="" text="" placeText="" id="" type="" name="" />
      <div className="field">
        <label className="field__label" for="profile-image">
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
      <Input for="" text="" placeText="" id="" type="" name="" />
      <div className="field">
        <label className="field__label" for="emailAddress">
          Email<span> *</span>
        </label>
        <input
          className="field__input js-email js-input-text"
          id="emailAddress"
          type="email"
          name="email"
          placeholder="Ej: sally.hill@gmail.com"
          required
        />
      </div>
      <Input for="" text="" placeText="" id="" type="" name="" />
      <div className="field">
        <label className="field__label" for="telephone">
          Teléfono
        </label>
        <input
          className="field__input js-phone js-input-text"
          id="telephone"
          type="tel"
          name="phone"
          placeholder="Ej: 555-55-55-55"
        />
      </div>
      <Input for="" text="" placeText="" id="" type="" name="" />
      <div className="field">
        <label className="field__label" for="linkedin">
          Linkedin<span> *</span>
        </label>
        <input
          className="field__input js-linkedin js-input-text"
          id="linkedin"
          type="text"
          name="linkedin"
          placeholder="Ej: linkedin.com/in/sally-hill"
          required
        />
      </div>
      <Input for="" text="" placeText="" id="" type="" name="" />
      <div className="field">
        <label className="field__label" for="github">
          Github<span> *</span>
        </label>
        <input
          className="field__input js-github js-input-text"
          id="github"
          type="text"
          name="github"
          placeholder="Ej: @sally-hill"
          required
        />
      </div>
    </>
  );
};

export default Fill;
