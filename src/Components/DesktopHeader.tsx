import { useContext } from "react";
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

  <Scrollspy
    items={buttonCategories.map((category) =>
      category.toLowerCase().replace(/\s+/g, "-")
    )}
    currentClassName="active"
    offset={-100}
  ></Scrollspy>;

  return (
    <header
      className={`bg-${
        scrolled ? "black" : "transparent"
      } bg-opacity-80 items-center w-[100%] h-[70px] fixed z-10 hidden lg:flex lg:justify-around`}
    >
      <img className="w-[70px]" src={logo} alt="here is weblance logo" />
      <ul className="flex justify-center items-center flex-row gap-[40px] ml-[40px]">
        {buttonCategories.map((category, index) => {
          const categoryId = category.toLowerCase().replace(/\s+/g, "-");
          return (
            <Link
              key={categoryId}
              to={categoryId}
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <li
                className="text-[15px] font-semibold pt-[3px] pb-[3px] rounded-[5px] text-[white] hover:text-[#FFC451] duration-300 ease-in-out cursor-pointer"
                key={index}
                onClick={() => setSelected(category)}
                style={selected === category ? { color: "#FFC451" } : {}}
              >
                {category}
              </li>
            </Link>
          );
        })}
      </ul>
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
