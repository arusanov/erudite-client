import { AnyAction } from "redux";

import { LOGIN_SUCCESS } from "../constants/incomingMessageTypes";
import { LOGOUT } from "../constants/internalMessageTypes";
import { User } from "./types";

export default function reducer(state: User | null = null, action: AnyAction) {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      return action.payload;
    }
    case LOGOUT: {
      return null;
    }
    default:
      return state;
  }
}
