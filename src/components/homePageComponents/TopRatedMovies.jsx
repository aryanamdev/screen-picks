import React, { Suspense, useEffect, useState } from "react";
import axios from "axios";
const TrendingCard = React.lazy(() => import("../movieCard/Card.jsx"));

const TopRatedMovies = ({ modalDisplay, setId }) => {
  const [content, setContent] = useState([]);

  const fetchTrending = async () => {
    try {
      const { data } = await axios.get(`
      https://api.themoviedb.org/3/movie/top_rated?api_key=36c2c7be701e8ef2309e13bfdf25e942`);

      console.log(data);

      setContent(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTrending();
  }, []);

  return (
    <div className="pl-6 lg:pl-8 mt-8 pb-4">
      <h2 className="text-white text-center lg:text-left font-medium text-2xl lg:text-2xl mb-6">
        Top Rated Movies
      </h2>
      <div className="carousel carousel-center max-w-full space-x-4 rounded-box">
        {content &&
          content.map((val) => {
            return (
              <Suspense fallback={<div>Loading...</div>}>
                <TrendingCard
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
              </Suspense>
            );
          })}
      </div>
    </div>
  );
};

export default TopRatedMovies;
