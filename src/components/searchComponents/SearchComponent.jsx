import React, { Suspense, useEffect, useState } from "react";
import axios from "axios";
import CardSkeleton from "../Skeleton/CardSkeleton.jsx";
const Card = React.lazy(() => import("../movieCard/Card.jsx"));
import { API_KEY } from "../../config/config.js";

const SearchComponent = ({ modalDisplay, setId, page, search, apiValue }) => {
  const [content, setContent] = useState([]);

  const fetchMovies = async () => {
    try {
      const { data } = await axios.get(`
      https://api.themoviedb.org/3/search/${
        apiValue === "movie" ? "movie" : "tv"
      }?api_key=${API_KEY}&language=en-US&query=${search}&page=${page}&include_adult=false`);

      console.log(apiValue);
      console.log(search);
      console.log(data);

      setContent(data.results.slice(0, data.results.length - 2));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [page, search, apiValue]);

  return (
    <div className="px-6 h-[140vh] lg:p-8 mt-6 pb-10 w-full">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-5 place-items-center  rounded-box">
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

export default SearchComponent;
