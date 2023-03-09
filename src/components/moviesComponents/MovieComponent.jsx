import React, { Suspense, useContext, useEffect, useState } from "react";
import CardSkeleton from "../Skeleton/CardSkeleton.jsx";
const Card = React.lazy(() => import("../movieCard/Card.jsx"));
import { fetchMovies } from "../../utils/fetchMovies.js";
import { movieContext } from "../../context/MovieContext.jsx";

const MovieComponent = ({ modalDisplay, setId, page, genreId }) => {
  const { content, setContent } = useContext(movieContext);

  useEffect(() => {
    fetchMovies(setContent, page, genreId);
  }, [page, genreId]);

  return (
    <div className="px-6 lg:p-8 mt-6 pb-10 w-full">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-8 place-items-center">
        {content &&
          content.map((val) => {
            return (
              <Suspense key={val.id} fallback={<CardSkeleton />}>
                <Card
                  key={val.id}
                  modalDisplay={modalDisplay}
                  setId={setId}
                  id={val.id}
                  title={val.title || val.original_name || val.name}
                  poster={val.poster_path}
                  rating={val.vote_average}
                  releaseDate={val.first_air_date || val.release_date}
                  overview={val.overview}
                  backdrop_path={val.backdrop_path}
                />
              </Suspense>
            );
          })}
      </div>
    </div>
  );
};

export default MovieComponent;
