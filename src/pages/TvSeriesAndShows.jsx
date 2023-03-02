import React, { useState } from "react";
import CustomModal from "../components/modal/CustomModal";
import TvComponent from "../components/seriesComponents/TvComponent";
import CustomPagination from "../components/Pagination/CustomPagination";
import SeriesGenreComponent from "../components/genre/seriesGenre";
import Attribution from "../components/attribution/Attribution";

function TvSeries() {
  const [page, setPage] = useState(1);
  const [modal, setModal] = useState(false);
  const [id, setId] = useState([]);
  const [genreId, setGenreId] = useState("");

  const handleGenre = (genreId) => {
    setGenreId(genreId);
  };

  const modalDisplay = (value) => {
    setModal(value);
  };

  const getId = (id) => {
    setId(id);
  };

  const [title, poster, releaseDate, rating, overview] = id;

  return (
    <>
      <SeriesGenreComponent
        id={genreId}
        genre={genreId}
        handleGenre={handleGenre}
      />
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
      <TvComponent
        genreId={genreId}
        modalDisplay={modalDisplay}
        setId={setId}
        page={page}
      />
      <CustomPagination setPage={setPage} page={page} />
      <Attribution />
    </>
  );
}

export default TvSeries;
