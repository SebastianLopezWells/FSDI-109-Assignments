import "./CatalogInCart.css";

const CatalogInCart = (props) => {
  return (
    <tr>
      <th scope="row">{props.number + 1}</th>
      <td>{props.data.title}</td>
      <td>${props.data.price.toFixed(2)}</td>
      <td>{props.data.brand}</td>
      <td>{props.data.category}</td>
      <td>
        <img src={props.data.image} alt="product" />
      </td>
      <td>{props.data.quantity}</td>
    </tr>
  );
};

export default CatalogInCart;
