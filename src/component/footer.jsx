import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <h3>Some Shop</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <ul className="socialMedia">
          <li>
            <a href="#">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-tiktok"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>Some Shop &copy; 2022. Designed by Sebastian L. W.</p>
      </div>
    </div>
  );
};

export default Footer;
