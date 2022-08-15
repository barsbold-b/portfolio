import React from "react";
import { useState } from "react";
export const ColorContext = React.createContext();

function ColorContextProvider({ children }) {
  console.log(ColorContext);
  const [color, setColor] = useState({
    backgroundColor: "#221E22",
    textColor: "#C8C8C8",
    gradient: {
      start: "#832099",
      end: "#F4C85A",
    },
  });
  return (
    <ColorContext.Provider value={color}>{children}</ColorContext.Provider>
  );
}
export default ColorContextProvider;
