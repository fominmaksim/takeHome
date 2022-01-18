import axios from "axios";
import { VideosResponse } from "./types";

// const moviesApi = axios.create({
//   baseURL: "https://itunes.apple.com/lookup?amgVideoId=17120",
// });

export const appleMovies = async () => {
  try {
    const res = await axios.get<VideosResponse>(
      "https://itunes.apple.com/lookup?amgVideoId=17120"
    );
      return res;
  } catch (e) {
    console.warn(e);
    return false;
  }
};
