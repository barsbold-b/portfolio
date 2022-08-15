import React, { useRef, useEffect, useContext, useState } from "react";
import { ColorContext } from "../../Context/ColorContext";
import Style from "./style.module.css";

const SubTitle = (props) => {
  const textRef = useRef(null);
  const colors = useContext(ColorContext);
  useEffect(() => {
    textRef.current.style.color = colors.textColor;
    const element = textRef.current;
    let count = 0;
    let index = 0;
    let currentText = "";
    let isTyping = true;
    let letter = "";
    let time;
    (function type() {
      if (count === props.texts.length) count = 0;
      currentText = props.texts[count];
      if (isTyping) {
        letter = currentText.slice(0, ++index);
        time = 400;
      } else {
        time = 100;
        letter = currentText.slice(0, --index);
      }
      console.log(index);
      element.textContent = letter;
      if (letter.length === currentText.length) {
        time = 2000;
        isTyping = false;
      }
      if (letter.length === 0) {
        isTyping = true;
        count++;
        time = 1000;
      }

      setTimeout(type, time);
    })();
  }, []);
  return (
    <div className={Style.Blur}>
      <p className={Style.SubTitle} ref={textRef}>
        {props.texts[0]}
      </p>
    </div>
  );
};
export default SubTitle;
