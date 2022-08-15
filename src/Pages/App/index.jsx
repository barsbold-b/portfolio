import Style from "./style.module.css";
import Home from "../Home";
import ColorContextProvider from "../../Context/ColorContext";
import Skills from "../Skills";

function App() {
  return (
    <div>
      <ColorContextProvider>
        <Home />
        <Skills />
      </ColorContextProvider>
    </div>
  );
}

export default App;
