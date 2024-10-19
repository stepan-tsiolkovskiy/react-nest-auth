import { createContext } from "react";
import { AuthEmum } from "../types/auth.enum";

interface AuthState {
  activeTab: AuthEmum;
}

type AuthAction = { type: "SET_ACTIVE_TAB"; payload: AuthEmum };

export const initialState: AuthState = {
  activeTab: AuthEmum.SIGN_IN,
};

export const authReducer = (
  state: AuthState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case "SET_ACTIVE_TAB":
      return { ...state, activeTab: action.payload };
    default:
      return state;
  }
};

export const AuthContext = createContext<{
  state: AuthState;
  dispatch: React.Dispatch<AuthAction>;
}>({
  state: initialState,
  dispatch: () => null,
});
