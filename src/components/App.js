import '../stylesheets/App.scss';
import React from 'react';
import Header from './Header';
import Design from './Design';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <div className="form centralColumn">
        <Header />
        {/* <include src="./partials/main.html"></include>
        <include src="./partials/footer.html"></include> */}
        {/* <Main>
          <Form />
          <CardPreview />
        </Main> */}
        <Design />
        <Footer />
      </div>
    );
  }
}
export default App;
