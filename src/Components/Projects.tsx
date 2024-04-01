import { useState } from "react";
import data from "../../data.json";
import github from "../../public/assets/social/github-white.png";
import link from "../../public/assets/social/link.png";

function Projects() {
  const categories = [
    { title: "ALL", category: "" },
    { title: "DESIGN", category: "design" },
    { title: "FRONT", category: "front-end" },
    { title: "BACK", category: "back-end" },
  ];
  const [filterCategory, setFilterCategory] = useState<string>("");

  // Filter images based on selected category
  const filteredImages = filterCategory
    ? data.photos.find((category) => category.category === filterCategory)
        ?.images || []
    : data.photos.flatMap((category) => category.images);

  return (
    <div id="projects" className="bg-[white]">
      <div className="bg-[white] pt-[120px] px-[12px] max-w-[520px] m-auto md:max-w-[696px] lg:max-w-[948px] xl:max-w-[1180px] 2xl:max-w-[1325px]">
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
      {/* category section */}
      <div className="mt-[40px] pb-[20px]">
        <ul className="flex justify-center items-center flex-row gap-[2px]">
          {categories.map((category, index) => {
            return (
              <li
                className="text-[14px] font-normal px-[15px] pt-[3px] pb-[3px] rounded-[5px] hover:bg-[#FFC451] duration-300 ease-in-out cursor-pointer"
                onClick={() => setFilterCategory(category.category)}
                key={index}
                style={
                  category.category === filterCategory
                    ? { backgroundColor: "#FFC451" }
                    : {}
                }
              >
                {category.title}
              </li>
            );
          })}
        </ul>
      </div>
      {/* images filter */}
      <div className="bg-[white] px-[12px] flex justify-center items-center">
        <div className="max-w-[520px] md:max-w-[670px] lg:max-w-[948px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:max-w-[1180px] 2xl:max-w-[1325px]">
          {filteredImages.map((image, index) => (
            <div className="main pb-[15px]" key={index}>
              <div className="center overflow-hidden cursor-pointer">
                <img
                  key={index}
                  src={image.src}
                  alt={image.title}
                  className="block w-[100%] h-auto hover:scale-125 transition-transform duration-500"
                  style={{ width: "100%" }}
                />
              </div>
              {/* live links section */}
              <div className="flex">
                {/* github section */}
                <a href={image.github} target="_blank">
                  <div className="middle w-[55px] h-[55px] bg-[black] hover:bg-[#FFC451] rounded-[5px] flex justify-center items-center cursor-pointer">
                    <img
                      src={github}
                      alt="Github"
                      className="w-[30px] h-[30px] mx-1"
                    />
                  </div>
                </a>
                {/* link section */}
                <a href={image.live} target="_blank">
                  <div className="middle ml-[70px] w-[55px] h-[55px] bg-[black] hover:bg-[#FFC451] rounded-[5px] flex justify-center items-center cursor-pointer">
                    <img
                      src={link}
                      alt="Github"
                      className="w-[30px] h-[30px] mx-1"
                    />
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
