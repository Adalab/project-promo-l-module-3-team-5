import '../stylesheets/layout/_form.scss';
import React from 'react';
import Fieldset from './Fieldset';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';

class Form extends React.Component {
  render() {
    return (
      <form action="" className="main__form--generate" method="POST">
        <Fieldset fieldsetClass="design" title="Diseña" faClass="far fa-object-ungroup">
          <Design />
        </Fieldset>
        <Fieldset fieldsetClass="fill" title="Rellena" faClass="far fa-keyboard">
          <Fill handleInputChange={this.props.handleInputChange} />
        </Fieldset>
        <Fieldset fieldsetClass="share" title="Comparte" faClass="fas fa-share-alt">
          <Share />
        </Fieldset>
      </form>
    );
  }
}
export default Form;
