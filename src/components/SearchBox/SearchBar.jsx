import css from './SearchBar.module.css';

const SearchBar = ({ value, onFilter }) => {
  return (
    <div className={css.searchBar}>
      <label className={css.label}>
        Find contacts by name or number
        <input
          className={css.input}
          type="text"
          value={value}
          onChange={e => onFilter(e.target.value)}
        />
      </label>
    </div>
  );
};

export default SearchBar;
