// Import Style File
import "./logo_section.scss";

// Import Components
import PlaceDelivery from "../../../common/place_delivery/PlaceDelivery";
import Search from "../../../common/search/Search";

// Import React Icons
import { RiMenu2Fill } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { GrCart } from "react-icons/gr";

// Import Link
import { Link } from "react-router-dom";

function LogoSectionUi({
  handleClickMenu,
  countCart,
  countWishlist,
  handleClickCart,
  isLogin,
}) {
  return (
    <div className="logo-section">
      <div className="container">
        <div
          className="menu"
          onClick={() => {
            handleClickMenu();
          }}
        >
          <RiMenu2Fill className="icon" />
        </div>

        <div className="logo">
          <img
            src="https://klbtheme.com/grogin/wp-content/uploads/2023/11/grogin-logo-dark.png"
            alt="logo..."
          />
        </div>

        <PlaceDelivery />

        <Search />

        <div className="user-links">
          <Link
            to={`${isLogin ? "/user-account" : "/login-register"}`}
            className="account"
          >
            <FaRegUser className="icon" />

            <span>{isLogin ? "Account" : "Sign in"}</span>
          </Link>

          <Link to="/wishlist" className="wishlist">
            <FaRegHeart className="icon" />

            <span className="count">{countWishlist}</span>
          </Link>

          <div
            className="cart"
            onClick={() => {
              handleClickCart();
            }}
          >
            <GrCart className="icon" />

            <span className="count">{countCart}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogoSectionUi;
