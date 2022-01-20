import React, { useState } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Button } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import EmptyState from "components/Common/EmptyState";
import Menubar from "components/Common/Menubar";

import Card from "./Card";
import { NOTES_DATA } from "./constants";
import NewNotePane from "./Pane/CreateNote";

const Notes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showMenu, setShowMenu] = useState(true);
  const [showNewNotePane, setShowNewNotePane] = useState(false);

  return (
    <>
      <Menubar showMenu={showMenu} title="Notes" />
      <Container>
        <Header
          title="All Notes"
          menuBarToggle={() => setShowMenu(prev => !prev)}
          actionBlock={
            <Button
              onClick={() => setShowNewNotePane(true)}
              label="Add New Note"
              icon="ri-add-line"
            />
          }
          searchProps={{
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
          }}
        />
        {NOTES_DATA.length ? (
          <div className="w-full space-y-4">
            {NOTES_DATA.map(note => (
              <Card key={note.id} note={note} />
            ))}
          </div>
        ) : (
          <EmptyState
            image={EmptyNotesListImage}
            title="Looks like you don't have any notes!"
            subtitle="Add your notes to send customized emails to them."
            primaryActionLabel="Add New Note"
          />
        )}
        <NewNotePane
          showPane={showNewNotePane}
          setShowPane={setShowNewNotePane}
        />
      </Container>
    </>
  );
};

export default Notes;
