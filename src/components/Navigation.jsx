import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import TvSeriesAndShows from "../pages/TvSeriesAndShows";

function Navigation() {
  return (
    <>
      <nav className="text-sm lg:text-lg flex text-white font-medium justify-center mt-4">
        <ul className="flex gap-5">
          <li className="bg-[#AD7BE9] hover:bg-[#ccadf2]  px-3 py-1 rounded-md transition-colors">
            <Link to="/">Home</Link>
          </li>
          <li className="bg-[#AD7BE9] hover:bg-[#ccadf2]  px-3 py-1 rounded-md transition-colors">
            <Link to="/movies">Movies</Link>
          </li>
          <li className="bg-[#AD7BE9] hover:bg-[#ccadf2]  px-3 py-1 rounded-md transition-colors">
            <Link to="/seriesAndShows">Series and Shows</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/seriesAndShows" element={<TvSeriesAndShows />} />
      </Routes>
    </>
  );
}

export default Navigation;
