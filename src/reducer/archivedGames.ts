import { AnyAction } from "redux";

import { ARCHIVED_GAMES } from "../constants/internalMessageTypes";
import { Game } from "./types";

export default function reducer(
  state: Game[] | null = null,
  action: AnyAction
) {
  switch (action.type) {
    case ARCHIVED_GAMES: {
      return action.payload;
    }
    default:
      return state;
  }
}
