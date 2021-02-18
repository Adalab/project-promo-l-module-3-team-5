import "../stylesheets/App.scss";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Share from "./Share";

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
        <Collapsable />*/}
        <Share />
        {/*</Fieldset>
         </Form>
          <CardPreview />
        </Main> */}
        <Footer />
      </div>
    );
  }
}
export default App;
