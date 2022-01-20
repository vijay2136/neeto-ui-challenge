import React from "react";

import { Clock } from "neetoicons";
import { Typography, Avatar, Tag, Tooltip } from "neetoui";

function Footer({ action, tag, time, img }) {
  return (
    <div className="flex justify-between items-center py-4">
      <Tag color="grey" className="text-gray-500 bg-gray-50" label={tag} />
      <div className="flex items-center space-x-2">
        <Clock size={16} />
        <Tooltip position="bottom-start" content="Wednesday, 10.30AM">
          <Typography className="text-gray-500" style="body2">
            {action} {time}
          </Typography>
        </Tooltip>

        <Avatar size="small" user={{ imageUrl: img }} />
      </div>
    </div>
  );
}

export default Footer;
