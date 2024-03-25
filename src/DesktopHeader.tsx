import { useContext } from "react";
import { MyContext } from "./Components/Context";

function DesktopHeader() {
  const context = useContext(MyContext);
  const { selected, setSelected, scrolled }: any = context;

  const buttonCategories = [
    "Home",
    "About",
    "Services",
    "Projects",
    "Team",
    "Contact",
  ];

  return (
    <header
      className={`bg-${
        scrolled ? "black" : "transparent"
      } bg-opacity-80 items-center pr-[15px] w-[100%] h-[70px] fixed z-10 hidden xl:flex`}
    >
      <ul className="flex justify-center items-center flex-row gap-[2px]">
        {buttonCategories.map((category, index) => {
          return (
            <li
              className="text-[15px] font-semibold px-[15px] pt-[3px] pb-[3px] rounded-[5px] text-[white] hover:text-[#FFC451] duration-300 ease-in-out cursor-pointer"
              key={index}
              onClick={() => setSelected(category)}
              style={selected === category ? { color: "#FFC451" } : {}}
            >
              {category}
            </li>
          );
        })}
      </ul>
    </header>
  );
}

export default DesktopHeader;
