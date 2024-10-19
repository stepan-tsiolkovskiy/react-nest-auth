import { ReactNode, useState } from "react";
import "./index.css";
import SignUp from "../../pages/SignUp";
import SignIn from "../../pages/SignIn";

interface OverlayProps {
  children: ReactNode;
}

const Overlay = ({ children }: OverlayProps) => {
  const [isLeft, setIsLeft] = useState(false);

  const handleToggle = () => {
    setIsLeft(!isLeft);
  };

  const overlayClass = `overlay ${isLeft ? "move-right" : "move-left"}`;
  const leftText = isLeft ? "ТЕКСТ4" : "ТЕКСТ2";
  const rightText = isLeft ? "ТЕКСТ3" : "ТЕКСТ1";

  return (
    <div className="App2">
      <div className="buttons">
        <button onClick={handleToggle}>
          {isLeft ? "Move Left" : "Move Right"}
        </button>
      </div>
      <h2>Toggle Overlay</h2>
      <div className="container">
        <div className="text-container">
          <div className="left-text">
            {!isLeft ? <RightSideDesc /> : <SignIn />}
          </div>
          <div className={overlayClass}></div>
          <div className="right-text">{rightText}</div>
        </div>
      </div>
    </div>
  );
};

export default Overlay;

const RightSideDesc = () => {
  return <>RIGHTSIDEDESC</>;
};
