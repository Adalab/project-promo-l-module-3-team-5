import React from 'react';

const Inputs = (props) => {
  return (
    <div className="field">
      <label className="field__label" htmlFor={props.forId}>
        {props.text}
        <span> {props.asterisk}</span>
      </label>
      <input
        className="field__input js-fullname js-input-text"
        placeholder={props.placeText}
        id={props.forId}
        type={props.type}
        name={props.name}
      />
    </div>
  );
};
Inputs.defaultProps = {
  asterisk: '*',
  type: 'text',
  required: true,
};

export default Inputs;
