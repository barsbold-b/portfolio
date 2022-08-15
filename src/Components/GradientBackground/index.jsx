import React, { useRef, useContext, useEffect } from "react";
import { ColorContext } from "../../Context/ColorContext";
import Style from "./style.module.css";

const GradientBackground = ({ children }) => {
  const colors = useContext(ColorContext);
  const bgRef = useRef(null);
  useEffect(() => {
    bgRef.current.style.backgroundImage = `linear-gradient(to right, ${colors.gradient.start}, ${colors.gradient.end})`;
  }, []);
  return (
    <div ref={bgRef} className={Style.GradientBackground}>
      {children}
    </div>
  );
};
export default GradientBackground;
