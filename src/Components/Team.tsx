import david from "../../public/img/david.jpg";
import gio from "../../public/img/gio.jpg";

function Team() {
  return (
    <div className="bg-[white] px-[12px]">
      <div className="bg-[white] pt-[120px] ">
        <div className="flex items-center gap-[10px]">
          <h2 className="uppercase text-[#AAAAAA] text-[15px] tracking-[3px]">
            Team
          </h2>
          <hr className="bg-[#dfbf7e] w-[120px] h-[2px]" />
        </div>
        <p className="uppercase text-[5ch] font-medium text-[black]">
          Check our team
        </p>
      </div>
      {/* photo section */}
      <div className="mt-[40px]">
        {/* Giorgi */}
        <div>
          <img
            src={gio}
            alt="Giorgi Mamulashvilis Photo"
            className="rounded-t-lg"
          />
          <div className="px-[15px] py-[25px] border-[1px] drop-shadow-2xl rounded-b-lg">
            <h4 className="text-[19px] text-[black] font-semibold">
              Giorgi Mamulashvili
            </h4>
            <p className="text-[15px] font-normal text-[#464646]">
              CEO & Founder
            </p>
          </div>
        </div>
        {/* David */}
        <div className="mt-[30px]">
          <img
            src={david}
            alt="David Mikeladzes Photo"
            className="rounded-t-lg"
          />
          <div className="px-[15px] py-[25px] border-[1px] drop-shadow-2xl rounded-b-lg">
            <h4 className="text-[19px] text-[black] font-semibold">
              David Mikeladze
            </h4>
            <p className="text-[15px] font-normal text-[#464646]">
              CTO & Co-Founder
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
