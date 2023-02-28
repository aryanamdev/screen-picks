import React, { useState } from "react";
import TrendingMovies from "../components/homePageComponents/TrendingMovies";
import TrendingSeries from "../components/homePageComponents/TrendingSeries";
import TopRatedMovies from "../components/homePageComponents/TopRatedMovies";
import HorrorMovies from "../components/homePageComponents/Horror";
import ActionMovies from "../components/homePageComponents/Action";
import Header from "../components/header/Header";
import CustomModal from "../components/modal/CustomModal";

function Home() {
  const [modal, setModal] = useState(false);
  const [id, setId] = useState([]);

  const modalDisplay = (value) => {
    setModal(value);
  };

  const getId = (id) => {
    setId(id);
  };

  const [title, poster, releaseDate, rating, overview] = id;

  return (
    <>
      {modal && (
        <CustomModal
          id={id}
          title={title}
          poster={poster}
          releaseDate={releaseDate}
          rating={rating}
          overview={overview}
          modalDisplay={modalDisplay}
        />
      )}
      <TrendingMovies modalDisplay={modalDisplay} setId={setId} />
      <TrendingSeries modalDisplay={modalDisplay} setId={setId} />
      <TopRatedMovies modalDisplay={modalDisplay} setId={setId} />
      <HorrorMovies modalDisplay={modalDisplay} setId={setId} />
      <ActionMovies modalDisplay={modalDisplay} setId={setId} />
    </>
  );
}

export default Home;
