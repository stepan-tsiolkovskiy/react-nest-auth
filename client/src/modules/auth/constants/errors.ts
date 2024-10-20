import { PASSWORD_MIN_LENGTH } from "./authConstants";

export const AuthErrors = {
  REQUIRED_EMAIL: "Email is a required field",
  INVALID_EMAIL: "Invalid email format",
  REQUIRED_PASSWORD: "Password is a required field",
  SHORT_PASSWORD: `Password must be at least ${PASSWORD_MIN_LENGTH} characters`
}