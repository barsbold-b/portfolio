import React, { useRef } from "react";
import Style from "./style.module.css";

function TypingText(props) {
  const textRef = useRef(null);
  return <p ref={textRef}></p>;
}
export default TypingText;
