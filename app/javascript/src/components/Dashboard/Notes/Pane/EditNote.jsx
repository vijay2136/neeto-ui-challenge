import React from "react";

import { Pane, Typography, Toastr } from "neetoui";

import formInitialValues from "constants/formInitialValues";

import Form from "./Form";

const EditNotePane = ({ showPane, setShowPane }) => {
  const onClose = () => setShowPane(false);
  const handleNote = () => {
    Toastr.success("Note has been updated successfully");
    setShowPane(false);
  };

  return (
    <Pane isOpen={showPane} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          Edit Note
        </Typography>
      </Pane.Header>
      <Form
        isEdit
        onClose={onClose}
        note={formInitialValues.editNotes}
        handleNote={handleNote}
      />
    </Pane>
  );
};

export default EditNotePane;
