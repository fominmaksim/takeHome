import { Results } from "../../services/types";
import { ItunesActions, ItunesActionTypes } from "./types";

export interface ItunesStore {
  iTunes?: Results[];
}

const initialStore: ItunesStore = {};

const app = (store = initialStore, action: ItunesActionTypes) => {
  switch (action.type) {
    case ItunesActions.SET_ITUNES_CONTENT:
      return { ...store, iTunes: action.payload };
    default:
      return store;
  }
};

export default app;
