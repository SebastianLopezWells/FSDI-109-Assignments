import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./navBar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import StoreContext from "../store/storeContext";
const NavBar = () => {
  const cart = useContext(StoreContext).cart;
  const getNumItems = () => {
    let total = 0;

    //Count the number of products in cart array
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].quantity;
    }
    return total;
  };

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Catalog">
                Catalog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/List">
                Shopping List
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about-me">
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin">
                Admin
              </Link>
            </li>
          </ul>

          <Link className="btn btn-dark" to="/cart" id="Cart">
            {getNumItems()} &nbsp;View Cart
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
