import React, { useRef } from "react";
import Style from "./style.module.css";

function Icon(props) {
  const iconRef = useRef(null);
  return <i className={Style.Icon} ref={iconRef}></i>;
}
export default Icon;
