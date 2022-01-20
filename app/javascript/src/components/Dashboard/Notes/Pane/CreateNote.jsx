import React from "react";

import { Pane, Typography, Toastr } from "neetoui";

import formInitialValues from "constants/formInitialValues";

import Form from "./Form";

const NewNotePane = ({ showPane, setShowPane }) => {
  const onClose = () => setShowPane(false);
  const handleCreate = () => {
    Toastr.success("Note has been added successfully");
    setShowPane(false);
  };

  return (
    <Pane isOpen={showPane} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          Add New Note
        </Typography>
      </Pane.Header>
      <Form
        onClose={onClose}
        note={formInitialValues.notesForm}
        handleCreate={handleCreate}
      />
    </Pane>
  );
};

export default NewNotePane;
