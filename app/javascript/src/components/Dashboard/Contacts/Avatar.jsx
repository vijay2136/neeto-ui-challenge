import React from "react";

import { Avatar as NeetoAvatar, Typography } from "neetoui";

const Avatar = ({ user }) => {
  return (
    <div className="flex items-center space-x-2">
      <NeetoAvatar size="large" user={user} />
      <div>
        <Typography style="h5">{user.name}</Typography>
        <Typography style="body3" className="text-gray-500">
          Owner
        </Typography>
      </div>
    </div>
  );
};

export default Avatar;
