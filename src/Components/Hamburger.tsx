import { useContext } from "react";
import { MyContext } from "./Context";
import { Link } from "react-scroll";

function Hamburger() {
  const context = useContext(MyContext);
  const { menu, setMenu, selected, setSelected }: any = context;

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
            <div className="bg-[#FFFFFF] rounded-[10px] h-[590px] w-[350px]">
              <div className="pt-[10px]">
                <div
                  className="px-[15px] py-[20px] hover:bg-[#FFC451] duration-300 ease-in-out font-normal h-[42px] flex items-center cursor-pointer"
                  onClick={() => setSelected("Home")}
                  style={
                    selected === "Home" ? { backgroundColor: "#FFC451" } : {}
                  }
                >
                  <Link
                    to={"home"}
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="text-[17px]"
                    onClick={() => setMenu(false)}
                  >
                    Home
                  </Link>
                </div>
                <div
                  className="px-[15px] py-[20px] hover:bg-[#FFC451] duration-300 ease-in-out font-normal h-[42px] flex items-center cursor-pointer"
                  onClick={() => setSelected("About")}
                  style={
                    selected === "About" ? { backgroundColor: "#FFC451" } : {}
                  }
                >
                  <Link
                    to={"about"}
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="text-[17px]"
                    onClick={() => setMenu(false)}
                  >
                    About
                  </Link>
                </div>
                <div
                  className="px-[15px] py-[20px] hover:bg-[#FFC451] duration-300 ease-in-out font-normal h-[42px] flex items-center cursor-pointer"
                  onClick={() => setSelected("Services")}
                  style={
                    selected === "Services"
                      ? { backgroundColor: "#FFC451" }
                      : {}
                  }
                >
                  <Link
                    to={"services"}
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="text-[17px]"
                    onClick={() => setMenu(false)}
                  >
                    Services
                  </Link>
                </div>
                <div
                  className="px-[15px] py-[20px] hover:bg-[#FFC451] duration-300 ease-in-out font-normal h-[42px] flex items-center cursor-pointer"
                  onClick={() => setSelected("Projects")}
                  style={
                    selected === "Projects"
                      ? { backgroundColor: "#FFC451" }
                      : {}
                  }
                >
                  <Link
                    to={"projects"}
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="text-[17px]"
                    onClick={() => setMenu(false)}
                  >
                    Projects
                  </Link>
                </div>
                <div
                  className="px-[15px] py-[20px] hover:bg-[#FFC451] duration-300 ease-in-out font-normal h-[42px] flex items-center cursor-pointer"
                  onClick={() => setSelected("Team")}
                  style={
                    selected === "Team" ? { backgroundColor: "#FFC451" } : {}
                  }
                >
                  <Link
                    to={"team"}
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="text-[17px]"
                    onClick={() => setMenu(false)}
                  >
                    Team
                  </Link>
                </div>
                <div
                  className="px-[15px] py-[20px] hover:bg-[#FFC451] duration-300 ease-in-out font-normal h-[42px] flex items-center cursor-pointer"
                  onClick={() => setSelected("Contact")}
                  style={
                    selected === "Contact" ? { backgroundColor: "#FFC451" } : {}
                  }
                >
                  <Link
                    to={"contact"}
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="text-[17px]"
                    onClick={() => setMenu(false)}
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Hamburger;
