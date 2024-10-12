import AuthLayout from "./layout";
import AuthRoutes from "./routes/AuthRoutes";

const AuthPage = () => {
  return (
    <AuthLayout>
      <AuthRoutes />
    </AuthLayout>
  )
}

export default AuthPage;