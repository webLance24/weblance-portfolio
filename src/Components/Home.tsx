// import imgOne from "../../public/assets/icons/market.png";

function Home() {
  //   const categories = [
  //     { title: "Lorem Ipsum", src: imgOne },
  //     { title: "Lorem Ipsum", src: imgOne },
  //     { title: "Lorem Ipsum", src: imgOne },
  //     { title: "Lorem Ipsum", src: imgOne },
  //     { title: "Lorem Ipsum", src: imgOne },
  //   ];

  return (
    // here is home page
    <div
      id="home"
      className="pt-[100px] pb-[100px] md:pb-[130px] lg:pb-[190px] lg:pt-[220px] px-[12px] bg-[black] bg-opacity-60"
    >
      <div className="md:w-[696px] md:m-auto">
        <h1 className="text-[white] text-[40px] font-bold text-center md:text-[56px]">
          Powerful Websites with webLance
        </h1>
      </div>
      <p className="text-[white] text-[20px] font-light text-center md:text-[24px]">
        We are team of talented digital developers
      </p>
      {/* Containers section */}
      <div className="flex justify-center items-center flex-col m-auto gap-[20px] mt-[40px] max-w-[520px] md:flex-wrap md:flex-row md:max-w-[1024px] md:pb-[50px] 2xl:max-w-[1536px]">
        {/* div where mapped all categories element */}
        {/* {categories.map((category, index) => {
          return (
            <div
              key={index}
              className="w-full h-[130px] border-[gray] border-[2px] flex flex-col justify-center items-center md:w-[216px] md:h-[156px] lg:w-[295px] lg:h-[130px] xl:w-[165px] xl:h-[156px] 2xl:w-[196px] 2xl:h-[156px]"
            >
              <img
                className="w-[32px]"
                src={category.src}
                alt="market image here"
              />
              <h3 className="text-[20px] text-[white]">{category.title}</h3>
            </div>
          );
        })} */}
      </div>
    </div>
  );
}
export default Home;
