import React from 'react';
import '../stylesheets/layout/_preview.scss';

class BtnReset extends React.Component {
  render() {
    return (
      <button class="preview__reset js-btn-reset">
        <i class="far fa-trash-alt"></i>
        <span>Reset</span>
      </button>
    );
  }
}

export default BtnReset;
