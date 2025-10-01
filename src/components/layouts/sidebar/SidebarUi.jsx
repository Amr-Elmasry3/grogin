// Import Style File
import "./sidebar.scss";

// Import Components
import CloseIcon from "../../common/close_icon/CloseIcon";
import Search from "../../common/search/Search";
import PlaceDelivery from "../../common/place_delivery/PlaceDelivery";
import Categories from "../../common/categories/Categories";

// Import Link
import { Link } from "react-router-dom";

function SidebarUi({ isOpen, handleClickCloseIcon, isLogin }) {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-header">
        <img
          src="https://klbtheme.com/grogin/wp-content/uploads/2023/11/grogin-logo-dark.png"
          alt="Logo..."
          loading="lazy"
        />

        <CloseIcon func={handleClickCloseIcon} />
      </div>

      <Search closeSidebar={handleClickCloseIcon} />

      <PlaceDelivery />

      <Categories closeSidebar={handleClickCloseIcon} />

      <div className="links">
        <Link to="/" onClick={handleClickCloseIcon}>
          Home
        </Link>

        <Link to="/about-us" onClick={handleClickCloseIcon}>
          About Us
        </Link>

        <Link to="/shop" onClick={handleClickCloseIcon}>
          Shop
        </Link>

        <Link to="/blogs" onClick={handleClickCloseIcon}>
          Blogs
        </Link>

        <Link to="/contact-us" onClick={handleClickCloseIcon}>
          Contact Us
        </Link>

        <Link to="/compare" onClick={handleClickCloseIcon}>
          Compare
        </Link>

        <Link
          to={`${isLogin ? "/user-account" : "/login-register"}`}
          onClick={handleClickCloseIcon}
        >
          {isLogin ? "Account" : "Sign In"}
        </Link>
      </div>
    </div>
  );
}

export default SidebarUi;
