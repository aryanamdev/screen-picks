import React, { useContext, useEffect, useState } from "react";
import Card from "../../components/movieCard/Card.jsx";
import { fetchTrending } from "../../utils/fetchTrending";
import { movieContext } from "../../context/MovieContext.jsx";
import CardSkeleton from "../../components/Skeleton/CardSkeleton.jsx";

const TrendingMovies = ({ modalDisplay, setId, key }) => {
  const [content, setContent] = useState([]);
  const { skeleton, setSkeleton } = useContext(movieContext);

  useEffect(() => {
    fetchTrending(setContent, setSkeleton);
  }, []);

  return (
    <div className="pl-6 lg:pl-8 mt-16 pb-4">
      <h2 className="text-white text-center lg:text-left font-medium text-2xl lg:text-2xl lg:mb-6">
        Trending Movies and Series
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

export default TrendingMovies;
