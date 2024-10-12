import { ReactNode, useState } from "react";
import { AuthEmum } from "../../types/auth.enum";
import "./index.css";

interface OverlayProps {
  children: ReactNode;
}

const Overlay = ({ children }: OverlayProps) => {
  const [activeTypeOfAuth, setActiveTypeOfAuth] = useState(AuthEmum.SIGN_IN);

  const handleOnClick = (value: AuthEmum) => {
    if (value !== activeTypeOfAuth) {
      setActiveTypeOfAuth(value);
      return;
    }
  };
  const containerClass =
    "container " +
    (activeTypeOfAuth === AuthEmum.SIGN_UP ? "right-panel-active" : "");

  return (
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
              id={AuthEmum.SIGN_IN}
              onClick={() => handleOnClick(AuthEmum.SIGN_IN)}
            >
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button
              className="ghost "
              id={AuthEmum.SIGN_UP}
              onClick={() => handleOnClick(AuthEmum.SIGN_UP)}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
