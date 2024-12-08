function ProductCategoryRow({ category }) {
  return (
    <tr className="categoryRow">
      <th colSpan={2}>{category}</th>
    </tr>
  );
}

export default ProductCategoryRow;
