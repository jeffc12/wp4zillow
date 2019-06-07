import React, { Component } from 'react';
import ReactDOM from "react-dom";
import './style.scss';
import Tile from "./jsxFileTest.jsx";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Webpack 4 Zillow</h1>
        <Tile></Tile>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"));