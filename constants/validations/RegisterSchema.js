import * as yup from "yup";
export const RegisterSchema = yup.object({
  email: yup
    .string()
    .email()
    .required("required field")
    .min(6, "Email must be valid"),
  username: yup
    .string()
    .required("required field")
    .min(6, "username too short"),
  password: yup
    .string()
    .required("required field")
    .min(8, "password too short"),
  confirm_password: yup
    .string()
    .required("required field")
    .min(8, "password too short"),
});
