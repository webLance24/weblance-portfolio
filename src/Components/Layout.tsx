import { Outlet } from "react-router-dom";
import Design from "./Design";
import Front from "./Front";
import Back from "./Back";
import { MyContext } from "./Context";
import { useContext } from "react";

export default function Layout() {
  const context = useContext(MyContext);
  const { selected }: any = context;
  return (
    <>
      <div>
        <div>
          {selected === "DESIGN" && <Design />}
          {selected === "FRONT" && <Front />}
          {selected === "BACK" && <Back />}
          {selected === "ALL" && (
            <>
              <Design />
              <Front />
              <Back />
              <Outlet />
            </>
          )}
        </div>
      </div>
    </>
  );
}
