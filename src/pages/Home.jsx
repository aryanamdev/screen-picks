import React from "react";
import TrendingMovies from "../components/Trending Home/TrendingMovies";
import TrendingSeries from "../components/Trending Home/TrendingSeries";
import TopRatedMovies from "../components/TopRatedMovies/TopRatedMovies";
import HorrorMovies from "../components/HorrorMovies/Horror";
import ActionMovies from "../components/Action/Action";

function Home() {
  return (
    <>
      <TrendingMovies />
      <TrendingSeries />
      <TopRatedMovies />
      <HorrorMovies />
      <ActionMovies />
    </>
  );
}

export default Home;
