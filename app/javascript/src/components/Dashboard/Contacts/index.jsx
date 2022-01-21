import React, { useState } from "react";

import { MenuHorizontal } from "neetoicons";
import { Table, Pagination, Dropdown } from "neetoui";
import { Container } from "neetoui/layouts";

import Header from "components/Common/Header";
import Menubar from "components/Common/Menubar";

import { CONTACTS, COLUMNS } from "./constants";

const Contacts = () => {
  const [showMenu, setShowMenu] = useState(true);
  const COLUMN_DATA = [
    ...COLUMNS,
    {
      render: () => (
        <Dropdown
          buttonProps={{ MenuHorizontal }}
          buttonStyle="text"
          position="bottom-end"
        >
          <li>Edit</li>
          <li>Delete</li>
        </Dropdown>
      ),
      className: "text-right",
      width: "10%",
    },
  ];

  return (
    <>
      <Menubar showMenu={showMenu} title="Contacts" />
      <Container>
        <Header title="Contacts" setShowMenu={setShowMenu} />
        <div className="h-screen w-full space-y-8">
          <Table
            className="overflow-hidden odd:bg-gray-100"
            fixedHeight
            columnData={COLUMN_DATA}
            rowData={CONTACTS}
          />
          <div className="flex justify-end">
            <Pagination count={1000} pageNo={3} pageSize={100} />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contacts;
