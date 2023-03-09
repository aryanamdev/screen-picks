import { API_KEY } from "../config/config";
import axios from "axios";
import { movieContext } from "../context/MovieContext";
import { useContext } from "react";

export const fetchTrending = async (callback, setSkeleton) => {
  try {
    const { data } = await axios.get(`
      https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`);

    console.log(data);

    callback(data.results);
    setSkeleton(false);
  } catch (error) {
    console.log(error);
  }
};
