// import close from "../assets/icon-close.svg";
import { useContext } from "react";
import { MyContext } from "./Context";

export default function LightBox() {
  const context = useContext(MyContext);
  const { showLightBox, setShowLightBox }: any = context;

  return (
    showLightBox && (
      <div>
        <div className="flex justify-center items-center absolute top-[50%] left-[50%]">
          <div
            className="hidden xl:block xl:fixed xl:inset-0 xl:bg-black xl:opacity-75 xl:z-20"
            onClick={() => {
              setShowLightBox(!showLightBox);
            }}
          ></div>
        </div>
      </div>
    )
  );
}
