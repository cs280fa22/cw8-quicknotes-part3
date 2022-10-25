import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import { Routes, Route } from "react-router-dom";
import Edit from "./pages/Edit";
import Home from "./pages/Home";

function App() {
  const [notes, setNotes] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fakeNotes = [];
    for (let index = 0; index < 5; index++) {
      fakeNotes.push({
        id: faker.datatype.uuid(),
        title: faker.lorem.sentence(),
        text: faker.lorem.paragraph(),
      });
    }
    setNotes(fakeNotes);
  }, []);

  const remove = (id) => {
    setNotes((notes) => notes.filter((note) => note.id !== id));
  };

  const add = () => {
    const note = {
      title: "New note title",
      text: "New note text",
    };

    setNotes((notes) => [...notes, note]);

    return note;
  };

  const edit = (id, title, text) => {
    setNotes((notes) =>
      notes.map((note) => {
        if (note.id !== id) {
          return note;
        } else {
          return { id, title, text };
        }
      })
    );
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            notes={notes}
            query={query}
            setQuery={setQuery}
            add={add}
            remove={remove}
          />
        }
      />
      <Route path="/edit" element={<Edit edit={edit} remove={remove} />} />
    </Routes>
  );
}

export default App;
