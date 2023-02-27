import React from "react";

const Header = () => {
  return (
    <div className=" flex flex-col gap-4 lg:flex-row justify-between items-center p-4 lg:p-8">
      <p className="font-semibold text-center text-2xl text-white uppercase lg:text-3xl font-raleway">
        Screen Picks🍿
      </p>
      <form className="bg-gray-500 rounded-md" action="get">
        <input
          type="text"
          className="rounded-md bg-transparent placeholder:text-white outline-none text-white border-white placeholder:text-sm lg:placeholder:text-base px-1 lg:px-2 lg:py-1 lg:w-60"
          placeholder="Search Your Favourite Movie"
        />
        <button className="px-3 text-black font-semibold hover:bg-gray-300 transition-colors py-1 bg-white rounded-md" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Header;
