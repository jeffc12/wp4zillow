import React from "react";
import ReactDOM from "react-dom";
import './style.css';
import JSXFile from "./JSXFileTest.jsx";

const App = () => {
  return (
    <div>
      <JSXFile></JSXFile>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));