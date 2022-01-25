import React from "react";

import { Formik, Form as FormikForm } from "formik";
import { Button, Pane } from "neetoui";
import { Input, Select } from "neetoui/formik";

import { VALIDATION_SCHEMA, ROLE_OPTIONS } from "./constants";

const Form = ({ onClose, contact, handleSubmit }) => {
  return (
    <Formik
      initialValues={contact}
      onSubmit={handleSubmit}
      validationSchema={VALIDATION_SCHEMA}
    >
      {({ isSubmitting }) => (
        <FormikForm className="w-full">
          <Pane.Body>
            <div className="space-y-8 w-full">
              <div className="flex space-x-6">
                <Input
                  label="First Name*"
                  name="firstName"
                  size="large"
                  placeholder="Enter first name"
                />
                <Input
                  label="Last Name*"
                  name="lastName"
                  size="large"
                  placeholder="Enter last name"
                />
              </div>
              <Input
                label="Email Address*"
                name="email"
                size="large"
                placeholder="Enter your email address"
              />
              <Select
                isClearable
                label="Role*"
                name="role"
                options={ROLE_OPTIONS}
                placeholder="Select Role"
              />
            </div>
          </Pane.Body>
          <Pane.Footer>
            <Button
              type="submit"
              label="Save Changes"
              size="large"
              style="primary"
              className="mr-3"
              disabled={isSubmitting}
              loading={isSubmitting}
            />
            <Button
              onClick={onClose}
              label="Cancel"
              size="large"
              style="text"
            />
          </Pane.Footer>
        </FormikForm>
      )}
    </Formik>
  );
};

export default Form;
