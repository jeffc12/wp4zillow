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
        <p>.JPEG/.JPG/.PNG/.GIF references:</p>
        <img src={SwimmingShiba} />
        <img src={'https://cnet3.cbsistatic.com/img/1pHdRZtFv7dxrJb0lcA91O269uc=/1600x900/2019/06/04/98121c1c-e31a-4400-947a-04c188713e15/apple-wwdc-2019-mac-pro-stand3668.jpg'} height="200" width="300" />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"));