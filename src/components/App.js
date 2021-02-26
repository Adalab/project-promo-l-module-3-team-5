import "../stylesheets/App.scss";
import React from "react";
import Header from "./Header";
import BtnReset from "./BtnReset";
import CardPreview from "./CardPreview";
import Form from "./Form";
import Footer from "./Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      job: "",
      email: "",
      phone: "",
      linkedin: "",
      github: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(ev) {
    console.log(ev.target.value);
    console.log(ev.target.name);
    const value = ev.target.value;
    const key = ev.target.name;
    this.setState({
      [key]: value,
    });
  }

  render() {
    return (
      <div className="form centralColumn">
        <Header logoClass="header__generator--img" />
        <main className="main__form">
          <section className="preview">
            <BtnReset />
            <CardPreview
              data={this.state}
              handleInputChange={this.handleInputChange}
            />
          </section>
          <section>
            <Form
              data={this.state}
              handleInputChange={this.handleInputChange}
            />
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
