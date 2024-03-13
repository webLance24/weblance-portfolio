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
          <img
            className="pb-[15px]"
            key={index}
            src={image.src}
            alt={image.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Design;
