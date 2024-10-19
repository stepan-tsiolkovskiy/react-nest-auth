import { useAuthState } from "./context/hooks/useAuthState";
import AuthLayout from "./layout";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { AuthEmum } from "./types/auth.enum";

const AuthPage = () => {
  const { activeTab } = useAuthState();

  console.log(`AuthPage==${activeTab}`);
  return (
    <AuthLayout>
      {/* {activeTab === AuthEmum.SIGN_IN ? <SignIn /> : <SignUp />} */}
      {/* <SignIn />
      <SignUp /> */}
    </AuthLayout>
  );
};

export default AuthPage;
