import React from "react";
import { img_500, unavailable } from "../../config/config";

export default function CustomModal({ id, modalDisplay }) {
  return (
    <div className="fixed flex flex-col lg:flex-row lg:justify-center items-center h-full backdrop-brightness-50 top-0 p-3 z-20 shadow-2xl bg-blue-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-40">
      <div className=" relative flex flex-col gap-8 lg:gap-0 lg:flex-row lg:w-8/12 items-center bg-blue-900  rounded-xl p-8 lg:p-0">
        <div className="flex justify-center lg:justify-start">
          <button
            onClick={() => {
              modalDisplay(false);
            }}
            className="absolute pointer text-white right-5 top-0 text-5xl"
          >
            x
          </button>
          <picture>
            <source type="image/webp" />
            <img
              loading="lazy"
              className="w-40 rounded-xl lg:w-96 object-cover"
              src={id[2] ? `${img_500}${id[2]}` : unavailable}
              alt=""
            />
          </picture>
        </div>
        <div className="flex flex-col  gap-3 lg:gap-6 lg:w-1/2 items-center lg:items-start text-md lg:text-xl lg:pl-20">
          <h1 className="text-left movie-name text-white bg-accent font-raleway font-bold p-3 rounded-md tracking-wide uppercase">
            {id[1]}
          </h1>

          <h3 className="release-date text-violet-300 font-bold font-mono text-xl mt-3 ">
            {id[3]}
          </h3>
          <div className="flex gap-6">
            <h3 className="rating mt-3 flex items-center gap-2">
              <div
                className="radial-progress  text-accent"
                style={{ "--value": id[4].toFixed(1) * 10 }}
              >
                {id[4].toFixed(1) * 10}%
              </div>
            </h3>

            {/* total rating */}
            <div className="stat bg-blue-700 rounded-lg  w-48">
              <div className="stat-figure text-accent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-5 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title text-gray-300">Total Ratings</div>
              <div className="stat-value text-accent">{id[4].toFixed(1)}</div>
            </div>
          </div>

          <p className="font-medium text-white about mt-3 lg:text-left text-center text-base h-28 lg:h-32 overflow-y-scroll scroll scroll-bar lg:pr-5 pr-3">
            <span className="text-accent font-medium pr-2 ">Overview: </span>
            {id[5]}
          </p>
        </div>
      </div>
    </div>
  );
}
