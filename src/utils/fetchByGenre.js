import axios from "axios";

export const fetchTrending = async (callbackfn, genre) => {
  try {
    const { data } = await axios.get(`
      https://api.themoviedb.org/3/discover/movie?api_key=36c2c7be701e8ef2309e13bfdf25e942&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=${genre}`);

    console.log(data);

    callbackfn(data.results.slice(0, 12));
  } catch (error) {
    console.log(error);
  }
};
