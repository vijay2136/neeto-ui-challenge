import React from "react";

import { Form, Formik } from "formik";
import { Button, Toastr } from "neetoui/v2";
import { Input } from "neetoui/v2/formik";
import { Container, Header } from "neetoui/v2/layouts";
import * as yup from "yup";

import registrationsApi from "apis/registrations";

const Edit = () => {
  const validationSchema = yup.object({
    currentPassword: yup.string().required("Current password is required"),
    password: yup.string().required("New password is required"),
    passwordConfirmation: yup
      .string()
      .required("Password confirmation is required")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });

  const formikInputAttrs = {
    type: "password",
    "aria-required": "true",
    placeholder: "******",
  };

  const handleSubmit = async data => {
    try {
      await registrationsApi.updatePassword({
        user: {
          current_password: data.currentPassword,
          password: data.password,
          password_confirmation: data.passwordConfirmation,
        },
      });
      Toastr.success("Password updated successfully");
    } catch (error) {
      logger.error(error);
    }
  };

  return (
    <Container>
      <Header title="Change Password" className="border-b border-gray-200" />
      <div className="flex flex-col items-center justify-center w-full h-full mx-auto sm:max-w-md">
        <Formik
          initialValues={{
            currentPassword: "",
            password: "",
            passwordConfirmation: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="w-full p-8 space-y-6 bg-white border rounded-lg shadow-sm">
            <Input
              {...formikInputAttrs}
              name="currentPassword"
              label="Current password"
            />
            <Input {...formikInputAttrs} name="password" label="New password" />
            <Input
              {...formikInputAttrs}
              name="passwordConfirmation"
              label="Confirm password"
            />
            <Button
              name="submit"
              type="submit"
              label="Update"
              className="h-8"
              fullWidth
            />
          </Form>
        </Formik>
      </div>
    </Container>
  );
};

export default Edit;
