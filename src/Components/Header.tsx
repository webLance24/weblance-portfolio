import { useContext } from "react";
import { MyContext } from "./Context";

interface ComponentsProps {
  hidden: boolean;
  setHidden: (hidden: boolean) => void;
  className: any;
}

const StyledBurger = ({
  hidden,
  setHidden,
  className,
  ...props
}: ComponentsProps) => (
  <button
    className={`flex flex-col justify-around w-8 h-8 bg-transparent border-none cursor-pointer p-0 z-10 focus:outline-none ${className}`}
    onClick={() => setHidden(!hidden)}
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
  const { hidden, setHidden }: any = context;
  return (
    <div>
      <StyledBurger
        hidden={hidden}
        setHidden={setHidden}
        className={undefined}
      />
    </div>
  );
}

export default Header;
