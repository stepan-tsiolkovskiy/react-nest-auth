import { Formik, Form } from "formik";
import { IconsContainer } from "..";
import { signInSchema } from "../../utils/auth.schema";

function SignIn() {
  const initialValues = {
    email: "",
    password: "",
  };

  const handleOnSubmit = (values: { email: string; password: string }) => {
    const { email, password } = values;
    alert(`You are logging in with email: ${email} and password: ${password}`);
  };

  return (
    <div className="form-container sign-in-container">
      <Formik
        initialValues={initialValues}
        validationSchema={signInSchema}
        onSubmit={handleOnSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <Form onSubmit={handleSubmit}>
            <h1>Sign in</h1>
            <IconsContainer />
            <span>or use your account</span>

            <div>
              <input
                id="email"
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="Please enter your email"
                className="formInput"
              />
              {touched.email && errors.email && (
                <p className="validation-error" style={{ color: "red" }}>
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <input
                id="password"
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder="Please enter your password"
                className="formInput"
              />
              {touched.password && errors.password && (
                <p className="validation-error" style={{ color: "red" }}>
                  {errors.password}
                </p>
              )}
            </div>

            <a href="#">Forgot your password?</a>
            <button type="submit">Sign In</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default SignIn;
