import React, { useState } from "react";
import TrendingMovies from "../components/homePageComponents/TrendingMovies";
import CustomModal from "../components/modal/CustomModal";
import GenreComponent from "../components/genre/genreComponent";
import ActionAndAdventure from "../components/homePageComponents/ActionAndAdventure";
import Romance from "../components/homePageComponents/Romance";

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
      <ActionAndAdventure modalDisplay={modalDisplay} setId={setId} />
      <Romance modalDisplay={modalDisplay} setId={setId} />
    </>
  );
}

export default Home;
