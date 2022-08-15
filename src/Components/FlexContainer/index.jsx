import React from "react";
import Style from "./style.module.css";

const FlexContainer = ({ children }) => {
  return <div className={Style.FlexContainer}>{children}</div>;
};
export default FlexContainer;
