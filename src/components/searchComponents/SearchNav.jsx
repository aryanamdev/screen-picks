import react from "react";

const SearchNav = ({ apiValue, handleApiValue }) => {
  return (
    <div className="w-full p-5 flex justify-center">
      <div className="flex navbar justify-center gap-2 ">
        <button
          id="movie"
          onClick={(e) => {
            handleApiValue(e.target.id);
          }}
          className={apiValue === "movie" ? "btn btn-primary" : "btn"}
        >
          Search Movies
        </button>
        <button
          onClick={(e) => {
            handleApiValue(e.target.id);
          }}
          id="tv"
          className={apiValue == "tv" ? "btn btn-primary" : "btn"}
        >
          Search Tv
        </button>
      </div>
    </div>
  );
};

export default SearchNav;
