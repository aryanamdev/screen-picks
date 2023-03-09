import React, { useState } from "react";
import {
  TrendingMovies,
  ActionAndAdventure,
  Horror,
  ScienceFiction,
  Documentaries,
} from "./homePageComponents";
import CustomModal from "../components/modal/CustomModal";
import Attribution from "../components/attribution/Attribution";

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
      <Horror modalDisplay={modalDisplay} setId={setId} />
      <ScienceFiction modalDisplay={modalDisplay} setId={setId} />
      <Documentaries modalDisplay={modalDisplay} setId={setId} />

      <div className="flex">
        <div
          onClick={() => {
            window.scroll(0, 0);
          }}
          className="my-10 text-center mx-auto cursor-pointer btn-primary btn text-white p-3 uppercase font-semibold rounded-md"
        >
          Jump to Top
        </div>
      </div>
      <Attribution />
    </>
  );
}

export default Home;
