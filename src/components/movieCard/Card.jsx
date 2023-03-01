import React from "react";
import { img_300 } from "../../config/config";

const Card = ({
  id,
  title,
  poster,
  rating,
  releaseDate,
  modalDisplay,
  setId,
  overview,
}) => {
  return (
    <div
      onClick={() => {
        modalDisplay(true);
        setId([id, title, poster, releaseDate, rating, overview]);
      }}
      className="relative cursor-pointer w-52 flex flex-col justify- gap-1 bg-gray-400 hover:bg-gray-200 p-2 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-25"
    >
      <div
        className="absolute text-white top-0 right-20 bg-indigo-900 bg-clip-padding backdrop-filter backdrop-blur-3xl shadow-lg border border-gray-100
 rounded-full p-2.5"
      >
        {rating.toFixed(1)}
      </div>
      <div className="w-48">
        <img
          loading="lazy"
          style={{ width: "192px", height: "288px" }}
          src={`${img_300}/${poster}`}
          alt="Shoes"
          className="rounded-xl object-cover"
        />
      </div>
    </div>
  );
};

export default Card;
