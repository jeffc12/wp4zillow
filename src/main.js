import React, { Component } from 'react';
import ReactDOM from "react-dom";
import './style.scss';
import Tile from "./jsxFileTest.jsx";
import SwimmingShiba from "./SwimmingShiba.gif"

class App extends Component {
  render() {
    return (
      <div>
        <h1>Webpack 4 Zillow</h1>
        <Tile></Tile>
        <p>.JPEG/.JPG/.PNG/.GIF references :</p>
        <img src={SwimmingShiba} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"));