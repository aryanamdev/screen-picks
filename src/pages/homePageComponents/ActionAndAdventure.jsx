import React, { useContext, useEffect, useState } from "react";
import Card from "../../components/movieCard/Card.jsx";
import { fetchByGenre } from "../../utils/fetchByGenre.js";
import { movieContext } from "../../context/MovieContext.jsx";
import CardSkeleton from "../../components/Skeleton/CardSkeleton.jsx";

const ActionAndAdventure = ({ modalDisplay, setId }) => {
  const { content, setContent, skeleton } =
    useContext(movieContext);

  useEffect(() => {
    fetchByGenre(setContent, "28");
  }, []);

  return (
    <div className="pl-6 lg:pl-8 mt-4 lg:mt-8 pb-4">
      <h2 className="text-white text-center lg:text-left font-medium text-2xl lg:text-2xl  lg:mb-6">
        Action And Adventure
      </h2>
      <div className="flex overflow-scroll gap-4 p-2 h-80 items-center">
        {!skeleton
          ? content &&
            content.map((val) => {
              return (
                <Card
                  modalDisplay={modalDisplay}
                  setId={setId}
                  key={val.id}
                  id={val.id}
                  title={val.title || val.original_name || val.name}
                  val={val}
                  poster={val.poster_path}
                  rating={val.vote_average}
                  releaseDate={val.first_air_date || val.release_date}
                  overview={val.overview}
                  backdrop_path={val.backdrop_path}
                />
              );
            })
          : [...Array(15)].map((val) => <CardSkeleton key={Math.random()} />)}
      </div>
    </div>
  );
};

export default ActionAndAdventure;
