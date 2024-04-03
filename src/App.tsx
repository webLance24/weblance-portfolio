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
import { Link } from "react-scroll";
import arrowup from "../public/assets/arrow-up.png";

function App() {
  const [hidden, setHidden] = useState<boolean>(false);
  const [menu, setMenu] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("Home");
  const [categorie, setCategorie] = useState<string>("ALL");
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [done, setDone] = useState<boolean>(false);
  const [inputError, setInputError] = useState<string>("");

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
          inputError,
          setInputError,
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
        <Link
          to={"home"}
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onClick={() => setSelected("Home")}
        >
          <div
            className={`fixed right-[10px] bottom-[10px] circle cursor-pointer w-[40px] h-[40px] hover:bg-[#ffc5515c] duration-300 ease-in-out outline-none bg-[${
              scrolled ? "#FFC451" : "transparent"
            }] flex justify-center items-center transition-opacity duration-300 ${
              scrolled ? "opacity-100" : "opacity-0"
            }`}
            style={{ transition: "background-color 0.3s ease-in-out" }}
          >
            <img
              src={arrowup}
              className="hover:scale-105 transition-all duration-300 w-[25px] h-[25px]"
              alt="Scroll Up"
            />
          </div>
        </Link>
      </MyContext.Provider>
    </>
  );
}

export default App;
