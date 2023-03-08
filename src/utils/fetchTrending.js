import { API_KEY } from "../config/config";
import axios from "axios";

export const fetchTrending = async (callback) => {
  try {
    const { data } = await axios.get(`
      https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`);

    console.log(data);

    callback(data.results);
  } catch (error) {
    console.log(error);
  }
};
