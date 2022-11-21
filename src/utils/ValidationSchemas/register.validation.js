import * as Yup from "yup";

export const registerValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please provide a valid email address")
    .required("Please provide a valid email address"),
  password: Yup.string().required("Please provide your password"),
});
