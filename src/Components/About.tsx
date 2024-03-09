import aboutImg from "../../public/img/about.jpg";

function About() {
  return (
    <div className="bg-[white] pt-[50px] px-[12px] flex justify-center flex-col items-center">
      <img className="w-[100%] h-[100%]" src={aboutImg} alt="" />
      <h3>
        Lorem ipsum is placeholder text commonly used in the graphic, print, and
        publishing industries for previewing layouts and visual mockups. LOREM
        IPSUM GENERATOR
      </h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>
  );
}

export default About;
