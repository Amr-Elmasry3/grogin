// Import Style File
import "./card_actions.scss";

// Import React Icons
import { FaRegHeart } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import { RiShoppingBag4Line } from "react-icons/ri";
import { VscGitCompare } from "react-icons/vsc";

// Import Link
import { Link } from "react-router-dom";

function CardActionsUi({ product, checkProduct, addProduct, removeProduct }) {
  return (
    <div className="card-actions">
      <div
        className={`action-box ${
          checkProduct(product.id, "wishlist") ? "added" : ""
        }`}
        onClick={() => {
          if (checkProduct(product.id, "wishlist")) {
            removeProduct(product, "wishlist");
          } else {
            addProduct(product, "wishlist");
          }
        }}
      >
        <FaRegHeart className="icon heart" />
      </div>

      <Link to={`/product-details/${product.id}`} className="action-box">
        <FaRegEye className="icon eye" />
      </Link>

      <div
        className={`action-box ${
          checkProduct(product.id, "compare") ? "added" : ""
        }`}
        onClick={() => {
          if (checkProduct(product.id, "compare")) {
            removeProduct(product, "compare");
          } else {
            addProduct(product, "compare");
          }
        }}
      >
        <VscGitCompare className="icon compare" />
      </div>

      <div
        className={`action-box ${
          checkProduct(product.id, "cart") ? "added" : ""
        }`}
        onClick={() => {
          if (checkProduct(product.id, "cart")) {
            removeProduct(product, "cart");
          } else {
            addProduct(product, "cart");
          }
        }}
      >
        <RiShoppingBag4Line className="icon Cart" />
      </div>
    </div>
  );
}

export default CardActionsUi;
