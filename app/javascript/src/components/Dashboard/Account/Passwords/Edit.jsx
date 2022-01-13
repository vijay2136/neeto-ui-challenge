import React from "react";

import { Form, Formik } from "formik";
import { Button, Toastr } from "neetoui/v2";
import { Input } from "neetoui/v2/formik";
import { Container, Header } from "neetoui/v2/layouts";

import registrationsApi from "apis/registrations";

import {
  CHANGE_PASSWORD_FORM_INITIAL_VALUES,
  CHANGE_PASSWORD_FORM_VALIDATION_SCHEMA,
  CHANGE_PASSWORD_FORM_INPUT_ATTRIBUTES,
} from "../constants";

const Edit = () => {
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
          initialValues={CHANGE_PASSWORD_FORM_INITIAL_VALUES}
          validationSchema={CHANGE_PASSWORD_FORM_VALIDATION_SCHEMA}
          onSubmit={handleSubmit}
        >
          <Form className="w-full p-8 space-y-6 bg-white border rounded-lg shadow-sm">
            <Input
              {...CHANGE_PASSWORD_FORM_INPUT_ATTRIBUTES}
              name="currentPassword"
              label="Current password"
            />
            <Input
              {...CHANGE_PASSWORD_FORM_INPUT_ATTRIBUTES}
              name="password"
              label="New password"
            />
            <Input
              {...CHANGE_PASSWORD_FORM_INPUT_ATTRIBUTES}
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
