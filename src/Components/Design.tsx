import data from "../../data.json";

const designImages = (
  data.photos.find((category) => category.category === "design") || {
    images: [],
  }
).images;

function Design() {
  return (
    <div className="bg-[white] px-[12px]">
      <div>
        {designImages.map((image, index) => (
          <div className="main pb-[15px]" key={index}>
            <img
              key={index}
              src={image.src}
              alt={image.title}
              className="image block w-[100%] h-auto"
              style={{ width: "100%" }}
            />
            <div className="middle">
              <div className="text">{image.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Design;
