import React, { Suspense, useEffect, useState } from "react";
import CardSkeleton from "../Skeleton/CardSkeleton.jsx";
const Card = React.lazy(() => import("../movieCard/Card.jsx"));
import ScrollContainer from "react-indiana-drag-scroll";
import { fetchTrending } from "../../utils/fetchByGenre.js";

const ActionAndAdventure = ({ modalDisplay, setId, key }) => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    fetchTrending(setContent, [28, 12]);
  }, []);

  return (
    <div className="pl-6 lg:pl-8 mt-8 pb-4 relative ">
      <h2 className="text-white text-center lg:text-left font-medium text-2xl lg:text-2xl mb-6">
        Action & Adventure
      </h2>
      <ScrollContainer className="carousel  carousel-center max-w-full space-x-4 rounded-box">
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

export default ActionAndAdventure;
