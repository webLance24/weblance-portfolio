import aboutImg from "../../public/assets/about.jpg";
// import boo from "../../public/assets/icons/boo.png";

function About() {
  return (
    <div
      id="about"
      className="bg-[white] pt-[50px] px-[12px] flex justify-center flex-col items-center"
    >
      <div className="py-[24px] max-w-[520px] md:max-w-[696px] lg:flex lg:flex-row-reverse lg:max-w-[948px] lg:gap-[30px] xl:max-w-[1280px] 2xl:max-w-[1536px]">
        <img
          className="h-auto md:w-[696px] lg:w-[456px] xl:w-[546px] 2xl:w-[636px]"
          src={aboutImg}
          alt=""
        />
        {/* text section */}
        <div className="lg:flex lg:flex-col xl:w-[546px] 2xl:w-[636px]">
          <h3 className="text-[#444444] text-[28px] font-bold mt-[24px] lg:mt-0">
            WebLance, based in Tbilisi, Georgia, was founded by David Mikeladze
            and Giorgi Mamulashvili.
          </h3>
          <p className="text-[16px] font-normal text-[#444444] mt-[20px]">
            Our goal is simple: to combine creativity and technology to create
            unique digital solutions that help businesses succeed online. At
            WebLance, our talented team of developers, designers, and digital
            strategists is dedicated to crafting powerful websites and
            e-commerce platforms. We focus on transparency, teamwork, and
            delivering on time to guarantee success in every project we take on.
          </p>
        </div>
      </div>
      {/* <div className="py-[24px] mt-[36px] max-w-[520px] md:max-w-[696px] lg:flex lg:flex-row lg:max-w-[948px] lg:gap-[30px] xl:max-w-[1280px] 2xl:max-w-[1536px]"> */}
      {/* first container */}
      {/* <img
          className="h-auto md:w-[696px] lg:w-[456px] xl:w-[546px] 2xl:w-[636px]"
          src={aboutImg}
          alt=""
        /> */}
      {/* for all container */}
      {/* <div className="mt-[40px] lg:mt-0 lg:flex lg:flex-col 2xl:w-[636px]">
          <div className="flex">
            <img src={boo} alt="" className="w-[70px] h-[100%]" />
            <div>
              <h4 className="text-[20px] font-bold text-[#464646]">
                Lorem ipsum
              </h4>
              <p className="text-[15px] font-normal text-[#464646] mt-[7px]">
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                Lorem ipsum Lorem ipsum
              </p>
            </div>
          </div> */}
      {/* second container */}
      {/* <div className="flex mt-[48px]">
            <img src={boo} alt="" className="w-[70px] h-[100%]" />
            <div>
              <h4 className="text-[20px] font-bold text-[#464646]">
                Lorem ipsum
              </h4>
              <p className="text-[15px] font-normal text-[#464646] mt-[7px]">
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                Lorem ipsum Lorem ipsum
              </p>
            </div>
          </div> */}
      {/* third container */}
      {/* <div className="flex mt-[48px]">
            <img src={boo} alt="" className="w-[70px] h-[100%]" />
            <div>
              <h4 className="text-[20px] font-bold text-[#464646]">
                Lorem ipsum
              </h4>
              <p className="text-[15px] font-normal text-[#464646] mt-[7px]">
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                Lorem ipsum Lorem ipsum
              </p>
            </div>
          </div> */}
      {/* </div> */}
    </div>
  );
}

export default About;
