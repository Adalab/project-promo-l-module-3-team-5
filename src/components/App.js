import '../stylesheets/App.scss';
import React from 'react';
import Header from './Header';
import BtnReset from './BtnReset';
import CardPreview from './CardPreview';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <div className="form centralColumn">
        <Header logoClass="header__generator--img" />
        <main class="main__form">
          <section class="preview">
            <BtnReset />
            <CardPreview />
          </section>
          <form action="" class="main__form--generate" method="POST">
            <Design />
            <Fill />
            <Share />
          </form>
        </main>
        <Footer />
      </div>
    );
  }
}
export default App;
