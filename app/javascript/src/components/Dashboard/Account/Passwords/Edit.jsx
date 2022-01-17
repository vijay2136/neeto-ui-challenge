import React, { useState } from "react";

import { Form, Formik } from "formik";
import { Button } from "neetoui/v2";
import { Input } from "neetoui/v2/formik";
import { Container, Header } from "neetoui/v2/layouts";

import registrationsApi from "apis/registrations";

import {
  CHANGE_PASSWORD_FORM_INITIAL_VALUES,
  CHANGE_PASSWORD_FORM_VALIDATION_SCHEMA,
  CHANGE_PASSWORD_FORM_INPUT_ATTRIBUTES,
} from "../constants";

const Edit = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async data => {
    try {
      setLoading(true);
      await registrationsApi.updatePassword(data);
    } catch (error) {
      logger.error(error);
    } finally {
      setLoading(false);
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
          validateOnBlur={submitted}
          validateOnChange={submitted}
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
              fullWidth
              name="submit"
              type="submit"
              label="Update"
              className="h-8"
              loading={loading}
              onClick={() => {
                setSubmitted(true);
              }}
            />
          </Form>
        </Formik>
      </div>
    </Container>
  );
};

export default Edit;
