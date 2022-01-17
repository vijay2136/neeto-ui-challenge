import React, { useState } from "react";

import { Form, Formik } from "formik";
import { Button } from "neetoui/v2";
import { Input } from "neetoui/v2/formik";

import { LOGIN_PATH, SIGNUP_PATH } from "components/routeConstants";

import {
  RESET_PASSWORD_FORM_INITIAL_VALUES,
  RESET_PASSWORD_FORM_VALIDATION_SCHEMA,
} from "./constants";

const ResetPassword = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="flex flex-row items-center justify-center w-screen h-screen p-6 overflow-x-hidden overflow-y-auto bg-gray-100">
      <div className="flex flex-col items-center justify-center w-full h-full mx-auto sm:max-w-md">
        <h2 className="mb-5 text-3xl font-extrabold text-center text-gray-800">
          Forgot your password?
        </h2>
        <div className="w-2/3 mb-5 -mt-4 text-center text-gray-700">
          Enter your email address below and we&apos;ll send you a link to reset
          your password.
        </div>
        <Formik
          initialValues={RESET_PASSWORD_FORM_INITIAL_VALUES}
          validateOnBlur={submitted}
          validateOnChange={submitted}
          onSubmit={() => null}
          validationSchema={RESET_PASSWORD_FORM_VALIDATION_SCHEMA}
        >
          <Form
            className="w-full p-8 space-y-6 bg-white border rounded-md shadow"
            id="new_user"
          >
            <Input name="email" label="Email" type="email" required />
            <div className="flex flex-col items-center justify-center space-y-2">
              <Button
                fullWidth
                type="submit"
                onClick={() => {
                  setSubmitted(true);
                }}
                label="Send reset password email"
                data-disable-with="Send reset password email"
                className="h-8"
              />
              <Button label="Back" style="link" to={LOGIN_PATH} />
            </div>
          </Form>
        </Formik>
        <div className="flex flex-row items-center justify-start mt-4 space-x-1">
          <p className="font-normal text-gray-600">{`Don't have an account?`}</p>
          <Button label="Signup" style="link" to={SIGNUP_PATH} />
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
