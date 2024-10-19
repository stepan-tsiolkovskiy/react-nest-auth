import { ReactNode } from "react";
import { AuthContextProvider } from "../context/AuthContextProvider";

type AuthProviderType = {
  children: ReactNode;
};

const AuthProvider = ({ children }: AuthProviderType) => (
  <AuthContextProvider>{children}</AuthContextProvider>
);

export default AuthProvider;
