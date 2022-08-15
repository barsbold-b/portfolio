import React from "react";
import Icon from "../Icon";
import Style from "./style.module.css";

const IconedLink = (props) => {
  const eventHandler = () => {
    props.data.action(props.data.value);
  };
  return (
    <div className={Style.IconedLink} onClick={eventHandler}>
      <Icon name={props.data.name} size="1.5em" />
      <p>{props.data.displeyName}</p>
      <span className={Style.ToolTip}>{props.data.toolTipText}</span>
    </div>
  );
};
export default IconedLink;
