import { useContext } from "react";
import { MyContext } from "./Context";

function Hamburger() {
  const context = useContext(MyContext);
  const { menu, setMenu }: any = context;

  return (
    <>
      {menu && (
        <>
          <div
            className="fixed inset-0 bg-black opacity-70"
            onClick={() => {
              setMenu(!menu);
            }}
          ></div>
          <div className="pl-[8px] pr-[13px] pt-[8px] pb-[36px] flex absolute right-0 z-10 flex-row-reverse">
            <div className="bg-[#FFFFFF] rounded-[10px] h-[590px] w-[350px]"></div>
          </div>
        </>
      )}
    </>
  );
}

export default Hamburger;
