import { useContext } from "react";
import { MyContext } from "./Context";

function Projects() {
  const context = useContext(MyContext);
  const { categorie, setCategorie }: any = context;

  return (
    <div id="projects" className="bg-[white]">
      <div className="bg-[white] pt-[120px] px-[12px] max-w-[520px] m-auto">
        <div className="flex items-center gap-[10px]">
          <h2 className="uppercase text-[#AAAAAA] text-[15px] tracking-[3px]">
            Projects
          </h2>
          <hr className="bg-[#dfbf7e] w-[120px] h-[2px]" />
        </div>
        <p className="uppercase text-[5ch] font-medium text-[black]">
          Check our Projects
        </p>
      </div>
      <div className="mt-[40px] pb-[20px]">
        <ul className="flex justify-center items-center flex-row gap-[2px]">
          <li
            className="text-[14px] font-normal px-[15px] pt-[3px] pb-[3px] rounded-[5px] hover:bg-[#FFC451] duration-300 ease-in-out cursor-pointer"
            onClick={() => setCategorie("ALL")}
            style={categorie === "ALL" ? { backgroundColor: "#FFC451" } : {}}
          >
            ALL
          </li>
          <li
            className="text-[14px] font-normal px-[15px] pt-[3px] pb-[3px] rounded-[5px] hover:bg-[#FFC451] duration-300 ease-in-out cursor-pointer"
            onClick={() => setCategorie("DESIGN")}
            style={categorie === "DESIGN" ? { backgroundColor: "#FFC451" } : {}}
          >
            DESIGN
          </li>
          <li
            className="text-[14px] font-normal px-[15px] pt-[3px] pb-[3px] rounded-[5px] hover:bg-[#FFC451] duration-300 ease-in-out cursor-pointer"
            onClick={() => setCategorie("FRONT")}
            style={categorie === "FRONT" ? { backgroundColor: "#FFC451" } : {}}
          >
            FRONT
          </li>
          <li
            className="text-[14px] font-normal px-[15px] pt-[3px] pb-[3px] rounded-[5px] hover:bg-[#FFC451] duration-300 ease-in-out cursor-pointer"
            onClick={() => setCategorie("BACK")}
            style={categorie === "BACK" ? { backgroundColor: "#FFC451" } : {}}
          >
            BACK
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Projects;
