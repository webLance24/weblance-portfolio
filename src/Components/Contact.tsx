import location from "../../public/assets/icons/location.png";
import mobile from "../../public/assets/icons/mobile.png";
import instagram from "../../public/assets/social/instagram.png";
import linkedin from "../../public/assets/social/linkedin.png";

function Contact() {
  return (
    <div id="contact" className="bg-[white] px-[12px] pb-[50px]">
      <div className="max-w-[520px] m-auto md:max-w-[696px] lg:max-w-[948px] xl:max-w-[1180px] 2xl:max-w-[1325px]">
        <div className="bg-[white] pt-[120px]">
          <div className="flex items-center gap-[10px]">
            <h2 className="uppercase text-[#AAAAAA] text-[15px] tracking-[3px]">
              Contact
            </h2>
            <hr className="bg-[#dfbf7e] w-[120px] h-[2px]" />
          </div>
          <p className="uppercase text-[5ch] font-medium text-[black]">
            COntact us
          </p>
        </div>
        {/* Map */}
        <div className="max-w-[770px] mt-[40px] lg:max-w-[948px] xl:max-w-[1674px] 2xl:max-w-[1944px]">
          <iframe
            width="100%"
            height="350px"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=15%20Leonidze%20St,%20Batumi%206004+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps vehicle tracker</a>
          </iframe>
        </div>
        {/* contact info, number, social network and others */}
        {/* location */}
        <div className="w-[314px] h-[52px] flex justify-start items-center gap-[15px] mt-[50px]">
          <div className="w-[44px] h-[44px] bg-[#FFC451] rounded-[5px] flex justify-center items-center">
            <img className="w-[22px] h-[22px]" src={location} alt="" />
          </div>
          <div>
            <h4 className="text-[black] text-[22px] font-normal">Location:</h4>
            <p className="text-[#444444] text-[14px] font-normal">
              Georgia, Tbilisi
            </p>
          </div>
        </div>
        {/* mobile */}
        <div className="w-[314px] h-[52px] flex justify-start items-center gap-[15px] mt-[30px]">
          <div className="w-[44px] h-[44px] bg-[#FFC451] rounded-[5px] flex justify-center items-center">
            <img className="w-[22px] h-[22px]" src={mobile} alt="" />
          </div>
          <div>
            <h4 className="text-[black] text-[22px] font-normal">Mobile:</h4>
            <p className="text-[#444444] text-[14px] font-normal">
              <a href="tel:+995599000990" target="_blank">
                +995 599 00 09 90
              </a>
            </p>
          </div>
        </div>
        {/* linkedin */}
        <div className="w-[314px] h-[52px] flex justify-start items-center gap-[15px] mt-[30px]">
          <div className="w-[44px] h-[44px] bg-[#FFC451] rounded-[5px] flex justify-center items-center">
            <img className="w-[22px] h-[22px]" src={linkedin} alt="" />
          </div>
          <div>
            <h4 className="text-[black] text-[22px] font-normal">Linkedin:</h4>
            <a
              href="https://www.linkedin.com/in/web-lance-74496a2b4/"
              target="_blank"
            >
              <p className="text-[#444444] text-[14px] font-normal">
                @webLance
              </p>
            </a>
          </div>
        </div>
        {/* instagram */}
        <div className="w-[314px] h-[52px] flex justify-start items-center gap-[15px] mt-[30px]">
          <div className="w-[44px] h-[44px] bg-[#FFC451] rounded-[5px] flex justify-center items-center">
            <img className="w-[22px] h-[22px]" src={instagram} alt="" />
          </div>
          <div>
            <h4 className="text-[black] text-[22px] font-normal">Instagram:</h4>
            <a href="https://www.instagram.com/weblance17/" target="_blank">
              <p className="text-[#444444] text-[14px] font-normal">
                weblance17
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
