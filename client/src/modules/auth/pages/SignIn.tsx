import React, { ChangeEvent } from "react";
import { IconsContainer, InputEmail, InputPassword } from "../components";
import "./index.css";

function SignIn({ type }: any) {
  const [state, setState] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value,
    });
  };

  const handleOnSubmit = (evt: any) => {
    evt.preventDefault();

    const { email, password } = state;
    alert(`You are login with email: ${email} and password: ${password}`);

    for (const key in state) {
      setState({
        ...state,
        [key]: "",
      });
    }
  };

  return (
    <div className="form-container sign-in-container">
      <h5 style={{ color: "black" }}>{`type${type}`}</h5>
      <form onSubmit={handleOnSubmit}>
        <h1>{type === "signIn" ? "Sign in" : "Sign up23423423432"}</h1>
        <IconsContainer />
        <span>or use your account</span>
        <InputEmail value={state.email} onChange={handleChange} />
        <InputPassword value={state.password} onChange={handleChange} />
        <a href="#">Forgot your password?</a>
        <button>Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;
