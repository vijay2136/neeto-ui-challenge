import React, { useState } from "react";

import { Formik, Form } from "formik";
import { Button, Pane } from "neetoui";
import { Input, Textarea, Select } from "neetoui/formik";

import formValidationSchemas from "constants/formValidationSchemas";

import { ASSIGNED_CONTACT_OPTIONS, TAGS_OPTIONS } from "../constants";

const NoteForm = ({ isEdit = false, onClose, note, handleCreate }) => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setSubmitted(true);
    handleCreate();
  };

  return (
    <Formik
      initialValues={note}
      onSubmit={handleSubmit}
      validateOnBlur={submitted}
      validateOnChange={submitted}
      validationSchema={formValidationSchemas.notesForm}
    >
      {({ isSubmitting }) => (
        <Form className="w-full">
          <Pane.Body>
            <div className="space-y-8 w-full">
              <Input
                label="Title*"
                name="title"
                size="large"
                placeholder="Enter note title"
              />
              <Textarea
                label="Description*"
                name="description"
                placeholder="Enter note description"
              />
              <Select
                isClearable
                label="Assigned Contact*"
                name="contact"
                options={ASSIGNED_CONTACT_OPTIONS}
                placeholder="Select Role"
              />
              <Select
                isClearable
                label="Tags*"
                name="tags"
                options={TAGS_OPTIONS}
                placeholder="Select Tags"
              />
            </div>
          </Pane.Body>
          <Pane.Footer>
            <Button
              type="submit"
              label={isEdit ? "Update" : "Save Changes"}
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
        </Form>
      )}
    </Formik>
  );
};

export default NoteForm;
