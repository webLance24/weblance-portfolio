import design from "../../public/img/icons/design.png";
import front from "../../public/img/icons/front.png";
import back from "../../public/img/icons/back.png";

function Services() {
  return (
    <div id="services" className="bg-[white]">
      <div className="bg-[white] pt-[120px] px-[12px]">
        <div className="flex items-center gap-[10px]">
          <h2 className="uppercase text-[#AAAAAA] text-[15px] tracking-[3px]">
            Services
          </h2>
          <hr className="bg-[#dfbf7e] w-[120px] h-[2px]" />
        </div>
        <p className="uppercase text-[5ch] font-medium text-[black]">
          Check our services
        </p>
        {/* design container */}
        <div className=" flex items-center justify-center flex-col px-[20px] py-[80px] mt-[40px] border-[2px]">
          <div className="w-[314px] h-[175px] flex flex-col justify-center items-center">
            <div className="w-[64px] h-[64px] bg-[#FFC451] rounded-[5px] flex justify-center items-center">
              <img className="w-[28px] h-[28px]" src={design} alt="" />
            </div>
            <h4 className="text-[black] text-[24px] mt-[10px]">Design</h4>
            <p className="text-[#444444] text-[16px] font-normal">
              lorem ipsum ipsum lorem lorem ipsum ipsum lorem
            </p>
          </div>
        </div>
        {/* front-end container */}
        <div className=" flex items-center justify-center flex-col px-[20px] py-[80px] mt-[40px] border-[2px]">
          <div className="w-[314px] h-[175px] flex flex-col justify-center items-center">
            <div className="w-[64px] h-[64px] bg-[#FFC451] rounded-[5px] flex justify-center items-center">
              <img className="w-[28px] h-[28px]" src={front} alt="" />
            </div>
            <h4 className="text-[black] text-[24px] mt-[10px]">Front-end</h4>
            <p className="text-[#444444] text-[16px] font-normal">
              lorem ipsum ipsum lorem lorem ipsum ipsum lorem
            </p>
          </div>
        </div>
        {/* back-end container */}
        <div className=" flex items-center justify-center flex-col px-[20px] py-[80px] mt-[40px] border-[2px]">
          <div className="w-[314px] h-[175px] flex flex-col justify-center items-center">
            <div className="w-[64px] h-[64px] bg-[#FFC451] rounded-[5px] flex justify-center items-center">
              <img className="w-[28px] h-[28px]" src={back} alt="" />
            </div>
            <h4 className="text-[black] text-[24px] mt-[10px]">Back-end</h4>
            <p className="text-[#444444] text-[16px] font-normal">
              lorem ipsum ipsum lorem lorem ipsum ipsum lorem
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
