import React from "react";
import NoteForm from "../components/NoteForm";
import { NoteData, Tag } from "../types";

type newNoteProps = {
  onSubmit: (data: NoteData) => void;
  onnAddTag: (tag: Tag) => void;
  availableTags: Tag[];
};

function NewNote({ onSubmit, onnAddTag, availableTags }: newNoteProps) {
  return (
    <>
      <h2 className="mb-4">New Note</h2>
      <NoteForm
        onSubmit={onSubmit}
        onnAddTag={onnAddTag}
        availableTags={availableTags}
      />
    </>
  );
}

export default NewNote;
