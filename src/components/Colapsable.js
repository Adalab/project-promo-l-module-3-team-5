import React from 'react';
import '../stylesheets/layout/_formulario.scss';

class Colapsable extends React.Component {
    render() {
      return (
        <legend class="legend @@jsLegend" title="click aquí para abrir/cerrar">
            <i class="legend__icon--main @@faClass"></i>
            <h3 class="legend__title">@@title</h3>
            <i class="legend__icon--arrow collapsable--close fas fa-angle-down"></i>
        </legend>
      );
    }
  }

export default Colapsable;