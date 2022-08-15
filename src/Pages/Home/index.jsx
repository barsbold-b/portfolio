import React, { useRef, useEffect, useContext } from "react";
import Canvas from "../../Components/Canvas";
import SubTitle from "../../Components/SubTitle";
import Title from "../../Components/Title";
import { ColorContext } from "../../Context/ColorContext";
import Style from "./style.module.css";

function Home() {
  const homeRef = useRef(null);
  const colors = useContext(ColorContext);
  useEffect(() => {
    homeRef.current.style.backgroundColor = colors.backgroundColor;
  }, []);
  let x = globalThis.innerWidth - 500;
  let y = globalThis.innerHeight - 300;
  useEffect(() => {
    x = globalThis.innerWidth - 500;
    y = globalThis.innerHeight - 300;
  }, [globalThis.innerHeight, globalThis.innerWidth]);
  return (
    <div className={Style.Home} ref={homeRef}>
      <Canvas
        size={335}
        pos={["-100px", "-200px"]}
        direction={[100, 0, 0, 100]}
      />
      <Canvas
        size={140}
        pos={[`${x}px`, `${y}px`]}
        direction={[0, 50, 100, 50]}
      />
      <Title text="Barsbold" />
      <SubTitle
        texts={["A Web developer", "A React developer", "A Mobile developer"]}
      />
    </div>
  );
}
export default Home;
