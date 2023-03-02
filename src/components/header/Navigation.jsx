import React, { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Movies from "../../pages/Movies";
import TvSeriesAndShows from "../../pages/TvSeriesAndShows";
import Search from "../../pages/Search";

function Navigation() {
  const [buttonVal, setButton] = useState("Home");

  return (
    <>
      <nav className="text-sm lg:text-lg flex text-white font-medium justify-center mt-4">
        <ul className="flex gap-3">
          <li
            onClick={(e) => setButton(e.target.innerText)}
            className={
              buttonVal === "Home"
                ? "p-3 bg-purple-900 hover:bg-[#ccadf2] text-white lg:text-lg text-sm rounded-md transition-colors"
                : "p-3 bg-[#AD7BE9] hover:bg-[#ccadf2] text-white lg:text-lg text-sm rounded-md transition-colors"
            }
          >
            <Link to="/">Home</Link>
          </li>
          <li
            onClick={(e) => setButton(e.target.innerText)}
            className={
              buttonVal === "Movies"
                ? "p-3 bg-purple-900 hover:bg-[#ccadf2] text-white lg:text-lg text-sm rounded-md transition-colors"
                : "p-3 bg-[#AD7BE9] hover:bg-[#ccadf2] text-white lg:text-lg text-sm rounded-md transition-colors"
            }
          >
            <Link to="/movies">Movies</Link>
          </li>
          <li
            onClick={(e) => setButton(e.target.innerText)}
            className={
              buttonVal === "Series and Shows"
                ? "p-3 bg-purple-900 hover:bg-[#ccadf2] text-white lg:text-lg text-sm rounded-md transition-colors"
                : "p-3 bg-[#AD7BE9] hover:bg-[#ccadf2] text-white lg:text-lg text-sm rounded-md transition-colors"
            }
          >
            <Link to="/seriesAndShows">Series and Shows</Link>
          </li>
          <li
            onClick={(e) => setButton(e.target.innerText)}
            className={
              buttonVal === "Search"
                ? "p-3 bg-purple-900 hover:bg-[#ccadf2] text-white lg:text-lg text-sm rounded-md transition-colors"
                : "p-3 bg-[#AD7BE9] hover:bg-[#ccadf2] text-white lg:text-lg text-sm rounded-md transition-colors"
            }
          >
            <Link to="/search">Search</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/seriesAndShows" element={<TvSeriesAndShows />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </>
  );
}

export default Navigation;
