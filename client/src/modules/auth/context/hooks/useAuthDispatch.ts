import { useContext } from "react";
import { AuthContext } from "../AuthContext";

export const useAuthDispatch = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthDispatch must be used within an AuthProvider");
  }
  return context.dispatch;
};
