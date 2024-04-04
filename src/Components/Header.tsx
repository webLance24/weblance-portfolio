import { useContext, useEffect } from "react";
import { MyContext } from "./Context";
import logo from "../../public/assets/weblance-logo.png";
import { Link } from "react-scroll";

interface ComponentsProps {
  hidden: boolean;
  setHidden: (hidden: boolean) => void;
  menu: boolean;
  setMenu: (menu: boolean) => void;
  className: any;
}

// syule burger section

const StyledBurger = ({
  hidden,
  setHidden,
  menu,
  setMenu,
  className,
  ...props
}: ComponentsProps) => (
  <button
    className={`flex flex-col justify-around w-8 h-8 bg-transparent border-none cursor-pointer p-0 z-10 focus:outline-none mb-[7px] ${className}`}
    onClick={() => {
      setHidden(!hidden);
      setMenu(!menu);
    }}
    {...props}
  >
    <div
      className={`w-8 h-1 bg-white rounded-md transition-all duration-300 ease-in-out mt-[7px] ${
        hidden ? "transform rotate-45 translate-y-2" : "transform rotate-0"
      }`}
    ></div>
    <div
      className={`w-8 h-1 bg-white rounded-md transition-all duration-300 ease-in-out ${
        hidden ? "opacity-0" : "opacity-1"
      }`}
    ></div>
    <div
      className={`w-8 h-1 bg-white rounded-md transition-all duration-300 ease-in-out ${
        hidden ? "transform -rotate-45 -translate-y-2" : "transform rotate-0"
      }`}
    ></div>
  </button>
);

function Header() {
  const context = useContext(MyContext);
  const {
    hidden,
    setHidden,
    menu,
    setMenu,
    setScrolled,
    scrolled,
    setSelected,
  }: any = context;

  // use useeffect for when header scroll down show background

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`bg-${
        scrolled ? "black" : "transparent"
      } bg-opacity-80 flex items-center pr-[15px] w-[100%] h-[70px] fixed z-10 lg:hidden`}
    >
      <div className="max-w-[520px] w-full m-auto flex justify-between items-center px-4 md:max-w-[1000px]">
        <Link
          to={"home"}
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onClick={() => {
            setMenu(false);
            setHidden(false);
            setSelected("Home");
          }}
        >
          <img
            className="w-[70px] cursor-pointer"
            src={logo}
            alt="here is weblance logo"
          />
        </Link>
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
              setSelected("Home");
            }}
          >
            <button className="text-[white] w-[118px] h-[40px] outline-none border-[#FFC451] hover:bg-[#FFC451] duration-300 ease-in-out font-normal border-[2px] rounded-[5px] mr-[15px] pt-[6px] pl-[24px] pr-[20px] pb-[7px]">
              Get Started
            </button>
          </Link>
          <StyledBurger
            hidden={hidden}
            setHidden={setHidden}
            menu={menu}
            setMenu={setMenu}
            className={undefined}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
