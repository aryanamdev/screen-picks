import axios from "axios";
import { API_KEY } from "../config/config";

export const fetchSearch = async (apiValue, search, page, callback) => {
  try {
    const { data } = await axios.get(`
      https://api.themoviedb.org/3/search/${
        apiValue === "movie" ? "movie" : "tv"
      }?api_key=${API_KEY}&language=en-US&query=${search}&page=${page}&include_adult=false`);

    callback(data.results.slice(0, data.results.length - 2));
  } catch (error) {
    console.log(error);
  }
};
