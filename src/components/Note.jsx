import PropTypes from "prop-types";
import { Accordion } from "@mantine/core";
import NoteControl from "./NoteControl";

function Note(props) {
  const { note, remove } = props;

  return (
    <Accordion.Item value={note.title}>
      <NoteControl note={note} remove={remove} />
      <Accordion.Panel>{note.text}</Accordion.Panel>
    </Accordion.Item>
  );
}

export default Note;

Note.propTypes = {
  remove: PropTypes.func.isRequired,
  note: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
};
