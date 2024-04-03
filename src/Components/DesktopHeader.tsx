import { useContext, useEffect } from "react";
import { MyContext } from "./Context";
import logo from "../../public/assets/weblance-logo.png";
import { Link } from "react-scroll";
import Scrollspy from "react-scrollspy";

function DesktopHeader() {
  const context = useContext(MyContext);
  const { selected, setSelected, scrolled, setMenu, setHidden }: any = context;

  const buttonCategories = [
    "Home",
    "About",
    "Services",
    "Projects",
    "Team",
    "Contact",
  ];

  // Function to handle scroll event and update the current section
  const handleScroll = () => {
    const sections = buttonCategories.map((category) =>
      category.toLowerCase().replace(/\s+/g, "-")
    );
    for (let i = 0; i < sections.length; i++) {
      const section = document.getElementById(sections[i]);
      if (
        section &&
        section.offsetTop <= window.scrollY + 100 &&
        section.offsetTop + section.offsetHeight > window.scrollY + 100
      ) {
        setSelected(buttonCategories[i]);
        break;
      }
    }
  };

  // Effect to add scroll event listener when component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures that the effect runs only once when component mounts

  return (
    <header
      className={`bg-${
        scrolled ? "black" : "transparent"
      } bg-opacity-80 items-center w-[100%] h-[70px] fixed z-10 hidden lg:flex lg:justify-around`}
    >
      <img className="w-[70px]" src={logo} alt="here is weblance logo" />
      <Scrollspy
        items={buttonCategories.map((category) =>
          category.toLowerCase().replace(/\s+/g, "-")
        )}
        currentClassName="is-current"
        offset={-100}
      >
        <ul className="flex justify-center items-center flex-row gap-[40px] ml-[40px]">
          {buttonCategories.map((category, index) => {
            const categoryId = category.toLowerCase().replace(/\s+/g, "-");
            return (
              <li
                key={index}
                onClick={() => setSelected(category)}
                style={selected === category ? { color: "#FFC451" } : {}}
              >
                <Link
                  key={categoryId}
                  to={categoryId}
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  onClick={() => {
                    setSelected(category);
                    setMenu(false);
                    setHidden(false);
                  }}
                >
                  <span
                    className={`text-[15px] font-semibold pt-[3px] pb-[3px] rounded-[5px] ${
                      selected === category || selected === category
                        ? "text-[#FFC451]"
                        : "text-white"
                    } hover:text-[#FFC451] duration-300 ease-in-out cursor-pointer`}
                  >
                    {category}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </Scrollspy>
      <div className="flex">
        <Link
          to={"home"}
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onClick={() => {
            setMenu(false);
            setHidden(false);
          }}
        >
          <button className="text-[white] w-[118px] h-[40px] outline-none border-[#FFC451] hover:bg-[#FFC451] duration-300 ease-in-out font-normal border-[2px] rounded-[5px] pt-[6px] pl-[24px] pr-[20px] pb-[7px]">
            Get Started
          </button>
        </Link>
      </div>
    </header>
  );
}

export default DesktopHeader;
