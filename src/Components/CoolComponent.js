import React, { Component } from "react";

import ButtonComponent from "./ButtonComponent";

//Cool Button
class CoolButtonComponent extends Component {
  onClick() {
    console.log("Cool");
  }

  render() {
    return <ButtonComponent onClick={() => this.onClick()} text="Cool" />;
  }
}

export default CoolButtonComponent;
