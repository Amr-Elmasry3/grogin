// Import Style File
import "./top_footer.scss";

// Import Components
import MyInput from "../../../common/my_input/MyInput";

// Import Link
import { Link } from "react-router-dom";

function TopFooterUi({ emailValue, handleEmailValue }) {
  return (
    <div className="top-footer">
      <div className="container">
        <div className="newsletter">
          <p>Join our newsletter for £10 offs</p>

          <p>
            Register now to get latest updates on promotions & coupons.Don’t
            worry, we not spam!
          </p>
        </div>

        <div className="subscribe">
          <div className="box">
            <MyInput
              type="text"
              value={emailValue}
              name="searchValue"
              placholder="Enter your email address"
              handleChange={handleEmailValue}
            />

            <button>Send</button>
          </div>

          <p>
            By subscribing you agree to our{" "}
            <Link to=""> Terms & Conditions and Privacy & Cookies Policy.</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default TopFooterUi;
