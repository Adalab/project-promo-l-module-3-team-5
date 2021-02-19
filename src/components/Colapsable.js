import React from 'react';
import '../stylesheets/layout/_formulario.scss';

class Colapsable extends React.Component {
  constructor(props){
    super(props);    
  }
    render() {
      return (
        <legend className={"legend "+this.props.jsLegend} title="click aquí para abrir/cerrar">
            <i className={"legend__icon--main "+this.props.faClass}></i>
             <h3 className="legend__title">{this.props.title}</h3> 
            <i className="legend__icon--arrow collapsable--close fas fa-angle-down"></i>
        </legend>
      );
    }
  }

export default Colapsable;