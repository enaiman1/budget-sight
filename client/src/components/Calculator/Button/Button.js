import React from "react";
import "./Button.scss";

// if the child button is a number, decimal , or equal the color will be blue color, if not one of those will be orange colo
export const isOperator = (val) => {
  return !isNaN(val) || val === "." || val === "=";
};

// this is for the regular buttons
export const Button = (props) => (
  <div
    className={`button-wrapper ${
      isOperator(props.children) ? null : "operator"
    }`}
    onClick={() => props.handleClick(props.children)}
  >
    {props.children}
  </div>
);

// this button is specifically to clear the input
export const ClearButton = (props) => (
  <div className="clear-btn" onClick={props.handleClear}>
    {props.children}
  </div>
);