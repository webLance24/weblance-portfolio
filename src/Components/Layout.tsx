import { Outlet } from "react-router-dom";
import Design from "./Design";
import Front from "./Front";
import Back from "./Back";
import { MyContext } from "./Context";
import { useContext } from "react";
import smile from "../../public/img/icons/smile.png";
import project from "../../public/img/icons/project.png";
import time from "../../public/img/icons/time.png";

export default function Layout() {
  const context = useContext(MyContext);
  const { categorie }: any = context;
  return (
    <>
      <div className="bg-[white]">
        <div>
          {categorie === "DESIGN" && <Design />}
          {categorie === "FRONT" && <Front />}
          {categorie === "BACK" && <Back />}
          {categorie === "ALL" && (
            <>
              <Design />
              <Front />
              <Back />
              <Outlet />
            </>
          )}
        </div>
        <div className="flex justify-center flex-col items-center mt-[10px] px-[24px]">
          {/* first container */}
          <div className="flex justify-center items-center  gap-[10px]">
            <img src={smile} alt="" className="w-[40px] h-[100%]" />
            <div>
              <h4 className="text-[30px] font-bold text-[black]">65</h4>
              <p className="text-[15px] font-normal text-[#464646] mt-[7px]">
                <span className="text-[black] font-medium">Happy Clients</span>
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                Lorem ipsum
              </p>
            </div>
          </div>
          {/* second container */}
          <div className="flex justify-center items-center  mt-[48px] gap-[10px]">
            <img src={project} alt="" className="w-[40px] h-[100%] " />
            <div>
              <h4 className="text-[30px] font-bold text-[black]">11</h4>
              <p className="text-[15px] font-normal text-[#464646] mt-[7px]">
                <span className="text-[black] font-medium">Happy Clients</span>{" "}
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                Lorem ipsum
              </p>
            </div>
          </div>
          {/* third container */}
          <div className="flex justify-center items-center mt-[48px] gap-[10px]">
            <img src={time} alt="" className="w-[40px] h-[100%]" />
            <div>
              <h4 className="text-[30px] font-bold text-[black]">2</h4>
              <p className="text-[15px] font-normal text-[#464646] mt-[7px]">
                <span className="text-[black] font-medium">Happy Clients</span>
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                Lorem ipsum
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
