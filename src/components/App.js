import "../stylesheets/App.scss";
import React from "react";
import Header from "./Header";
import BtnReset from "./BtnReset";
import CardPreview from "./CardPreview";
import Fieldset from "./Fieldset";
import Colapsable from "./Colapsable";
import Design from "./Design";
import Fill from "./Fill";
import Share from "./Share";
import Footer from "./Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleColapsable=this.handleColapsable.bind(this);
    this.state= {
      isOpen : false
    }
  }
  handleColapsable() {
    console.log("holi");
    this.setState({
      isOpen : !this.state.isOpen
    });
  }

  render() {
     const openClassName = this.state.isOpen? "collapsable--on":"";
    return (
      <div className="form centralColumn">
        <Header logoClass="header__generator--img" />
        <main className="main__form">
          <section className="preview">
            <BtnReset />
            <CardPreview />
          </section>
          <form action="" className="main__form--generate" method="POST">
          <Fieldset fieldsetClass="design" classCollapsable={openClassName}>
              <Colapsable
                jsLegend="legend__design"
                faClass="far fa-object-ungroup"
                title="Diseña"
                functionColapsable={this.handleColapsable}
              />
              <Design />
            </Fieldset>
            <Fieldset fieldsetClass="rellena" classCollapsable={openClassName}>
              <Colapsable
                jsLegend="legend__rellena"
                faClass="far fa-keyboard"
                title="Rellena"
                functionColapsable={this.handleColapsable}
              />
              <Fill />
            </Fieldset>
            <Fieldset fieldsetClass="comparte" classCollapsable={openClassName}>
              <Colapsable
                jsLegend="legend__comparte"
                faClass="fas fa-share-alt"
                title="Comparte"
                functionColapsable={this.handleColapsable}
              ></Colapsable>
              <Share />
            </Fieldset>
          </form>
        </main>
        <Footer />
      </div>
    );
  }
}
export default App;
