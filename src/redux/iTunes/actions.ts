import { Dispatch } from "react";
import { searchResponse } from "../../services/api";
import { Results } from "../../services/types";
import { ItunesActions, ItunesActionTypes } from "./types";

export const setItunesContent = (value: Results[]): ItunesActionTypes => ({
  type: ItunesActions.SET_ITUNES_CONTENT,
  payload: value,
});

export const loadItunesContent = (inputRequest: string) => async (dispatch: Dispatch<ItunesActionTypes>) => {
  const data = await searchResponse(inputRequest);
  if (data) {
    dispatch(setItunesContent(data));
  }
};