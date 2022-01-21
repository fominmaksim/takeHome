import { Results } from "../../services/types";

export enum ItunesActions {
  SET_ITUNES_CONTENT = "SET_ITUNES_CONTENT",
}

interface SetItunesDataAction {
  type: ItunesActions.SET_ITUNES_CONTENT;
  payload: Results[];
}

export type ItunesActionTypes = SetItunesDataAction;
