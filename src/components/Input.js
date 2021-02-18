import React from 'react';

const Inputs = (props) => {
  return (
    <div className="field">
      <label className="field__label" for={props.for}>
        {props.text}
        <span> *</span>
      </label>
      <input
        className="field__input js-fullname js-input-text"
        placeholder={props.placeText}
        id={props.id}
        type={props.type}
        name={props.name}
      />
    </div>
  );
};

export default Inputs;
