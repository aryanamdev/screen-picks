import React, { Suspense, useContext, useEffect, useState } from "react";
import axios from "axios";
import CardSkeleton from "../Skeleton/CardSkeleton.jsx";
import Card from "../movieCard/Card.jsx";
import { movieContext } from "../../context/MovieContext.jsx";

const TvComponent = ({ modalDisplay, setId, page, genreId }) => {
  const [content, setContent] = useState([]);

  const { skeleton, setSkeleton } = useContext(movieContext);

  const fetchMovies = async () => {
    try {
      const { data } = await axios.get(`
      https://api.themoviedb.org/3/discover/tv?api_key=36c2c7be701e8ef2309e13bfdf25e942&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&with_watch_monetization_types=flatrate&page=${page}&with_genres=${genreId}`);
      setSkeleton(false);

      console.log(data);

      setContent(data.results.slice(0, data.results.length - 2));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [page, genreId]);

  return (
    <div className="px-6 lg:p-8 mt-6 pb-10 w-full">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-8 place-items-center  rounded-box">
        {!skeleton
          ? content &&
            content.map((val) => {
              return (
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
              );
            })
          : [...Array(30)].map((val, index) => <skeleton key={index} />)}
      </div>
    </div>
  );
};

export default TvComponent;
