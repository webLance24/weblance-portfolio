import { useState } from "react";
import { MyContext } from "./Components/Context";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Hamburger from "./Components/Hamburger";
import About from "./Components/About";
import Services from "./Components/Services";
import Projects from "./Components/Projects";
import Layout from "./Components/Layout";
import Team from "./Components/Team";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Grid from "./Components/grid";

function App() {
  const [hidden, setHidden] = useState<boolean>(false);
  const [menu, setMenu] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("Home");
  const [categorie, setCategorie] = useState<string>("ALL");
  const [scrolled, setScrolled] = useState<boolean>(false);

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
        }}
      >
        <Header />
        <Hamburger />
        <Home />
        <About />
        <Services />
        <Projects />
        <Grid />
        <Layout />
        <Team />
        <Contact />
        <Footer />
      </MyContext.Provider>
    </>
  );
}

export default App;
