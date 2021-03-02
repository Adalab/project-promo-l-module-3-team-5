import '../stylesheets/App.scss';
import React from 'react';
import Header from './Header';
import BtnReset from './BtnReset';
import CardPreview from './CardPreview';
import Form from './Form';
import Footer from './Footer';

class CardGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      job: '',
      email: '',
      phone: '',
      linkedin: '',
      github: '',
      palette: '01',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handlePalette = this.handlePalette.bind(this);
  }

  handleInputChange(ev) {
    // console.log(ev.target.value);
    // console.log(ev.target.name);
    console.log(this.state);
    const value = ev.target.value;
    const key = ev.target.name;
    this.setState({
      [key]: value,
    });
  }

  handlePalette(ev) {
    // console.log('man cambiao', ev.target.value);
    this.setState({ palette: ev.target.value });
  }

  render() {
    return (
      <div className="form centralColumn">
        <Header logoClass="header__generator--img" />
        <main className="main__form">
          <section className="preview">
            <BtnReset />
            <CardPreview data={this.state} palette={this.state.palette} handleInputChange={this.handleInputChange} />
          </section>
          <section>
            <Form data={this.state} handleInputChange={this.handleInputChange} handlePalette={this.handlePalette} />
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}

export default CardGenerator;
