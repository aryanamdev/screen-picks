import React, { useEffect, useState } from "react";
import Card from "../../components/movieCard/Card.jsx";
import { fetchTrending } from "../../utils/fetchTrending";

const TrendingMovies = ({ modalDisplay, setId, key }) => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    fetchTrending(setContent);
  }, []);

  return (
    <div className="pl-6 lg:pl-8 mt-16 pb-4">
      <h2 className="text-white text-center lg:text-left font-medium text-2xl lg:text-2xl mb-6">
        Trending Movies
      </h2>
      <div className="flex overflow-scroll gap-4 p-2 h-80 items-center">
        {content &&
          content.map((val) => {
            return (
              <Card
                modalDisplay={modalDisplay}
                setId={setId}
                key={val.id}
                id={val.id}
                title={val.title || val.original_name || val.name}
                poster={val.poster_path}
                rating={val.vote_average}
                releaseDate={val.first_air_date || val.release_date}
                overview={val.overview}
                backdrop_path={val.backdrop_path}
              />
            );
          })}
      </div>
    </div>
  );
};

export default TrendingMovies;
