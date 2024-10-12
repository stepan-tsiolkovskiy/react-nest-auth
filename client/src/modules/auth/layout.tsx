import { ReactNode } from "react";
import Overlay from "./components/Overlay/Overlay";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <>
      <Overlay>{children}</Overlay>
    </>
  );
};

export default AuthLayout;
