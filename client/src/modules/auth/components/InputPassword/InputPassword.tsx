import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-regular-svg-icons";
import { ChangeEvent, useState } from "react";
import "./InputPassword.css";

type InputPasswordType = {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const InputPassword = ({ value, onChange }: InputPasswordType) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  return (
    <div className="label">
      <input
        type={isPasswordVisible ? "text" : "password"}
        name="password"
        placeholder="Password"
        value={value}
        onChange={onChange}
        className="formInput"
      />
      <button type="button" onClick={togglePasswordVisibility} className="icon">
        <FontAwesomeIcon
          size="lg"
          icon={isPasswordVisible ? faEye : faEyeSlash}
        />
      </button>
    </div>
  );
};

export default InputPassword;
