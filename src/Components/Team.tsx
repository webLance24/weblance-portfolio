import david from "../../public/img/team/david.jpg";
import gio from "../../public/img/team/gio.jpg";
import instagramIcon from "../../public/img/social/instagram-profile.png";
import githubIcon from "../../public/img/social/github-profile.png";
import linkedinIcon from "../../public/img/social/linkedin-profile.png";

function Team() {
  return (
    <div id="team" className="bg-[white] px-[12px]">
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
        <div className="mt-[30px]">
          <div className="relative flex justify-center items-center container">
            <img
              src={gio}
              alt="Giorgi Mamulashvilis Photo"
              className="rounded-t-lg block w-[100%] h-auto"
            />
            {/* Social network icons */}
            <div className="overlay flex gap-[15px] absolute bottom-[30px] opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* instagram section */}
              <div>
                <a href="https://www.instagram.com/giorgi_mamulashvil1/">
                  <div className="w-[55px] h-[55px] bg-[#ffffffd3] hover:bg-[#FFC451] rounded-[5px] flex justify-center items-center cursor-pointer">
                    <img
                      src={instagramIcon}
                      alt="Instagram"
                      className="w-[30px] h-[30px] mx-1"
                    />
                  </div>
                </a>
              </div>
              {/* github section */}
              <div>
                <a href="https://github.com/gmamulashvili10">
                  <div className="w-[55px] h-[55px] bg-[#ffffffd3] hover:bg-[#FFC451] rounded-[5px] flex justify-center items-center cursor-pointer">
                    <img
                      src={githubIcon}
                      alt="Github"
                      className="w-[30px] h-[30px] mx-1"
                    />
                  </div>
                </a>
              </div>
              {/* linkedin section */}
              <div>
                <a href="https://www.linkedin.com/in/giorgi-mamulashvili-0a7883261/">
                  <div className="w-[55px] h-[55px] bg-[#ffffffd3] hover:bg-[#FFC451] rounded-[5px] flex justify-center items-center cursor-pointer">
                    <img
                      src={linkedinIcon}
                      alt="LinkedIn"
                      className="w-[30px] h-[30px] mx-1"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="px-[15px] py-[25px] border-[2px] rounded-b-lg">
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
          <div className="relative flex justify-center items-center container">
            <img
              src={david}
              alt="David Mikeladzes Photo"
              className="rounded-t-lg block w-[100%] h-auto"
            />
            {/* Social network icons */}
            <div className="overlay flex gap-[15px] absolute bottom-[30px] opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* instagram section */}
              <div className="w-[55px] h-[55px] bg-[#ffffffd3] hover:bg-[#FFC451] rounded-[5px] flex justify-center items-center cursor-pointer">
                <img
                  src={instagramIcon}
                  alt="Instagram"
                  className="w-[30px] h-[30px] mx-1"
                />
              </div>
              {/* github section */}
              <div>
                <a href="https://github.com/Davmike">
                  <div className="w-[55px] h-[55px] bg-[#ffffffd3] hover:bg-[#FFC451] rounded-[5px] flex justify-center items-center cursor-pointer">
                    <img
                      src={githubIcon}
                      alt="Github"
                      className="w-[30px] h-[30px] mx-1"
                    />
                  </div>
                </a>
              </div>
              {/* linkedin section */}
              <div>
                <a href="https://www.linkedin.com/in/david-mikeladze-927406264/">
                  <div className="w-[55px] h-[55px] bg-[#ffffffd3] hover:bg-[#FFC451] rounded-[5px] flex justify-center items-center cursor-pointer">
                    <img
                      src={linkedinIcon}
                      alt="LinkedIn"
                      className="w-[30px] h-[30px] mx-1"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="px-[15px] py-[25px] border-[2px] rounded-b-lg">
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
