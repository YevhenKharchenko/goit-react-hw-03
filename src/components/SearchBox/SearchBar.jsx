const SearchBar = ({ value, onFilter }) => {
  return (
    <label>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={e => onFilter(e.target.value)}
      />
    </label>
  );
};

export default SearchBar;
