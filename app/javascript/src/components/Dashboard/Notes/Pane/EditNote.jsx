import React from "react";

import { Pane, Typography, Toastr } from "neetoui";

import { EDIT_FORM_VALUES } from "./constants";
import Form from "./Form";

const EditNote = ({ showPane, setShowPane }) => {
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
        note={EDIT_FORM_VALUES}
        handleNote={handleNote}
      />
    </Pane>
  );
};

export default EditNote;
