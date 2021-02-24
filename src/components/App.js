import '../stylesheets/App.scss';
import React from 'react';
import Header from './Header';
import BtnReset from './BtnReset';
import CardPreview from './CardPreview';
import Form from './Form';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <div className="form centralColumn">
        <Header logoClass="header__generator--img" />
        <main className="main__form">
          <section className="preview">
            <BtnReset />
            <CardPreview />
          </section>
          <section>
            <Form />
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}
export default App;
