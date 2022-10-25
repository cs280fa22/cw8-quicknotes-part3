import { Input } from "@mantine/core";
import { IconSearch } from "@tabler/icons";
import PropTypes from "prop-types";

function Search(props) {
  const { query, setQuery } = props;

  const handleOnChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <Input
      icon={<IconSearch />}
      placeholder="Your search query"
      value={query}
      onChange={handleOnChange}
    />
  );
}

export default Search;

Search.propTypes = {
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
};
