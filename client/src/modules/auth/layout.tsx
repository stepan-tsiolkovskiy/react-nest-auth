import { ReactNode } from "react";
import Overlay from "./components/Overlay/Overlay";
import AuthProvider from "./providers/AuthProvider";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <AuthProvider>
      <Overlay />
    </AuthProvider>
  );
};

export default AuthLayout;
