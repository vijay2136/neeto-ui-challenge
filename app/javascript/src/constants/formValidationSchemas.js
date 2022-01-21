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
  notesForm: yup.object().shape({
    title: yup.string().required("Title is required"),
    description: yup.string().required("Description is required"),
    contact: yup.object().required("Assigned contact is required").nullable(),
    tags: yup.object().required("Tags is required").nullable(),
  }),
  contactsForm: yup.object().shape({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    email: yup
      .string()
      .email("Invalid email address")
      .required("Email is required"),
    role: yup.object().required("Role is required").nullable(),
  }),
};
