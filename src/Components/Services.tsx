import design from "../../public/img/icons/design.png";
import front from "../../public/img/icons/front.png";
import back from "../../public/img/icons/back.png";

function Services() {
  return (
    <div id="services" className="bg-[white]">
      <div className="bg-[white] pt-[120px] px-[12px] max-w-[520px] m-auto md:max-w-[696px]">
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
        {/* main container */}
        <div className="md:flex md:flex-row md:justify-center md:items-center md:max-w-[696px] md:gap-[20px]">
          {/* design container */}
          <div className="md:flex md:gap-[20px] md:flex-col">
            {/* for 2 div up div means */}
            <div className=" flex items-center justify-center flex-col px-[20px] py-[80px] border-[2px] md:w-[326px] md:h-[337px]">
              <div className="w-[100%] h-[175px] flex flex-col justify-center items-center md:w-[294px]">
                <div className="w-[64px] h-[64px] bg-[#FFC451] rounded-[5px] flex justify-center items-center">
                  <img className="w-[28px] h-[28px]" src={design} alt="" />
                </div>
                <h4 className="text-[black] text-[24px] mt-[10px]">Design</h4>
                <p className="text-[#444444] text-[16px] font-normal text-center">
                  lorem ipsum ipsum lorem lorem ipsum ipsum lorem
                </p>
              </div>
            </div>
            {/* front-end container */}
            <div className=" flex items-center justify-center flex-col px-[20px] py-[80px] mt-[40px] border-[2px] md:w-[326px] md:h-[337px] md:mt-0">
              <div className="w-[100%] h-[175px] flex flex-col justify-center items-center md:w-[294px]">
                <div className="w-[64px] h-[64px] bg-[#FFC451] rounded-[5px] flex justify-center items-center">
                  <img className="w-[28px] h-[28px]" src={front} alt="" />
                </div>
                <h4 className="text-[black] text-[24px] mt-[10px]">
                  Front-end
                </h4>
                <p className="text-[#444444] text-[16px] font-normal text-center">
                  lorem ipsum ipsum lorem lorem ipsum ipsum lorem
                </p>
              </div>
            </div>
          </div>
          {/* back-end container */}
          <div className="md:flex md:gap-[20px] md:flex-col">
            {/* for 2 div up div means */}
            <div className=" flex items-center justify-center flex-col px-[20px] py-[80px] mt-[40px] border-[2px] md:w-[326px] md:h-[337px] md:mt-0">
              <div className="w-[100%] h-[175px] flex flex-col justify-center items-center md:w-[294px]">
                <div className="w-[64px] h-[64px] bg-[#FFC451] rounded-[5px] flex justify-center items-center">
                  <img className="w-[28px] h-[28px]" src={back} alt="" />
                </div>
                <h4 className="text-[black] text-[24px] mt-[10px]">Back-end</h4>
                <p className="text-[#444444] text-[16px] font-normal text-center">
                  lorem ipsum ipsum lorem lorem ipsum ipsum lorem
                </p>
              </div>
            </div>
            {/* back-end container */}
            <div className=" flex items-center justify-center flex-col px-[20px] py-[80px] mt-[40px] border-[2px] md:w-[326px] md:h-[337px] md:mt-0">
              <div className="w-[100%] h-[175px] flex flex-col justify-center items-center md:w-[294px]">
                <div className="w-[64px] h-[64px] bg-[#FFC451] rounded-[5px] flex justify-center items-center">
                  <img className="w-[28px] h-[28px]" src={back} alt="" />
                </div>
                <h4 className="text-[black] text-[24px] mt-[10px]">Back-end</h4>
                <p className="text-[#444444] text-[16px] font-normal text-center">
                  lorem ipsum ipsum lorem lorem ipsum ipsum lorem
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
