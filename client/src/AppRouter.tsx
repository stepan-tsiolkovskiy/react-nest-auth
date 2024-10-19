import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthModule from "./modules/auth";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="auth/*" element={<AuthModule />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
