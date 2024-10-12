import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGooglePlusG,
  faLinkedinIn,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import "./index.css";

const IconsContainer = () => {
  return (
    <div className="social-container">
      <a href="#" className="social">
        <FontAwesomeIcon icon={faGooglePlusG} />
      </a>
      <a href="#" className="social">
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
      <a href="#" className="social">
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
    </div>
  );
};

export default IconsContainer;
