function SearchBar({
  filterText,
  isStockOnly,
  onFilterTextChange,
  onIsStockOnlyChange,
}) {
  return (
    <form className="searchBar">
      <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={(e) => onFilterTextChange(e.target.value)}
        className="searchInput"
      />
      <label className="checkboxLabel">
        <input
          type="checkbox"
          checked={isStockOnly}
          onChange={(e) => onIsStockOnlyChange(e.target.checked)}
          name="stocked"
          id="stocked"
        />
        Only show products in stock
      </label>
    </form>
  );
}


export default SearchBar;