import axios from "axios";
import { API_KEY } from "../config/config";

export const fetchByGenre = async (callbackfn, genre) => {
  try {
    const { data } = await axios.get(`
      https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=${genre}`);

    console.log(data);

    callbackfn(data.results.slice(0, 12));
  } catch (error) {
    console.log(error);
  }
};
