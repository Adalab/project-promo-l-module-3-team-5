import React from 'react';

class Inputs extends React.Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(ev) {
    this.props.handleInputChange(ev);
  }
  render() {
    return (
      <div className="field">
        <label className="field__label" htmlFor={this.props.forId}>
          {this.props.text}
          <span> {this.props.asterisk}</span>
        </label>
        <input
          className="field__input js-fullname js-input-text"
          placeholder={this.props.placeText}
          id={this.props.forId}
          type={this.props.type}
          name={this.props.name}
          onChange={this.handleInput}
          value={this.props.value}
        />
      </div>
    );
  }
}
Inputs.defaultProps = {
  asterisk: '*',
  type: 'text',
  required: true,
};

export default Inputs;
