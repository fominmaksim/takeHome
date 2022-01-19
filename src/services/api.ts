import axios from "axios";
import { contentResponse } from "./types";

const itunesApi = axios.create({
  baseURL: "https://itunes.apple.com/",
});

export const searchResponse = async (inputRequest: string) => {
  try {
    const res = await itunesApi.get<contentResponse>(`search`, {
      params: {
        term: inputRequest,
      },
    });
    return res.data.results;
  } catch (e) {
    console.warn(e);
    return false;
  }
};
