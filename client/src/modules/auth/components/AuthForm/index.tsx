import { Formik, Form } from "formik";
import { IconsContainer } from "..";
import { signInSchema } from "../../utils/auth.schema";

const AuthForm = () => {
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
            <div style={{ marginBottom: "10px" }}>
              <h1>Sign in</h1>
              <IconsContainer />
              <p>or use your account</p>
            </div>

            <div
              className="input-container"
              style={{
                marginBottom: "24px",
              }}
            >
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
                <p className="validation-error">{errors.email}</p>
              )}
            </div>

            <div
              className="input-container"
              style={{
                marginBottom: "10px",
              }}
            >
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
                <p className="validation-error">{errors.password}</p>
              )}
            </div>

            <a className="password-link" href="#">
              Forgot your password?
            </a>
            <button
              type="submit"
              disabled={
                !values.email ||
                !values.password ||
                !!errors.email ||
                !!errors.password
              }
            >
              Sign In
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AuthForm;
