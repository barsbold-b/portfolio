import React, { useRef, useEffect } from "react";
import Style from "./style.module.css";

const GridContainer = ({ children, size }) => {
  const contRef = useRef(null);
  useEffect(() => {
    contRef.current.style.gridTemplateColumns = `repeat(${size}, auto)`;
  }, []);
  return (
    <div ref={contRef} className={Style.GridContainer}>
      {children}
    </div>
  );
};
export default GridContainer;
