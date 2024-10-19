import Overlay from "./components/Overlay/Overlay";
import { useAuthState } from "./context/hooks/useAuthState";
import AuthLayout from "./layout";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { AuthEmum } from "./types/auth.enum";

const AuthPage = () => {
  const { activeTab } = useAuthState();

  const isActiveTab = activeTab === AuthEmum.SIGN_IN;

  return (
    <AuthLayout>
      <Overlay>{isActiveTab ? <SignIn /> : <SignUp />}</Overlay>
    </AuthLayout>
  );
};

export default AuthPage;
