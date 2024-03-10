import { useState } from "react";
import { MyContext } from "./Components/Context";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Hamburger from "./Components/Hamburger";
import About from "./Components/About";
import Services from "./Components/Services";

function App() {
  const [hidden, setHidden] = useState<boolean>(false);
  const [menu, setMenu] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("Home");

  return (
    <>
      <MyContext.Provider
        value={{
          hidden,
          setHidden,
          menu,
          setMenu,
          selected,
          setSelected,
        }}
      >
        <Header />
        <Hamburger />
        <Home />
        <About />
        <Services />
      </MyContext.Provider>
    </>
  );
}

export default App;
