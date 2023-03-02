import React from "react";

const Form = ({ search, setSearch }) => {
  return (
    <div className="flex justify-center p-8">
      <form
        className="w-80 lg:w-1/3 p-3 flex justify-between bg-gray-500 bg-opacity-20 rounded-md "
        action="get"
      >
        <input
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          value={search}
          type="text"
          className="w-full rounded-md bg-transparent placeholder:text-white outline-none text-white border-white placeholder:text-sm lg:placeholder:text-base"
          placeholder="Search Your Favourite"
        />

      </form>
    </div>
  );
};

export default Form;
