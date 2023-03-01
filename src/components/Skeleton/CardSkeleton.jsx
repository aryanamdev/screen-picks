import React from "react";

export default function CardSkeleton() {
  return (
    <div className="relative animation cursor-pointer flex flex-col justify- gap-1 bg-gray-300 p-2 rounded-xl">
      <div
        className="absolute h-10 w-10 text-white top-0 right-20 bg-gray-500 bg-clip-padding shadow-lg
rounded-full p-2.5"
      >
        {/* {rating.toFixed(1)} */}
      </div>
      <figure className="aspect-auto w-48 h-72">
        <div alt="Shoes" className="rounded-xl object-cover w-full h-full" />
      </figure>
    </div>
  );
}