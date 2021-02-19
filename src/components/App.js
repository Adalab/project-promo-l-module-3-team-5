import '../stylesheets/App.scss';
import React from 'react';
import Header from './Header';
import Design from './Design';
import Fill from './Fill';
import Share from "./Share";
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
            <Fill>
            <Input /> x 5
            <BtnImg />
            </Fill>
          </Fieldset>
        <Fieldset>
        <Collapsable />*/}
        {/*</Fieldset>
         </Form>
          <CardPreview />
        </Main> */}
        <Design />
        <Fill></Fill>
        <Share />
        <Footer />
      </div>
    );
  }
}
export default App;
