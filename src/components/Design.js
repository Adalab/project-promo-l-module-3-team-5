import React from 'react';
import '../stylesheets/layout/_diseña.scss';
import '../stylesheets/layout/_formulario.scss';

const Design = () => {
  return (
    <div className="collapsable--hide">
      <div className="design__radio">
        <h3 className="design__radio--title">Colores</h3>

        <input name="palette" className="design__radio--input" type="radio" id="paletteOne" value="01" defaultChecked />
        <label className="design__radio--label label__palette label__palette--One" htmlFor="paletteOne">
          Palette One
        </label>

        <input name="palette" className="design__radio--input" type="radio" id="paletteTwo" value="02" />
        <label className="design__radio--label label__palette label__palette--Two" htmlFor="paletteTwo">
          Palette Two
        </label>

        <input name="palette" className="design__radio--input" type="radio" id="paletteThree" value="03" />
        <label className="design__radio--label label__palette label__palette--Three" htmlFor="paletteThree">
          Palette Three
        </label>
      </div>
    </div>
  );
};

export default Design;
