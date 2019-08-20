import React, { Component } from "react";
import ReactDOM from "react-dom";

import CoolComponent from "./Components/CoolComponent";
import ListComponent from "./Components/ListComponent";
import "./styles.css";

class App extends Component {
  onClick() {
    console.log("App Clicked");
  }

  render() {
    return (
      <>
        <ListComponent />
        <CoolComponent />
      </>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
