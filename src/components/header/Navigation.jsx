import React, { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Movies from "../../pages/Movies";
import TvSeriesAndShows from "../../pages/TvSeriesAndShows";
import Search from "../../pages/Search";
import Info from "../modal/Info";

function Navigation() {
  const [buttonVal, setButton] = useState("Home");

  const navigation = [
    {
      pageName: "Home",
      route: "/",
      id: 1,
    },
    {
      pageName: "Movies",
      route: "/movies",
      id: 2,
    },
    {
      pageName: "Series and Shows",
      route: "/seriesAndShows",
      id: 3,
    },
    {
      pageName: "Search",
      route: "/search",
      id: 4,
    },
  ];

  return (
    <>
      <nav className="text-sm lg:text-lg flex text-white font-medium justify-center mt-2">
        <ul className="flex gap-3">
          {navigation.map((nav) => (
            <li
              key={nav.id}
              onClick={(e) => setButton(e.target.innerText)}
              className={
                buttonVal === nav.pageName
                  ? " active:scale-95 text-blue-400 glow lg:text-lg text-sm rounded-md transition-colors p-3"
                  : "  active:scale-95 text-white lg:text-lg text-sm rounded-md transition-colors p-3"
              }
            >
              <Link to={nav.route}>{nav.pageName}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movie/:id" element={<Info />} />
        <Route path="/seriesAndShows" element={<TvSeriesAndShows />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </>
  );
}

export default Navigation;
