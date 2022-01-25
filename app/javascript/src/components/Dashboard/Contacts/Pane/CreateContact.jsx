import React from "react";

import { Pane, Typography, Toastr } from "neetoui";

import { INITIAL_FORM_VALUES } from "./constants";
import Form from "./Form";

const CreateContact = ({ showPane, setShowPane }) => {
  const onClose = () => setShowPane(false);
  const handleCreate = () => {
    Toastr.success("Contact has been added successfully");
    setShowPane(false);
  };

  return (
    <Pane isOpen={showPane} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          Add New Contact
        </Typography>
      </Pane.Header>
      <Form
        onClose={onClose}
        contact={INITIAL_FORM_VALUES}
        handleSubmit={handleCreate}
      />
    </Pane>
  );
};

export default CreateContact;
