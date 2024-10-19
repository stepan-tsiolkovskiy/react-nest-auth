import { ReactNode, useState } from "react";
import "./index.css";
import useChangeActiveTab from "../../hooks/useChangeActiveTab";
import { AuthEmum } from "../../types/auth.enum";

interface OverlayProps {
  children: ReactNode;
}

const Overlay = ({ children }: OverlayProps) => {
  const { setActiveTab } = useChangeActiveTab();
  const [type, setType] = useState("signIn");
  const handleOnClick = (text: string) => {
    if (text !== type) {
      setType(text);
      return;
    }
  };
  const handleTabChange = (newTab: AuthEmum) => {
    setActiveTab(newTab);
  };
  const containerClass =
    "container " + (type === "signUp" ? "right-panel-active" : "");

  return (
    <div className="App">
      <h2>Sign in/up Form</h2>
      <div className={containerClass} id="container">
        {children}
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                className="ghost"
                id="signIn"
                onClick={() => handleTabChange(AuthEmum.SIGN_IN)}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                className="ghost "
                id="signUp"
                onClick={() => handleTabChange(AuthEmum.SIGN_UP)}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
