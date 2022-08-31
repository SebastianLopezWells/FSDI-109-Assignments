import "./Cart.css";

import { useContext } from "react";
import StoreContext from "react";
const Cart = () => {
  const cart = useContext(StoreContext).cart;
  return (
    <div>
      <h1>Your cart</h1>
      <h5>We have {cart.length} items ready for you</h5>

      <ul>
        {cart.map((prod) => (
          <li key={prod._id}>{prod._id}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
