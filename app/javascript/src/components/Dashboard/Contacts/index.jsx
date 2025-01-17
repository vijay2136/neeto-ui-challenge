import React, { useState } from "react";

import { MenuHorizontal } from "neetoicons";
import { Table, Pagination, Dropdown } from "neetoui";
import { Container } from "neetoui/layouts";

import DeleteAlert from "components/Common/DeleteAlert";
import Header from "components/Common/Header";
import Menubar from "components/Common/Menubar";

import { CONTACTS, COLUMNS } from "./constants";
import CreateContact from "./Pane/CreateContact";

const Contacts = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [showCreateContactPane, setShowCreateContactPane] = useState(false);
  const onClose = () => {
    setShowDeleteAlert(false);
  };
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
          <li onClick={() => setShowDeleteAlert(true)}>Delete</li>
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
        <Header
          title="Contacts"
          setShowMenu={setShowMenu}
          setShowPane={setShowCreateContactPane}
        />
        <div className="h-screen w-full space-y-8">
          <Table
            fixedHeight
            columnData={COLUMN_DATA}
            rowData={CONTACTS}
            className="overflow-hidden odd:bg-gray-100"
          />
          <div className="flex justify-end">
            <Pagination count={1000} pageNo={3} pageSize={100} />
          </div>
        </div>
      </Container>
      <DeleteAlert
        onClose={onClose}
        showDeleteAlert={showDeleteAlert}
        title="Contact"
      />
      <CreateContact
        showPane={showCreateContactPane}
        setShowPane={setShowCreateContactPane}
      />
    </>
  );
};

export default Contacts;
