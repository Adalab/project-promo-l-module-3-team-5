import React from 'react';

class Fieldset extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log('holi');
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const openClassName = this.state.isOpen ? 'collapsable--on' : '';
    return (
      <fieldset className={this.props.fieldsetClass + ' collapsable ' + openClassName}>
        <legend
          className={'legend ' + this.props.jsLegend}
          title="Click aquí para abrir/cerrar"
          onClick={this.handleClick}
        >
          <i className={'legend__icon--main ' + this.props.faClass}></i>
          <h3 className="legend__title">{this.props.title}</h3>
          <i className="legend__icon--arrow collapsable--close fas fa-angle-down"></i>
        </legend>
        {this.props.children}
      </fieldset>
    );
  }
}

export default Fieldset;
