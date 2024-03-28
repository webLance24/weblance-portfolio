import { useState } from "react";
import { MyContext } from "./Components/Context";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Hamburger from "./Components/Hamburger";
import About from "./Components/About";
import Services from "./Components/Services";
import Projects from "./Components/Projects";
import Team from "./Components/Team";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import DesktopHeader from "./Components/DesktopHeader";

function App() {
  const [hidden, setHidden] = useState<boolean>(false);
  const [menu, setMenu] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("Home");
  const [categorie, setCategorie] = useState<string>("ALL");
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [done, setDone] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

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
          categorie,
          setCategorie,
          scrolled,
          setScrolled,
          inputValue,
          setInputValue,
          done,
          setDone,
          error,
          setError,
        }}
      >
        <Header />
        <DesktopHeader />
        <Hamburger />
        <Home />
        <About />
        <Services />
        <Projects />
        <Team />
        <Contact />
        <Footer />
      </MyContext.Provider>
    </>
  );
}

export default App;
