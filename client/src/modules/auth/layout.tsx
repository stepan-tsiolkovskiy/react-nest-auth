import { ReactNode } from "react";
import AuthProvider from "./providers/AuthProvider";
import AuthPage from "./page";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <AuthProvider>
      <AuthPage />
    </AuthProvider>
  );
};

export default AuthLayout;
