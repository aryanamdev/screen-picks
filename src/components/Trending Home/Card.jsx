import React from "react";
import { img_300, img_500 } from "../../config/config";

const Card = ({ id, title, poster, rating, releaseDate }) => {
  return (
    <div className="relative cursor-pointer flex flex-col justify- gap-1 bg-gray-400 p-2 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-25">
      <div
        className="absolute  text-white top-0 right-20 bg-indigo-900 bg-clip-padding backdrop-filter backdrop-blur-3xl shadow-lg border border-gray-100
 rounded-full p-2.5"
      >
        {rating.toFixed(1)}
      </div>
      <figure className="aspect-auto w-48">
        <img
          src={`${img_500}/${poster}`}
          alt="Shoes"
          className="rounded-xl object-cover w-full h-full"
        />
      </figure>
    </div>
  );
};

export default Card;
