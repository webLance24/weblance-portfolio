import uiux from "../../public/assets/icons/design.png";
import front from "../../public/assets/icons/front.png";
import back from "../../public/assets/icons/back.png";
import media from "../../public/assets/icons/media.png";
import photo from "../../public/assets/icons/photo.png";
import video from "../../public/assets/icons/video.png";

function Services() {
  const categories = [
    {
      title: "Front-end",
      category:
        "Enhance your website's look and feel with our expert front-end development services.",
      src: front,
    },
    {
      title: " Back-end",
      category:
        "Power up your website's functionality with our back-end development expertise.",
      src: back,
    },
    {
      title: "UI/UX",
      category:
        "Elevate your website's user experience with our expert UI/UX design services.",
      src: uiux,
    },
    {
      title: "Social Media Marketing",
      category:
        "Boost your brand's visibility, We're helping you connect with your target audience.",
      src: media,
    },
    {
      title: "Photography",
      category:
        "Capture the essence of your brand with our photography services.",
      src: photo,
    },
    {
      title: "Videography",
      category:
        "Our videography capture the essence of your brand, products, and services.",
      src: video,
    },
  ];

  return (
    <div id="services" className="bg-[white]">
      <div className="bg-[white] pt-[120px] px-[12px] max-w-[520px] m-auto md:max-w-[696px] lg:max-w-[948px] xl:max-w-[1180px] 2xl:max-w-[1325px]">
        <div className="pb-[40px]">
          <div className="flex items-center gap-[10px]">
            <h2 className="uppercase text-[#AAAAAA] text-[15px] tracking-[3px]">
              Services
            </h2>
            <hr className="bg-[#dfbf7e] w-[120px] h-[2px]" />
          </div>
          <p className="uppercase text-[5ch] font-medium text-[black]">
            Check our services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-[15px]">
          {categories.map((category, index) => {
            return (
              <div
                key={index}
                className="flex items-center justify-center mt-[10px] flex-col px-[20px] py-[80px] border-[2px] md:w-[326px] md:h-[337px] lg:mt-0 lg:w-[295px] xl:w-[374px] xl:h-[255px] 2xl:w-[416px] 2xl:h-[337px]"
              >
                <div className="w-[100%] h-[175px] flex flex-col justify-center items-center md:w-[294px]">
                  <div className="w-[64px] h-[64px] bg-[#FFC451] rounded-[5px] flex justify-center items-center">
                    <img
                      className="w-[28px] h-[28px]"
                      src={category.src}
                      alt=""
                    />
                  </div>
                  <h4 className="text-[black] text-[24px] mt-[10px]">
                    {category.title}
                  </h4>
                  <p className="text-[#444444] text-[16px] font-normal text-center">
                    {category.category}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Services;
