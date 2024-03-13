import data from "../../data.json";

const frontImages = (
  data.photos.find((category) => category.category === "front-end") || {
    images: [],
  }
).images;

function Front() {
  return (
    <div className="bg-[white] px-[12px]">
      <div>
        {frontImages.map((image, index) => (
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

export default Front;
