import * as yup from "yup";

const ASSIGNED_CONTACT_OPTIONS = [
  {
    label: "User One",
    value: "1",
  },
  {
    label: "User Two",
    value: "2",
  },
  {
    label: "User Three",
    value: "3",
  },
  {
    label: "User Four",
    value: "4",
  },
];

const TAGS_OPTIONS = [
  {
    label: "Getting Started",
    value: "category1",
  },
  {
    label: "Onboarding",
    value: "category2",
  },
  {
    label: "User Flow",
    value: "category3",
  },
  {
    label: "UX",
    value: "category4",
  },
  {
    label: "Bugs",
    value: "category5",
  },
  {
    label: "V2",
    value: "category6",
  },
];

const INITIAL_FORM_VALUES = {
  title: "",
  description: "",
  contact: "",
  tags: "",
};

const EDIT_FORM_VALUES = {
  title: "How to claim the warranty?",
  description:
    '"Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn\'t getting',
  contact: {
    label: "User One",
    value: "User One",
  },
  tags: {
    label: "Getting Started",
    value: "Getting Started",
  },
};

const VALIDATION_SCHEMA = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  contact: yup.object().required("Assigned contact is required").nullable(),
  tags: yup.object().required("Tags is required").nullable(),
});

export {
  VALIDATION_SCHEMA,
  ASSIGNED_CONTACT_OPTIONS,
  TAGS_OPTIONS,
  EDIT_FORM_VALUES,
  INITIAL_FORM_VALUES,
};
