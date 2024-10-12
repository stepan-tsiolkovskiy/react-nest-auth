import { Routes, Route } from "react-router-dom";
import SignIn from "./../pages/SignIn";
import SignUp from "./../pages/SignUp";
import { AuthEmum } from "../types/auth.enum";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path={`${AuthEmum.SIGN_IN}`} element={<SignIn />} />
      <Route path={`${AuthEmum.SIGN_UP}`} element={<SignUp />} />
    </Routes>
  );
};

export default AuthRoutes;
