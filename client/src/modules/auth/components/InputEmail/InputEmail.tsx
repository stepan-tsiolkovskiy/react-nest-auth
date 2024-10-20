import { ChangeEvent } from "react";

type InputEmailType = {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const InputEmail = ({ value, onChange }: InputEmailType) => (
  <input
    type="email"
    placeholder="Email"
    name="email"
    value={value}
    onChange={onChange}
    className="formInput"
  />
);

export default InputEmail;
