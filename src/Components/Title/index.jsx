import React, { useRef, useContext, useEffect } from "react";
import Style from "./style.module.css";

import { ColorContext } from "../../Context/ColorContext";

function Title(props) {
  const titleRef = useRef(null);
  const colors = useContext(ColorContext);
  useEffect(() => {
    titleRef.current.style.color = colors.textColor;
  }, []);
  return (
    <h1 ref={titleRef} className={Style.Header}>
      {props.text}
    </h1>
  );
}
export default Title;
