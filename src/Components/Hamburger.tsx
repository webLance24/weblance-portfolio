import { useContext } from "react";
import { MyContext } from "./Context";
import { Link } from "react-scroll";
import cross from "../../public/assets/icons/cross.png";

function Hamburger() {
  const context = useContext(MyContext);
  const { menu, setMenu, selected, setSelected, setHidden }: any = context;

  const buttonCategories = [
    "Home",
    "About",
    "Services",
    "Projects",
    "Team",
    "Contact",
  ];

  return (
    <>
      {menu && (
        <>
          <div
            className="fixed inset-0 bg-black opacity-80 z-10"
            onClick={() => {
              setMenu(!menu);
              setHidden(false);
            }}
          ></div>
          <div className="pl-[8px] pr-[13px] w-[100%] pt-[8px] pb-[36px] flex flex-col fixed mt-[63px] right-0 z-10">
            <img
              src={cross}
              alt="cross image for hamburger menu"
              className="w-[30px] h-[30px] ml-[auto] mb-[10px] cursor-pointer"
              onClick={() => {
                setMenu(!menu);
                setHidden(false);
              }}
            />
            <div className="bg-[#FFFFFF] rounded-[10px] h-[590px] w-[100%]">
              <div className="pt-[10px]">
                <ul className="flex flex-col gap-[2px]">
                  {buttonCategories.map((category, index) => {
                    const categoryId = category
                      .toLowerCase()
                      .replace(/\s+/g, "-");
                    return (
                      <Link
                        to={categoryId}
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                        onClick={() => {
                          setMenu(false);
                          setHidden(false);
                        }}
                      >
                        <li
                          className="px-[17px] py-[20px] hover:bg-[#FFC451] duration-300 ease-in-out font-normal h-[42px] flex items-center cursor-pointer"
                          key={index}
                          onClick={() => setSelected(category)}
                          style={
                            selected === category
                              ? { backgroundColor: "#FFC451" }
                              : {}
                          }
                        >
                          {category}
                        </li>
                      </Link>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Hamburger;
