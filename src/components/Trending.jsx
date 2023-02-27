import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleContent from "./SingleContent.jsx";

const Trending = () => {
  const [content, setContent] = useState([]);

  const fetchTrending = async () => {
    const { data } = await axios.get(`
        https://api.themoviedb.org/3/trending/all/day?api_key=36c2c7be701e8ef2309e13bfdf25e942`);

    // console.log(data);
    setContent(data.results);
  };

  useEffect(() => {
    fetchTrending();
  }, []);

  return (
    <div className="pl-4 mt-8">
      <h2 className="text-orange-400 font-medium text-lg mb-4">Trending Movies</h2>
      <div className="carousel carousel-center max-w-full space-x-4 rounded-box">
        {content &&
          content.map((val) => {
            return (
              <SingleContent
                key={val.id}
                id={val.id}
                title={val.title}
                poster={val.poster_path}
                rating={val.popularity}
                releaseDate={val.release_date}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Trending;
