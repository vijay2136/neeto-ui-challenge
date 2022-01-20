import React from "react";

import { Alert, Toastr } from "neetoui";

const DeleteAlert = ({ onClose, showDeleteAlert }) => {
  const handleDelete = () => {
    Toastr.success("Note was deleted successfully");
    onClose();
  };

  return (
    <Alert
      isOpen={showDeleteAlert}
      onSubmit={handleDelete}
      onClose={onClose}
      message="Are you sure you want to continue? This cannot be undone."
      title="Delete Note"
    />
  );
};

export default DeleteAlert;
