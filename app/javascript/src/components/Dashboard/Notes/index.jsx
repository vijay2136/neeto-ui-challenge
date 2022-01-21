import React, { useState } from "react";

import { Container } from "neetoui/layouts";

import Header from "components/Common/Header";
import Menubar from "components/Common/Menubar";

import Card from "./Card";
import { NOTES_DATA } from "./constants";
import CreateNote from "./Pane/CreateNote";

const Notes = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [showNewNotePane, setShowNewNotePane] = useState(false);

  return (
    <>
      <Menubar showMenu={showMenu} title="Notes" />
      <Container>
        <Header
          title="Notes"
          setShowMenu={setShowMenu}
          setShowPane={setShowNewNotePane}
          showMenu={showMenu}
        />
        <div className="w-full space-y-4">
          {NOTES_DATA.map(note => (
            <Card key={note.id} note={note} />
          ))}
        </div>
        <CreateNote
          showPane={showNewNotePane}
          setShowPane={setShowNewNotePane}
        />
      </Container>
    </>
  );
};

export default Notes;
