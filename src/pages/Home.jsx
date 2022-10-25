import { Container } from "@mantine/core";
import Notes from "../components/Notes";
import Header from "../components/Header";
import PropTypes from "prop-types";

function Home(props) {
  const { notes, query, setQuery, add, remove } = props;

  return (
    <Container>
      <Header query={query} setQuery={setQuery} add={add} />
      <Notes notes={notes} query={query} remove={remove} />
    </Container>
  );
}

export default Home;

Home.propTypes = {
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
  add: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
};
