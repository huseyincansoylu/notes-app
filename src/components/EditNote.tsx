import NoteForm from "../components/NoteForm";
import { NoteData, Tag } from "../types";
import { useNote } from "./NoteLayout";

type EditNoteProps = {
  onSubmit: (id: string, data: NoteData) => void;
  onnAddTag: (tag: Tag) => void;
  availableTags: Tag[];
};

function EditNote({ onSubmit, onnAddTag, availableTags }: EditNoteProps) {
  const note = useNote();

  return (
    <>
      <h2 className="mb-4">New Note</h2>
      <NoteForm
        title={note.title}
        markdown={note.markdown}
        tag={note.tags}
        onSubmit={(data) => onSubmit(note.id, data)}
        onnAddTag={onnAddTag}
        availableTags={availableTags}
      />
    </>
  );
}

export default EditNote;
