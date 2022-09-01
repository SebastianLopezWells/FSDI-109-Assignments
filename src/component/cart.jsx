import "./Cart.css";

import { useContext } from "react";
import StoreContext from "../store/storeContext";
import CatalogInCart from "./CatalogInCart";
import Footer from "./footer";

const Cart = () => {
  const cart = useContext(StoreContext).cart;

  const getTotal = () => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].price * cart[i].quantity;
    }

    return total;
  };

  return (
    <div className="cart">
      <h1>Your cart</h1>
      <h5>You have {cart.length} item(s) in your cart.</h5>

      <div className="cartContainer">
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Brand</th>
              <th scope="col">Category</th>
              <th scope="col">Photo</th>
              <th scope="col">Quantity</th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
            {cart.map((prod, index = 0) => (
              <CatalogInCart
                key={prod._id}
                data={prod}
                number={index++}
              ></CatalogInCart>
            ))}
          </tbody>
        </table>

        <div className="TotalPrice">
          <h5>Your Total: ${getTotal().toFixed(2)}</h5>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
