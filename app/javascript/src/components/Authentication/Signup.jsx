import React, { useState } from "react";

import { Form, Formik } from "formik";
import { Button } from "neetoui/v2";
import { Input } from "neetoui/v2/formik";
import PropTypes from "prop-types";

import authenticationApi from "apis/authentication";
import { LOGIN_PATH } from "components/routeConstants";

import {
  SIGNUP_FORM_INITIAL_VALUES,
  SIGNUP_FORM_VALIDATION_SCHEMA,
} from "./constants";

const Signup = ({ history }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async formData => {
    try {
      await authenticationApi.signup(formData);
      history.push(LOGIN_PATH);
    } catch (error) {
      logger.error(error);
    }
  };

  return (
    <div className="flex flex-row items-center justify-center w-screen h-screen p-6 overflow-x-hidden overflow-y-auto bg-gray-100">
      <div className="flex flex-col items-center justify-center w-full h-full mx-auto sm:max-w-md">
        <h2 className="mb-5 text-3xl font-extrabold text-center text-gray-800">
          Signup
        </h2>
        <Formik
          initialValues={SIGNUP_FORM_INITIAL_VALUES}
          validateOnBlur={submitted}
          validateOnChange={submitted}
          onSubmit={handleSubmit}
          validationSchema={SIGNUP_FORM_VALIDATION_SCHEMA}
        >
          {({ isSubmitting }) => (
            <Form className="w-full p-8 space-y-6 bg-white border rounded-md shadow">
              <Input
                required
                name="email"
                type="email"
                label="Email"
                placeholder="oliver@example.com"
              />
              <Input
                required
                name="firstName"
                type="text"
                label="First name"
                placeholder="Sam"
              />
              <Input
                required
                name="lastName"
                type="text"
                placeholder="Smith"
                label="Last name"
              />
              <Input
                required
                name="password"
                type="password"
                label="Password"
                placeholder="******"
              />
              <Input
                required
                name="passwordConfirmation"
                type="password"
                label="Confirm password"
                placeholder="******"
              />
              <Button
                fullWidth
                type="submit"
                onClick={() => setSubmitted(true)}
                className="h-8"
                loading={isSubmitting}
                disabled={isSubmitting}
                label="Signup"
              />
            </Form>
          )}
        </Formik>
        <div className="flex flex-row items-center justify-start mt-4 space-x-1">
          <p className="font-normal text-gray-600">Already have an account?</p>
          <Button label="Login" style="link" to={LOGIN_PATH} />
        </div>
      </div>
    </div>
  );
};

Signup.propTypes = {
  history: PropTypes.object,
};

export default Signup;
