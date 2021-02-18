import React from 'react';
import Input from './Input';
import BtnImg from './BtnImg';
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

      <BtnImg />

      <Input
        for="emailAddress"
        text="Email"
        placeText="Ej: sally.hill@gmail.com"
        id="emailAddress"
        type="email"
        name="email"
        asterisk="*"
        required={true}
      />

      <Input
        for="telephone"
        text="Teléfono"
        placeText="Ej: 555-55-55-55"
        id="telephone"
        type="tel"
        name="phone"
        required={false}
      />

      <Input
        for="linkedin"
        text="Linkedin"
        placeText="Ej: linkedin.com/in/sally-hill"
        id="linkedin"
        type="text"
        name="linkedin"
        asterisk="*"
        required={true}
      />

      <Input
        for="github"
        text="Github"
        placeText="Ej: @sally-hill"
        id="github"
        type="text"
        name="github"
        asterisk="*"
        required={true}
      />
    </>
  );
};

export default Fill;
