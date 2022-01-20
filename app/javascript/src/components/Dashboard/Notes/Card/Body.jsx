import React from "react";

import { MenuVertical } from "neetoicons";
import { Typography, Dropdown } from "neetoui";

const Body = ({ title, description }) => {
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
          <li>Edit</li>
          <li>Delete</li>
        </Dropdown>
      </div>
      <Typography style="body2">{description}</Typography>
    </div>
  );
};

export default Body;
