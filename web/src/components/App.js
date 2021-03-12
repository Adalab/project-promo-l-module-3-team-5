import "../stylesheets/App.scss";
import React from "react";
import CardGenerator from "./CardGenerator";
import Landing from "./Landing";
import { Link, Route, Switch } from 'react-router-dom';


class App extends React.Component {
  
  render() {
    return (
      <>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/cardGenerator" component={CardGenerator} />
      </Switch>
      </>
    );
  }
}

export default App;
