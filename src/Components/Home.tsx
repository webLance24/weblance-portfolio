import imgOne from "../../public/img/icons/market.png";

function Home() {
  return (
    // here is home page
    <div id="home" className="pt-[100px] px-[12px] bg-[black] bg-opacity-60">
      <div className="md:w-[696px] md:m-auto">
        <h1 className="text-[white] text-[40px] font-bold text-center md:text-[56px]">
          Powerful Websites with webLance
        </h1>
      </div>
      <p className="text-[white] text-[20px] font-light text-center md:text-[24px]">
        We are team of talented digital developerss
      </p>
      {/* Containers section */}
      <div className="flex justify-center items-center flex-col m-auto gap-[20px] mt-[40px] max-w-[520px] md:flex-wrap md:flex-row md:max-w-[1024px] md:pb-[50px]">
        {/* First div */}
        <div className="w-full h-[130px] border-[gray] border-[2px] flex flex-col justify-center items-center md:w-[216px] md:h-[156px] lg:w-[296px] lg:h-[130px]">
          <img className="w-[32px]" src={imgOne} alt="market image here" />
          <h3 className="text-[20px] text-[white]">Lorem Ipsum</h3>
        </div>
        {/* Second div */}
        <div className="w-full h-[130px] border-[gray] border-[2px] flex flex-col justify-center items-center md:w-[216px] md:h-[156px] lg:w-[296px] lg:h-[130px]">
          <img className="w-[32px]" src={imgOne} alt="market image here" />
          <h3 className="text-[20px] text-[white]">Lorem Ipsum</h3>
        </div>
        {/* third div */}
        <div className="w-full h-[130px] border-[gray] border-[2px] flex flex-col justify-center items-center md:w-[216px] md:h-[156px] lg:w-[296px] lg:h-[130px]">
          <img className="w-[32px]" src={imgOne} alt="market image here" />
          <h3 className="text-[20px] text-[white]">Lorem Ipsum</h3>
        </div>
        {/* Fourth div */}
        <div className="w-full h-[130px] border-[gray] border-[2px] flex flex-col justify-center items-center md:w-[216px] md:h-[156px] lg:w-[296px] lg:h-[130px]">
          <img className="w-[32px]" src={imgOne} alt="market image here" />
          <h3 className="text-[20px] text-[white]">Lorem Ipsum</h3>
        </div>
        {/* Sixth div */}
        <div className="w-full h-[130px] border-[gray] border-[2px] flex flex-col justify-center items-center mb-[50px] md:w-[216px] md:h-[156px] md:mb-0 lg:w-[296px] lg:h-[130px]">
          <img className="w-[32px]" src={imgOne} alt="market image here" />
          <h3 className="text-[20px] text-[white]">Lorem Ipsum</h3>
        </div>
      </div>
    </div>
  );
}

export default Home;
