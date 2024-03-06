import { useState } from "react";
import { MyContext } from "./Components/Context";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Hamburger from "./Components/Hamburger";
import LightBox from "./Components/LightBox";

function App() {
  const [hidden, setHidden] = useState<boolean>(false);
  const [menu, setMenu] = useState<boolean>(false);
  const [showLightBox, setShowLightBox] = useState<boolean>(false);

  return (
    <>
      <MyContext.Provider
        value={{
          hidden,
          setHidden,
          menu,
          setMenu,
          showLightBox,
          setShowLightBox,
        }}
      >
        <Header />
        <Home />
        <Hamburger />
        <LightBox />
      </MyContext.Provider>
    </>
  );
}

export default App;
