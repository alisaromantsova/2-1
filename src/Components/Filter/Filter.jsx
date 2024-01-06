const Filter = ({ onFilterChange, filter }) => {
  return <input type="text" name="filter" required value={filter} onChange={(e) => onFilterChange(e)} />;
};
export default Filter;
