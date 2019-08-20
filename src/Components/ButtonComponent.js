import React from "react";

const ButtonComponent = props => (
  <button onClick={() => props.onClick()}>{props.text}</button>
);

export default ButtonComponent;
