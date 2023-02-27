import React from "react";
import { img_300, img_500 } from "../config/config";

const SingleContent = ({ id, title, poster, rating, releaseDate }) => {
  return (
    <div className="bg-gray-400 shadow-xl cursor-pointer">
      <figure className="aspect-auto w-48 lg:w-60 px-2 pt-2">
        <img
          src={`${img_500}/${poster}`}
          alt="Shoes"
          className="rounded-xl object-cover w-full h-full"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p></p>
        <div className="card-actions"></div>
      </div>
    </div>
  );
};

export default SingleContent;
