import React from 'react';
import '../stylesheets/layout/_preview.scss';

class BtnReset extends React.Component {
  render() {
    return (
      <button className="preview__reset js-btn-reset">
        <i className="far fa-trash-alt"></i>
        <span>Reset</span>
      </button>
    );
  }
}

export default BtnReset;
