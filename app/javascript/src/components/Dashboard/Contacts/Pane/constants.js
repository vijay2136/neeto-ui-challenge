import * as yup from "yup";

const VALIDATION_SCHEMA = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  role: yup.object().required("Role is required").nullable(),
});

const INITIAL_FORM_VALUES = {
  firstName: "",
  lastName: "",
  email: "",
  role: "",
};

const ROLE_OPTIONS = [
  {
    label: "ROLE 1",
    value: "role1",
  },
  {
    label: "ROLE 2",
    value: "role2",
  },
  {
    label: "ROLE 3",
    value: "role3",
  },
  {
    label: "ROLE 4",
    value: "role4",
  },
];

export { VALIDATION_SCHEMA, INITIAL_FORM_VALUES, ROLE_OPTIONS };
