<<<<<<< HEAD
import "../stylesheets/App.scss";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Share from "./Share";
=======
import '../stylesheets/App.scss';
import React from 'react';
import Header from './Header';
import Design from './Design';
import Fill from './Fill';
import Footer from './Footer';
>>>>>>> dev

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
        <Share />
        {/*</Fieldset>
         </Form>
          <CardPreview />
        </Main> */}
        <Design />
        <Fill></Fill>
        <Footer />
      </div>
    );
  }
}
export default App;
