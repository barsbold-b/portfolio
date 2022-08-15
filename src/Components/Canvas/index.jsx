import React, { useRef, useEffect, useContext } from "react";
import { ColorContext } from "../../Context/ColorContext";
import Style from "./style.module.css";

function Canvas(props) {
  const canvasRef = useRef(null);
  const colors = useContext(ColorContext);
  const draw = (context) => {
    const gradient = context.createLinearGradient(
      (props.size * 2 * props.direction[0]) / 100,
      (props.size * 2 * props.direction[1]) / 100,
      (props.size * 2 * props.direction[2]) / 100,
      (props.size * 2 * props.direction[3]) / 100
    );
    gradient.addColorStop(0, colors.gradient.start);
    gradient.addColorStop(1, colors.gradient.end);
    context.beginPath();
    context.fillStyle = gradient;
    context.arc(props.size, props.size, props.size, 0, 2 * Math.PI);
    context.fill();
    context.closePath();
  };
  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.height = props.size * 2;
    canvas.width = props.size * 2;
    canvas.style.left = props.pos[0];
    canvas.style.top = props.pos[1];
    const context = canvas.getContext("2d");

    draw(context);
  }, [draw]);
  return <canvas ref={canvasRef} className={Style.Canvas}></canvas>;
}
export default Canvas;
