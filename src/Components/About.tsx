import aboutImg from "../../public/img/about.jpg";
import boo from "../../public/img/boo.png";
// import client1 from "../../public/img/clients/client-1.png";
// import client2 from "../../public/img/clients/client-2.png";
// import client3 from "../../public/img/clients/client-3.png";
// import client4 from "../../public/img/clients/client-4.png";
// import client5 from "../../public/img/clients/client-5.png";
// import client6 from "../../public/img/clients/client-6.png";

function About() {
  return (
    <div className="bg-[white] pt-[50px] px-[12px] flex justify-center flex-col items-center">
      <img className="w-[100%] h-[100%]" src={aboutImg} alt="" />
      {/* text section */}
      <div className="py-[24px]">
        <h3 className="text-[#444444] text-[28px] font-bold">
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing LOREM IPSUM GENERATOR
        </h3>
        <p className="text-[16px] font-normal text-[#444444] mt-[20px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      {/* <div className="flex justify-center items-center">
        <img src={client1} alt="" style={{ width: "100px" }} />
        <img src={client2} alt="" style={{ width: "100px" }} />
        <img src={client3} alt="" style={{ width: "100px" }} />
      </div> */}
      <div className="flex justify-center flex-col items-center mt-[10px]">
        {/* first container */}
        <div className="flex">
          <img src={boo} alt="" className="w-[70px] h-[100%]" />
          <div>
            <h4 className="text-[20px] font-bold text-[#464646]">
              Lorem ipsum
            </h4>
            <p className="text-[15px] font-normal text-[#464646] mt-[7px]">
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
              ipsum Lorem ipsum
            </p>
          </div>
        </div>
        {/* second container */}
        <div className="flex mt-[48px]">
          <img src={boo} alt="" className="w-[70px] h-[100%]" />
          <div>
            <h4 className="text-[20px] font-bold text-[#464646]">
              Lorem ipsum
            </h4>
            <p className="text-[15px] font-normal text-[#464646] mt-[7px]">
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
              ipsum Lorem ipsum
            </p>
          </div>
        </div>
        {/* third container */}
        <div className="flex mt-[48px]">
          <img src={boo} alt="" className="w-[70px] h-[100%]" />
          <div>
            <h4 className="text-[20px] font-bold text-[#464646]">
              Lorem ipsum
            </h4>
            <p className="text-[15px] font-normal text-[#464646] mt-[7px]">
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
              ipsum Lorem ipsum
            </p>
          </div>
        </div>
        {/* fourth container */}
        <div className="flex mt-[48px]">
          <img src={boo} alt="" className="w-[70px] h-[100%]" />
          <div>
            <h4 className="text-[20px] font-bold text-[#464646]">
              Lorem ipsum
            </h4>
            <p className="text-[15px] font-normal text-[#464646] mt-[7px]">
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
              ipsum Lorem ipsum
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
