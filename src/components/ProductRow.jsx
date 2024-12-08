function ProductRow({ product }) {
  const name = product.stocked ? (
    product.name
  ) : (
    <span className="outOfStock">{product.name}</span>
  );
  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

export default ProductRow;
