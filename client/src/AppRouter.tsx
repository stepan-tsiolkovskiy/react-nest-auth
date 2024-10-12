import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from "./modules/auth/page";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="auth/*" element={<AuthPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
