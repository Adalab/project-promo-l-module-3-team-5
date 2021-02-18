import React from 'react';
import Input from './Input';
import BtnImg from './BtnImg';
import '../stylesheets/layout/_rellena.scss';

const Fill = () => {
  return (
    <>
      <Input forId="completeName" text="Nombre completo" placeText="Ej: Sally Jill" name="name" />

      <Input forId="position" text="Puesto" placeText="Ej: Front-end unicorn" name="job" />

      <BtnImg />

      <Input forId="emailAddress" text="Email" placeText="Ej: sally.hill@gmail.com" type="email" name="email" />

      <Input
        forId="telephone"
        text="Teléfono"
        placeText="Ej: 555-55-55-55"
        type="tel"
        name="phone"
        asterisk=""
        required={false}
      />

      <Input forId="linkedin" text="Linkedin" placeText="Ej: linkedin.com/in/sally-hill" name="linkedin" />

      <Input forId="github" text="Github" placeText="Ej: @sally-hill" name="github" />
    </>
  );
};

export default Fill;
