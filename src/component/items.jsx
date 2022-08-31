import "./items.css";
import QuantityPicker from "./quantityPicker";
import { useState, useContext } from "react";
import StoreContext from "../store/storeContext";
const Item = (props) => {
  const [quantity, setQuantity] = useState(1);
  const addToCart = useContext(StoreContext).addToCart;

  const handleAddClick = () => {
    //creat a copy of the object props.dta
    let prodForCart = { ...props.data, quantity: quantity };
    //add quantity to the copy
    //send copy to cart

    addToCart(prodForCart);
  };
  const onQuantityChange = (quantity) => {
    console.log("quantity changed", quantity);
    setQuantity(quantity);
  };

  return (
    <div className="item">
      <img src={"/images/" + props.data.image}></img>
      <h3>{props.data.title}</h3>
      <label>Category: {props.data.category}</label>
      <label>Price: {props.data.price.toFixed(2)}</label>
      <QuantityPicker
        className="picker"
        onChange={onQuantityChange}
      ></QuantityPicker>
      <div>
        <label>Total: ${(props.data.price * quantity).toFixed(2)}</label>

        <button
          id="addButton"
          className="btn btn-success"
          onClick={handleAddClick}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Item;
