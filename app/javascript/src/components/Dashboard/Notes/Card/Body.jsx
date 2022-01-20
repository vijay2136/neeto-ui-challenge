import React, { useState } from "react";

import { MenuVertical } from "neetoicons";
import { Typography, Dropdown } from "neetoui";

import EditNotePane from "components/Dashboard/Notes/Pane/EditNote";

const Body = ({ title, description, setShowDeleteAlert }) => {
  const [showEditNotePane, setShowEditPane] = useState(false);
  const handleDelete = () => {
    setShowDeleteAlert(true);
  };
  const handleEdit = () => {
    setShowEditPane(true);
  };

  return (
    <div className="space-y-2 py-4">
      <div className="flex justify-between">
        <Typography style="h4">{title}</Typography>
        <Dropdown
          buttonProps={{
            icon: MenuVertical,
          }}
          buttonStyle="text"
          position="bottom-end"
        >
          <li onClick={handleEdit}>Edit</li>
          <li onClick={handleDelete}>Delete</li>
        </Dropdown>
      </div>
      <Typography style="body2">{description}</Typography>
      <EditNotePane setShowPane={setShowEditPane} showPane={showEditNotePane} />
    </div>
  );
};

export default Body;
