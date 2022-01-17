import React, { useState } from "react";

import { Form, Formik } from "formik";
import { Button } from "neetoui/v2";
import { Input } from "neetoui/v2/formik";
import { Container, Header } from "neetoui/v2/layouts";

import { useUserState } from "contexts/user";

import { PROFILE_FORM_VALIDATION_SCHEMA } from "./constants";
import { buildProfileFormInitialValues } from "./utils";

const Profile = () => {
  const [submitted, setSubmitted] = useState(false);
  const { user } = useUserState();

  return (
    <Container>
      <Header title="My Profile" className="border-b border-gray-200" />
      <div className="flex flex-col items-center justify-center w-full h-full mx-auto sm:max-w-md">
        <Formik
          initialValues={buildProfileFormInitialValues(user)}
          onSubmit={() => {}}
          validateOnBlur={submitted}
          validateOnChange={submitted}
          validationSchema={PROFILE_FORM_VALIDATION_SCHEMA}
        >
          <Form className="w-full p-8 space-y-6 bg-white border rounded-lg shadow-sm">
            <Input required name="email" label="Email" type="email" />
            <Input required name="firstName" label="First Name" />
            <Input required name="lastName" label="Last name" />
            <Input
              required
              name="password"
              label="Current password"
              type="password"
            />
            <Button
              fullWidth
              type="submit"
              onClick={() => {
                setSubmitted(true);
              }}
              label="Update"
              className="h-8"
            />
          </Form>
        </Formik>
      </div>
    </Container>
  );
};

export default Profile;
