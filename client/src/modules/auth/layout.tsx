import AuthProvider from "./providers/AuthProvider";
import AuthPage from "./page";

const AuthLayout = () => {
  return (
    <AuthProvider>
      <AuthPage />
    </AuthProvider>
  );
};

export default AuthLayout;
