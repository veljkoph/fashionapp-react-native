import * as yup from "yup";
export const LoginSchema = yup.object({
  username: yup
    .string()
    .required("required field")
    .min(6, "username too short"),
  password: yup
    .string()
    .required("required field")
    .min(8, "password too short"),
});
