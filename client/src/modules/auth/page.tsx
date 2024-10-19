import Overlay from "./components/Overlay/Overlay";
import { useAuthState } from "./context/hooks/useAuthState";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { AuthEmum } from "./types/auth.enum";

const AuthPage = () => {
  const { activeTab } = useAuthState();

  const isActiveTab = activeTab === AuthEmum.SIGN_IN;

  return <Overlay>{isActiveTab ? <SignIn /> : <SignUp />}</Overlay>;
};

export default AuthPage;
