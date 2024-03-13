import data from "../../data.json";

const backImages = (
  data.photos.find((category) => category.category === "back-end") || {
    images: [],
  }
).images;

function Back() {
  return (
    <div className="bg-[white] px-[12px]">
      <div>
        {backImages.map((image, index) => (
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

export default Back;
