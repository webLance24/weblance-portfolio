import { useContext } from "react";
import { MyContext } from "./Context";
import logo from "../../public/img/weblance-logo.png";

interface ComponentsProps {
  hidden: boolean;
  setHidden: (hidden: boolean) => void;
  menu: boolean;
  setMenu: (menu: boolean) => void;
  className: any;
}

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
  const { hidden, setHidden, menu, setMenu }: any = context;

  return (
    <header className="bg-[black] bg-opacity-60 flex justify-between items-center pr-[15px] w-[100%] h-[70px]">
      <img className="w-[70px]" src={logo} alt="here is weblance logo" />
      <div className="flex justify-center items-center">
        <button className="text-[white] w-[118px] h-[40px] outline-none border-[#FFC451] hover:bg-[#FFC451] duration-300 ease-in-out font-normal border-[2px] rounded-[5px] mr-[15px] pt-[6px] pl-[24px] pr-[20px] pb-[7px]">
          Get Started
        </button>
        <StyledBurger
          hidden={hidden}
          setHidden={setHidden}
          menu={menu}
          setMenu={setMenu}
          className={undefined}
        />
      </div>
    </header>
  );
}

export default Header;
