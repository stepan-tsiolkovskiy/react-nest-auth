import React, { ChangeEvent } from "react";
import { IconsContainer, InputEmail, InputPassword } from "..";

function SignUp() {
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
      <form onSubmit={handleOnSubmit}>
        <h1>Sign up</h1>
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

export default SignUp;
