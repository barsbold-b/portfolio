import React, { useRef, useContext, useEffect } from "react";
import { ColorContext } from "../../Context/ColorContext";
import Icon from "../Icon";
import Style from "./style.module.css";

function Card(props) {
  const cardRef = useRef(null);
  const colors = useContext(ColorContext);
  useEffect(() => {
    cardRef.current.style.backgroundColor = `${colors.gradient.start}50`;
    cardRef.current.style.color = colors.gradient.end;
  }, []);
  return (
    <div className={Style.Card} ref={cardRef}>
      <Icon name={props.data.name} size="2em" />
      <p className={Style.More}>{props.data.text}</p>
    </div>
  );
}
export default Card;
