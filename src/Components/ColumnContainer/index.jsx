import React from "react";
import Style from "./style.module.css";

const ColumnContainer = ({ children }) => {
  return <div className={Style.ColumnContainer}>{children}</div>;
};
export default ColumnContainer;
