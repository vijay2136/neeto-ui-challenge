import React, { useState } from "react";

import { Container } from "neetoui/layouts";

import Header from "components/Common/Header";
import Menubar from "components/Common/Menubar";

const Contacts = () => {
  const [showMenu, setShowMenu] = useState(true);

  return (
    <>
      <Menubar showMenu={showMenu} title="Contacts" />
      <Container>
        <Header title="Contacts" setShowMenu={setShowMenu} />
      </Container>
    </>
  );
};

export default Contacts;
