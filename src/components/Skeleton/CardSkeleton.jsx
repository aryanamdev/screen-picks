import React from "react";

export default function CardSkeleton() {
  return (
    <div className="relative animation-pulse w-36 lg:w-48 h-56 lg:h-72 bg-gray-400 cursor-pointer flex flex-col justify- gap-1]p-2 rounded-xl">
      <div
        className="top-0 right-14 lg:right-20 absolute h-10 w-10 text-white top-0 right-20 bg-gray-500 bg-clip-padding shadow-lg
rounded-full p-2.5"
      >
        {/* {rating.toFixed(1)} */}
      </div>
      <figure className="aspect-auto w-48 ">
        <div alt="Shoes" className="rounded-xl object-cover w-full h-full" />
      </figure>
    </div>
  );
}
