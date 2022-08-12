import React from "react";
import Style from "./style.module.css";

function Title(props) {
  return <h1 className={Style.Header}>{props.text}</h1>;
}
export default Title;
