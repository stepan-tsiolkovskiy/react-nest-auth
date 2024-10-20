import * as Yup from "yup";
import { PASSWORD_MIN_LENGTH } from "../constants/authConstants";
import { AuthErrors } from "../constants/errors";

export const signInSchema =  Yup.object().shape({
  email: Yup.string()
  .required(AuthErrors.REQUIRED_EMAIL)
  .email(AuthErrors.INVALID_EMAIL),
  password: Yup.string()
    .required(AuthErrors.REQUIRED_PASSWORD)
    .min(PASSWORD_MIN_LENGTH, AuthErrors.SHORT_PASSWORD)
});