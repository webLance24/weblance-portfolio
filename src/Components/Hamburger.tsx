import { useContext } from "react";
import { MyContext } from "./Context";

function Hamburger() {
  const context = useContext(MyContext);
  const { menu }: any = context;

  return (
    <div className="px-[8px] pt-[8px] pb-[36px] flex absolute right-0 z-10 flex-row-reverse">
      {menu && (
        <div className="bg-[#FFFFFF] rounded-[10px] h-[256px] w-[360px]"></div>
      )}
    </div>
  );
}

export default Hamburger;
