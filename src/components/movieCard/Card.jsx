import React from "react";
import { img_300, unavailable } from "../../config/config";

const Card = ({
  id,
  title,
  poster,
  rating,
  releaseDate,
  modalDisplay,
  setId,
  overview,
  backdrop_path,
}) => {

  return (
    <div
      onClick={() => {
        modalDisplay(true);
        setId([id, title, poster, releaseDate, rating, overview]);
      }}
      className="relative hover:scale-105 h-56 lg:h-72 cursor-pointer flex flex-col  gap-1 bg-gray-400 hover:bg-gray-200 p-1 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-25"
    >
      <div
        className="absolute text-white top-0 right-14 lg:right-20 bg-primary bg-clip-padding backdrop-filter backdrop-blur-3xl shadow-lg border border-gray-100
 rounded-full p-2.5"
      >
        {rating.toFixed(1)}
      </div>
      <picture className="w-36 h-full lg:w-48">
        <source type="image/webp" />
        <img
          loading="lazy"
          style={{ height: "100%", width: "100%" }}
          // style={{ width: "144px", height: "192px" }}
          src={poster ? `${img_300}/${poster}` : unavailable}
          alt="Image"
          className="rounded-md object-cover"
        />
      </picture>
    </div>
  );
};

export default Card;
