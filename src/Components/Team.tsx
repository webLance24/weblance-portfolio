// import david from "../../public/assets/team/david.jpg";
import gio from "../../public/assets/team/gio.jpg";
import instagramIcon from "../../public/assets/social/instagram-profile.png";
import githubIcon from "../../public/assets/social/github-profile.png";
import linkedinIcon from "../../public/assets/social/linkedin-profile.png";

function Team() {
  const categories = [
    {
      name: "Giorgi Mamulashvili",
      category: "CEO & Founder",
      src: gio,
      insta: instagramIcon,
      github: githubIcon,
      linkedin: linkedinIcon,
    },
    {
      name: "David Mikeladze",
      category: "CTO & Co-Founder",
      src: gio,
      insta: instagramIcon,
      github: githubIcon,
      linkedin: linkedinIcon,
    },
    {
      name: "David Mikeladze",
      category: "CTO & Co-Founder",
      src: gio,
      insta: instagramIcon,
      github: githubIcon,
      linkedin: linkedinIcon,
    },
    {
      name: "David Mikeladze",
      category: "CTO & Co-Founder",
      src: gio,
      insta: instagramIcon,
      github: githubIcon,
      linkedin: linkedinIcon,
    },
  ];

  return (
    <div id="team" className="bg-[white] px-[12px]">
      <div className="bg-[white] pt-[120px] max-w-[520px] m-auto md:max-w-[696px] lg:max-w-[948px] xl:max-w-[1180px] 2xl:max-w-[1325px]">
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
      <div className="mt-[40px] md:max-w-[670px] m-auto md:gap-[40px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-[20px] lg:px-[10px] place-items-center lg:max-w-[948px] xl:max-w-[1180px] 2xl:max-w-[1325px]">
        {/* members */}
        {categories.map((category, index) => {
          return (
            <div
              className="mt-[30px] max-w-[520px] md:w-[336px] lg:w-[216px] xl:w-[261px] 2xl:w-[306px]"
              key={index}
            >
              <div className="relative flex justify-center items-center container">
                <img
                  src={category.src}
                  alt="Giorgi Mamulashvilis Photo"
                  className="rounded-t-lg block w-[100%] h-auto"
                />
                {/* Social network icons */}
                <div className="overlay flex gap-[15px] absolute bottom-[30px] opacity-0 hover:opacity-100 transition-opacity duration-300">
                  {/* instagram section */}
                  <div>
                    <a
                      href="https://www.instagram.com/giorgi_mamulashvil1/"
                      target="_blank"
                    >
                      <div className="w-[55px] h-[55px] bg-[#ffffffd3] hover:bg-[#FFC451] rounded-[5px] flex justify-center items-center cursor-pointer md:w-[45px] md:h-[45px]">
                        <img
                          src={category.insta}
                          alt="Instagram"
                          className="w-[30px] h-[30px] mx-1 md:w-[25px] md:h-[25px]"
                        />
                      </div>
                    </a>
                  </div>
                  {/* github section */}
                  <div>
                    <a
                      href="https://github.com/gmamulashvili10"
                      target="_blank"
                    >
                      <div className="w-[55px] h-[55px] bg-[#ffffffd3] hover:bg-[#FFC451] rounded-[5px] flex justify-center items-center cursor-pointer md:w-[45px] md:h-[45px]">
                        <img
                          src={category.github}
                          alt="Github"
                          className="w-[30px] h-[30px] mx-1 md:w-[25px] md:h-[25px]"
                        />
                      </div>
                    </a>
                  </div>
                  {/* linkedin section */}
                  <div>
                    <a
                      href="https://www.linkedin.com/in/giorgi-mamulashvili-0a7883261/"
                      target="_blank"
                    >
                      <div className="w-[55px] h-[55px] bg-[#ffffffd3] hover:bg-[#FFC451] rounded-[5px] flex justify-center items-center cursor-pointer md:w-[45px] md:h-[45px]">
                        <img
                          src={category.linkedin}
                          alt="LinkedIn"
                          className="w-[30px] h-[30px] mx-1 md:w-[25px] md:h-[25px]x"
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="px-[15px] py-[25px] border-[2px] rounded-b-lg">
                <h4 className="text-[19px] text-[black] font-semibold">
                  {category.name}
                </h4>
                <p className="text-[15px] font-normal text-[#464646]">
                  {category.category}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Team;
