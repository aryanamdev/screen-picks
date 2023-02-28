import React from "react";

const Form = () => {
  return (
    <div className="flex justify-center p-8">
      <form
        className="w-80 lg:w-1/3 p-3 flex justify-between bg-gray-500 bg-opacity-20 rounded-md "
        action="get"
      >
        <input onChange={(e)=>{e.target.value}}
          type="text"
          className="w-full rounded-md bg-transparent placeholder:text-white outline-none text-white border-white placeholder:text-sm lg:placeholder:text-base"
          placeholder="Search Your Favourite"
        />
        <button
          className="px-3 text-black font-semibold hover:bg-gray-300 transition-colors py-1 bg-white rounded-md"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Form;
