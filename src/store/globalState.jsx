import StoreContext from "./storeContext";
import { useState } from "react";

const GlobalState = (props) => {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState([]);

  const addToCart = (prod) => {
    console.log("Adding to cart", prod);
    // add product to cart
    // create a copy, mod copy, set the copy
    console.log("SOMETHING", prod);
    let copy = [...cart];

    let exist = false;
    for (let i = 0; i < cart.length; i++) {
      let item = cart[i];
      if (item._id === prod._id) {
        exist = true;
        item.quantity += prod.quantity;
      }
    }

    if (!exist) {
      copy.push(prod);
    }

    setCart(copy);
  };
  const removeFromCart = () => {};

  return (
    <StoreContext.Provider
      value={{
        cart: cart,
        user: user,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};

export default GlobalState;
