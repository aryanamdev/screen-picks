import React, { Suspense, useEffect, useState } from "react";
import axios from "axios";
import CardSkeleton from "../Skeleton/CardSkeleton.jsx";
const Card = React.lazy(() => import("../movieCard/Card.jsx"));

const Romance = ({ modalDisplay, setId, key }) => {
  const [content, setContent] = useState([]);

  const fetchTrending = async () => {
    try {
      const { data } = await axios.get(`
      https://api.themoviedb.org/3/discover/movie?api_key=36c2c7be701e8ef2309e13bfdf25e942&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&with_watch_monetization_types=flatrate&page=3&with_genres=99`);

      console.log(data);

      setContent(data.results.slice(0, 12));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTrending();
  }, []);

  return (
    <div className="pl-6 lg:pl-8 mt-8 pb-4">
      <h2 className="text-white text-center lg:text-left font-medium text-xl lg:text-2xl mb-6">
        Some Must Watch Documentaries
      </h2>
      <div className="carousel carousel-center max-w-full space-x-4 rounded-box">
        {content &&
          content.map((val) => {
            return (
              <Suspense key={val.id} fallback={<CardSkeleton />}>
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
              </Suspense>
            );
          })}
      </div>
    </div>
  );
};

export default Romance;
