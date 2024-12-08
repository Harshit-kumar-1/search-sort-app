import SearchBar from './SearchBar.jsx';
import ProductTable from "./ProductTable.jsx";
import { useState } from 'react';


function FilterableProductTable({ products, error, loading}) {
  const [filterText, setFilterText] = useState("");
  const [isStockOnly, setIsStockOnly] = useState(false);

  return (
    <div className="container">
      <h1 className="title">Inventory</h1>
      <SearchBar
        filterText={filterText}
        isStockOnly={isStockOnly}
        onFilterTextChange={setFilterText}
        onIsStockOnlyChange={setIsStockOnly}
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        products && (
          <ProductTable
            products={products}
            filterText={filterText}
            isStockOnly={isStockOnly}
          />
        )
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default FilterableProductTable;