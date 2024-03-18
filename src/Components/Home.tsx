import imgOne from "../../public/img/icons/market.png";

function Home() {
  return (
    // here is home page
    <div id="home" className="pt-[100px] px-[12px] bg-[black] bg-opacity-60">
      <h1 className="text-[white] text-[40px] font-bold text-center">
        Powerful Websites with webLance
      </h1>
      <p className="text-[white] text-[20px] font-light text-center">
        We are team of talented digital developers
      </p>
      {/* Containers section */}
      <div className="flex flex-col gap-[20px] justify-center items-center mt-[40px]">
        {/* First div */}
        <div className="w-[100%] h-[130px] border-[gray] border-[2px] flex flex-col justify-center items-center">
          <img className="w-[32px]" src={imgOne} alt="market image here" />
          <h3 className="text-[20px] text-[white]">Lorem Ipsum</h3>
        </div>
        {/* Second div */}
        <div className="w-[100%] h-[130px] border-[gray] border-[2px] flex flex-col justify-center items-center">
          <img className="w-[32px]" src={imgOne} alt="market image here" />
          <h3 className="text-[20px] text-[white]">Lorem Ipsum</h3>
        </div>
        {/* third div */}
        <div className="w-[100%] h-[130px] border-[gray] border-[2px] flex flex-col justify-center items-center">
          <img className="w-[32px]" src={imgOne} alt="market image here" />
          <h3 className="text-[20px] text-[white]">Lorem Ipsum</h3>
        </div>
        {/* Fourth div */}
        <div className="w-[100%] h-[130px] border-[gray] border-[2px] flex flex-col justify-center items-center">
          <img className="w-[32px]" src={imgOne} alt="market image here" />
          <h3 className="text-[20px] text-[white]">Lorem Ipsum</h3>
        </div>
        {/* Sixth div */}
        <div className="w-[100%] h-[130px] border-[gray] border-[2px] flex flex-col justify-center items-center mb-[50px]">
          <img className="w-[32px]" src={imgOne} alt="market image here" />
          <h3 className="text-[20px] text-[white]">Lorem Ipsum</h3>
        </div>
      </div>
    </div>
  );
}

export default Home;
