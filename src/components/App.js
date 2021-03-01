import "../stylesheets/App.scss";
import React from "react";
import CardGenerator from "./CardGenerator";
import Landing from "./Landing";
import { Link, Route, Switch } from 'react-router-dom';


class App extends React.Component {
  
  render() {
    return (
      <div>
        <Landing />
      </div>
    );
  }
}

export default App;
