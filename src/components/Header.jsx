import React from "react";

const Header = () => {
  return (
    <div className=" flex flex-col gap-4 lg:flex-row justify-between items-center p-4 lg:p-8">
      <p className="font-semibold text-center text-3xl text-white uppercase lg:text-3xl font-raleway my-8">
        Screen Picks🍿
      </p>
      <form className= "bg-gray-500 bg-opacity-20 rounded-md " action="get">
        <input
          type="text"
          className="rounded-md w-60 bg-transparent placeholder:text-white outline-none text-white border-white placeholder:text-sm lg:placeholder:text-base p-3 lg:w-60"
          placeholder="Search Your Favourite Movie"
        />
        <button className="px-3 mr-2 text-black font-semibold hover:bg-gray-300 transition-colors py-1 bg-white rounded-md" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Header;
