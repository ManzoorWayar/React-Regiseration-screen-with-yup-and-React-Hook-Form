import * as yup from "yup";

const Schema = yup.object().shape({
  firstName: yup.string().required("FirstName is required!"),
  lastName: yup.string().required("LastName is required!"),
  email: yup
    .string()
    .email("Email is not valid")
    .required("Email is required!"),
  password: yup
    .string()
    .min(8, "password must be at least 8 chars")
    .max(32)
    .required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match"),
});

export default Schema;
