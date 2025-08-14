// Import Style File
import "./quick_links.scss";

// Import Link
import { Link } from "react-router-dom";

// Import React Icons
import { MdKeyboardArrowDown } from "react-icons/md";

function QuickLinksUi({ languages, handleLanguage, currency, handleCurrency }) {
  return (
    <div className="quick-links">
      <div className="container">
        <div className="links">
          <Link to="/about-us" className="link">
            About Us
          </Link>

          <Link to="/wishlist" className="link">
            Wishlist
          </Link>

          <Link to="/compare" className="link">
            Compare
          </Link>
        </div>

        <p className="delivery-time">
          We deliver to you every day from <span>7:00 to 23:00</span>
        </p>

        <div className="left-section">
          <div className="box language">
            <div
              className="head"
              onClick={() => {
                handleLanguage();
              }}
            >
              <span className="current-value">{languages.langNow}</span>

              <MdKeyboardArrowDown className="icon" />
            </div>

            <ul className={`list ${languages.openList ? "open" : ""}`}>
              {languages.data.map((item) => {
                return (
                  <li
                    key={item.id}
                    className={`${item.active ? "active" : null}`}
                    onClick={() => {
                      handleLanguage(item.id, item.lang);
                    }}
                  >
                    {item.lang}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="box currency">
            <div
              className="head"
              onClick={() => {
                handleCurrency();
              }}
            >
              <span className="current-value">{currency.currNow}</span>

              <MdKeyboardArrowDown className="icon" />
            </div>

            <ul className={`list ${currency.openList ? "open" : ""}`}>
              {currency.data.map((item) => {
                return (
                  <li
                    key={item.id}
                    className={`${item.active ? "active" : null}`}
                    onClick={() => {
                      handleCurrency(item.id, item.curr);
                    }}
                  >
                    {item.curr}
                  </li>
                );
              })}
            </ul>
          </div>

          <Link to="" className="tracking-link">
            Order Tracking
          </Link>
        </div>
      </div>
    </div>
  );
}

export default QuickLinksUi;
