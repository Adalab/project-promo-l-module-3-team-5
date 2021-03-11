import '../stylesheets/App.scss';
import React from 'react';
import Header from './Header';
import BtnReset from './BtnReset';
import CardPreview from './CardPreview';
import Form from './Form';
import Footer from './Footer';
import ls from '../services/localStorage';


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
    this.handleReset = this.handleReset.bind(this);
  }

  componentDidUpdate() {
    // escribir en el local storage lo hacemo cuando el componente ya ha sido actualizado
    ls.set('name', this.state.name);
    ls.set('job', this.state.job);
    ls.set('email', this.state.email);
    ls.set('phone', this.state.phone);
    ls.set('linkedin', this.state.linkedin);
    ls.set('github', this.state.github);
    ls.set('palette', this.state.palette);
  }

  componentDidMount() {
    // leer del local storage lo hacemos en el componentDidMount
    const localStorageName = ls.get('name');
    if (localStorageName) {
      this.setState({name: localStorageName});
    }
    const localStorageJob = ls.get('job');
    if (localStorageJob) {
      this.setState({job: localStorageJob});
    }
    const localStorageEmail = ls.get('email');
    if (localStorageEmail) {
      this.setState({email: localStorageEmail});
    }
    const localStoragePhone = ls.get('phone');
    if (localStoragePhone) {
      this.setState({phone: localStoragePhone});
    }
    const localStorageLinkedin = ls.get('linkedin');
    if (localStorageLinkedin) {
      this.setState({linkedin: localStorageLinkedin});
    }
    const localStorageGithub = ls.get('github');
    if (localStorageGithub) {
      this.setState({github: localStorageGithub});
    }
    const localStoragePalette = ls.get('palette');
    if (localStoragePalette) {
      this.setState({palette: localStoragePalette});
    }
  }



  handleReset() {
    console.log('Me han clickado');
    this.setState({ name: '', job: '', email: '', phone: '', linkedin: '', github: '', palette: '01' });
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
            <BtnReset handleReset={this.handleReset} />
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
