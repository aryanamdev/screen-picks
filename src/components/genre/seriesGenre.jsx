import React, { useState, useEffect } from "react";
import axios from "axios";

export default function SeriesGenreComponent({ genreId, handleGenre }) {
  const [genre, setGenre] = useState([]);

  const fetchGenre = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/tv/list?api_key=36c2c7be701e8ef2309e13bfdf25e942&language=en-US`
    );

    console.log(data);
    setGenre(data.genres);
  };

  useEffect(() => {
    fetchGenre();
  }, []);

  return (
    <div className="w-full p-8 mt-5">
      {/* <h1 className="text-white text-center mb-6 text-2xl">Select Genre</h1> */}
      <div className="   ">
        <div className="gap-2 justify-center flex flex-wrap">
          {genre &&
            genre.map((v) => {
              return (
                <div
                  className="btn active:bg-gray-600 text-xs lg:text-base"
                  onClick={(e) => {
                    handleGenre(e.target.id);
                    console.log(e.target.id);
                  }}
                  key={v.id}
                  id={v.id}
                  value={v.name}
                >
                  {v.name}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
