import '../stylesheets/App.scss';
import React from 'react';
import Header from './Header';
import Fill from './Fill';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <div className="form centralColumn">
        <Header />
        {/* <include src="./partials/main.html"></include>
        <include src="./partials/footer.html"></include> */}
        {/* <Main>
          <Form>
          <Fieldset>
            <Collapsable />
            <Design />
          </Fieldset>
          <Fieldset>
            <Collapsable />
            <Fill />
          </Fieldset>
          <Fieldset>
            <Collapsable />
            <Share />
          </Fieldset>
          </Form>
          <CardPreview />
        </Main> */}
        <Fill />
        <Footer />
      </div>
    );
  }
}
export default App;
