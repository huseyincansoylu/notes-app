import "bootstrap/dist/css/bootstrap.min.css";
import { useMemo } from "react";
import { Container } from "react-bootstrap";
import { Navigate, Route, Routes } from "react-router-dom";
import { useLocalStorage } from "./hook/useLocalStorage";
import NewNote from "./pages/NewNote";
import { NoteData, RawNote, Tag } from "./types";
import { v4 as uuidV4 } from "uuid";

function App() {
  const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", []);
  const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", []);

  const noteWithTags = useMemo(() => {
    return notes.map((note) => {
      return {
        ...note,
        tags: tags.filter((tag) => note.tagsId.includes(tag.id)),
      };
    });
  }, [notes, tags]);

  function onCreateNote({ tags, ...data }: NoteData) {
    setNotes((prev) => {
      return [
        ...prev,
        { ...data, id: uuidV4(), tagsId: tags.map((t) => t.id) },
      ];
    });
  }

  return (
    <Container className="mt-4">
      <Routes>
        <Route path="/" element={<div>hey</div>} />
        <Route path="/new" element={<NewNote />} />
        <Route path="/:id">
          <Route index element={<h1>show</h1>} />
          <Route path="edit" element={<h1>Edit</h1>} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  );
}

export default App;
