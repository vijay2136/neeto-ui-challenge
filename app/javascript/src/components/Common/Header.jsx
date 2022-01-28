import React, { useState } from "react";

import { Button } from "neetoui";
import { Header as NeetoHeader } from "neetoui/layouts";

const Header = ({ title, setShowMenu, setShowPane }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <NeetoHeader
      title={`All ${title}`}
      menuBarToggle={() => setShowMenu(prev => !prev)}
      actionBlock={
        <Button
          onClick={() => setShowPane(true)}
          label={`Add New ${title}`}
          icon="ri-add-line"
        />
      }
      searchProps={{
        value: searchTerm,
        onChange: e => setSearchTerm(e.target.value),
      }}
    />
  );
};

export default Header;
