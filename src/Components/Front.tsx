import data from "../../data.json";
import github from "../../public/img/social/github-white.png";
import link from "../../public/img/social/link.png";

const designImages = (
  data.photos.find((category) => category.category === "front-end") || {
    images: [],
  }
).images;

function Front() {
  return (
    <div className="bg-[white] px-[12px] flex justify-center items-center">
      <div className="max-w-[520px]">
        {designImages.map((image, index) => (
          <div className="main pb-[15px]" key={index}>
            <div className="center overflow-hidden ">
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
              <div className="middle w-[55px] h-[55px] bg-[black] hover:bg-[#FFC451] rounded-[5px] flex justify-center items-center cursor-pointer">
                <img
                  src={github}
                  alt="Github"
                  className="w-[30px] h-[30px] mx-1"
                />
              </div>
              {/* link section */}
              <div className="middle ml-[70px] w-[55px] h-[55px] bg-[black] hover:bg-[#FFC451] rounded-[5px] flex justify-center items-center cursor-pointer">
                <img
                  src={link}
                  alt="Github"
                  className="w-[30px] h-[30px] mx-1"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Front;
