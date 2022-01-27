import * as yup from "yup";

export const INITIAL_VALUES = {
  login: {
    email: "",
    password: "",
  },
  resetPassword: {
    email: "",
  },
  signup: {
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    passwordConfirmation: "",
  },
};

export const VALIDATION_SCHEMAS = {
  login: yup.object().shape({
    email: yup.string().email("Invalid email address").required("Required"),
    password: yup.string().required("Required"),
  }),
  resetPassword: yup.object().shape({
    email: yup.string().email("Invalid email address").required("Required"),
  }),
  signup: yup.object().shape({
    email: yup.string().email("Invalid email address").required("Required"),
    firstName: yup.string().required("Required"),
    lastName: yup.string().required("Required"),
    password: yup.string().required("Required"),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("Required"),
  }),
};
