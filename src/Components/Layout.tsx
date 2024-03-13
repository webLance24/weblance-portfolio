import { Outlet } from "react-router-dom";
import Design from "./Design";
import Front from "./Front";
import Back from "./Back";
import { MyContext } from "./Context";
import { useContext } from "react";

export default function Layout() {
  const context = useContext(MyContext);
  const { categorie }: any = context;
  return (
    <>
      <div>
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
      </div>
    </>
  );
}
