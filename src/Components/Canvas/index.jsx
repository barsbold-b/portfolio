import React, { useRef } from "react";
import Style from "./style.module.css";

function Canvas() {
  const canvasRef = useRef(null);
  return <canvas ref={canvasRef} className={Style.Canvas}></canvas>;
}
export default Canvas;
