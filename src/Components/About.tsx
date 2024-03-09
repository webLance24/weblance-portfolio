import aboutImg from "../../public/img/about.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function About() {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="bg-[white] pt-[50px] px-[12px] flex justify-center flex-col items-center">
      <img className="w-[100%] h-[100%]" src={aboutImg} alt="" />
      {/* text section */}
      <div className="py-[24px]">
        <h3 className="text-[#444444] text-[28px] font-bold">
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing LOREM IPSUM GENERATOR
        </h3>
        <p className="text-[16px] font-normal text-[#444444]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <Slider {...settings}></Slider>
    </div>
  );
}

export default About;
