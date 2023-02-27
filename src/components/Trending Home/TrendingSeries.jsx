import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card.jsx";

const Trending = () => {
  const [content, setContent] = useState([]);

  const fetchTrending = async () => {
    try {
      const { data } = await axios.get(`
        https://api.themoviedb.org/3/trending/tv/day?api_key=36c2c7be701e8ef2309e13bfdf25e942`);

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
    <div className="pl-4 lg:pl-8 mt-8 pb-10">
      <h2 className="text-teal-100 text-center lg:text-left font-medium text-2xl lg:text-2xl mb-6">
        Trending Series
      </h2>
      <div className="carousel carousel-center max-w-full space-x-4 rounded-box">
        {content &&
          content.map((val) => {
            return (
              <Card
                key={val.id}
                id={val.id}
                title={val.title || val.original_name || val.name}
                poster={val.poster_path}
                rating={val.vote_average}
                releaseDate={val.first_air_date}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Trending;
