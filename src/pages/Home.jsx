import React, { useState } from "react";
import TrendingMovies from "../components/homePageComponents/TrendingMovies";
import CustomModal from "../components/modal/CustomModal";
import GenreComponent from "../components/genre/genreComponent";
import ActionAndAdventure from "../components/homePageComponents/ActionAndAdventure";
import Romance from "../components/homePageComponents/Documentaries";
import Horror from "../components/homePageComponents/DontGetScared";
import TopRatedShows from "../components/homePageComponents/TopRatedShows";

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
      <Horror modalDisplay={modalDisplay} setId={setId} />
      <TopRatedShows modalDisplay={modalDisplay} setId={setId} />
      <div className="flex">
        <div
          onClick={() => {
            window.scroll(0, 0);
          }}
          className="my-10  text-center mx-auto cursor-pointer bg-purple-400 text-white p-3 uppercase font-semibold rounded-md"
        >
          Jump to Top
        </div>
      </div>
    </>
  );
}

export default Home;
