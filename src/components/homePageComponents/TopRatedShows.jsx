import React, { Suspense, useEffect, useState } from "react";
import axios from "axios";
import CardSkeleton from "../Skeleton/CardSkeleton.jsx";
const Card = React.lazy(() => import("../movieCard/Card.jsx"));
import { API_KEY } from "../../config/config";
import ScrollContainer from "react-indiana-drag-scroll";


const TopRatedShows = ({ modalDisplay, setId, key }) => {
  const [content, setContent] = useState([]);

  const fetchTrending = async () => {
    try {
      const { data } = await axios.get(`
      https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`);

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
        Shows Worth Binge Watching
      </h2>
      <ScrollContainer className="carousel carousel-center max-w-full space-x-4 rounded-box">
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
      </ScrollContainer>
    </div>
  );
};

export default TopRatedShows;
