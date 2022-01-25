import * as yup from "yup";

export default {
  loginForm: yup.object().shape({
    email: yup.string().email("Invalid email address").required("Required"),
    password: yup.string().required("Required"),
  }),
  resetPasswordForm: yup.object().shape({
    email: yup.string().email("Invalid email address").required("Required"),
  }),
  signupForm: yup.object().shape({
    email: yup.string().email("Invalid email address").required("Required"),
    firstName: yup.string().required("Required"),
    lastName: yup.string().required("Required"),
    password: yup.string().required("Required"),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("Required"),
  }),
  profileForm: yup.object().shape({
    email: yup.string().email("Invalid email address").required("Required"),
    firstName: yup.string().required("Required"),
    lastName: yup.string().required("Required"),
    password: yup.string().required("Required"),
  }),
};
