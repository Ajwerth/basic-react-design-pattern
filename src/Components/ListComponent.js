import React, { Component } from "react";

import ButtonComponent from "./ButtonComponent";

//Form Button
class FormButtonComponent extends Component {
  onClick() {
    console.log("Form Submitted");
  }

  render() {
    return <ButtonComponent onClick={() => this.onClick()} text="Submit" />;
  }
}

export default FormButtonComponent;
