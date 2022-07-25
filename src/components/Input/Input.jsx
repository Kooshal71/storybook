import React from "react";
import "./Input.css";

export default function Input(props) {
  const { size, ...rest } = props;
  return <input type="text" className={`input ${size}`} {...rest} />;
}
