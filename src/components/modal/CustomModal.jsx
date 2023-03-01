import React from "react";
import { img_500 } from "../../config/config";

// closing modal function
// onClick={()=>{modalDisplay(false)}}

export default function CustomModal({ id, modalDisplay }) {
  return (
    <div className="fixed flex flex-col lg:flex-row lg:justify-center items-center gap-14 h-vh backdrop-brightness-0 top-0 p-8 z-20 m-2 shadow-2xl bg-purple-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-30 border border-gray-100 ">
      {/* <h3>{id[0]}</h3> */}
      <div className="flex justify-center lg:justify-start">
        <button
          onClick={() => {
            modalDisplay(false);
          }}
          className="absolute pointer text-white right-5 top-0 text-5xl"
        >
          x
        </button>
        <img
          className="w-52 rounded-xl lg:w-96 object-cover"
          src={`${img_500}${id[2]}`}
          alt=""
        />
      </div>
      <div className="flex flex-col gap-1 lg:gap-6 lg:w-1/2 items-center lg:items-start text-lg lg:text-xl">
        <h1 className="text-left movie-name">
          <span className="text-white pr-2 ">Name:</span> {id[1]}
        </h1>

        <h3 className="release-date mt-3 ">
          <span className="text-white pr-2 ">Release Date:</span> {id[3]}
        </h3>
        <h3 className="rating mt-3 ">
          <span className="text-white pr-2 ">Ratings:</span> {id[4].toFixed(1)}
        </h3>
        <p className="about mt-3 lg:text-left text-center text-base">
          <span className="text-white pr-2 ">Overview: </span>
          {id[5]}
        </p>
      </div>
    </div>
  );
}
