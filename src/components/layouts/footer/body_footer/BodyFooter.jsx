// Import Style File
import "./body_footer.scss";

// Import Components
import Sociallinks from "../../../common/social-links/Sociallinks";

// Import React Icons
import { FiPhoneCall } from "react-icons/fi";
import { BsEnvelope } from "react-icons/bs";
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

// Import Link
import { Link } from "react-router-dom";

function BodyFooter() {
  return (
    <div className="body-footer">
      <div className="container">
        <div className="box need-help">
          <h4 className="title">Do you need help?</h4>

          <p className="description">
            Autoseligen syr. Nek diarask fröbomba. Nör antipol kynoda nynat.
            Pressa fåmoska.
          </p>

          <div className="info phone">
            <FiPhoneCall className="icon" />

            <div className="details">
              <span>Monday-Friday: 08am-9pm</span>

              <span>0 800 300-353</span>
            </div>
          </div>

          <div className="info email">
            <BsEnvelope className="icon" />

            <div className="details">
              <span>Need help with your order?</span>

              <span>info@example.com</span>
            </div>
          </div>
        </div>

        <div className="box money">
          <h4 className="title">Make Money with Us</h4>

          <ul className="links">
            <li>
              <Link to="">Sell on Grogin</Link>
            </li>

            <li>
              <Link to="">Sell Your Services on Grogin</Link>
            </li>

            <li>
              <Link to="">Sell on Grogin Business</Link>
            </li>

            <li>
              <Link to="">Sell Your Apps on Grogin</Link>
            </li>

            <li>
              <Link to="">Become an Affilate</Link>
            </li>

            <li>
              <Link to="">Advertise Your Products</Link>
            </li>

            <li>
              <Link to="">Sell-Publish with Us</Link>
            </li>

            <li>
              <Link to="">Become an Blowwe Vendor</Link>
            </li>
          </ul>
        </div>

        <div className="box help-you">
          <h4 className="title">Let Us Help You</h4>

          <ul className="links">
            <li>
              <Link to="">Accessibility Statement</Link>
            </li>

            <li>
              <Link to="">Your Orders</Link>
            </li>

            <li>
              <Link to="">Returns & Replacements</Link>
            </li>

            <li>
              <Link to="">Shipping Rates & Policies</Link>
            </li>

            <li>
              <Link to="">Refund and Returns Policy</Link>
            </li>

            <li>
              <Link to="">Privacy Policy</Link>
            </li>

            <li>
              <Link to="">Terms and Conditions</Link>
            </li>

            <li>
              <Link to="">Cookie Settings</Link>
            </li>

            <li>
              <Link to="">Help Center</Link>
            </li>
          </ul>
        </div>

        <div className="box know-us">
          <h4 className="title">Get to Know Us</h4>

          <ul className="links">
            <li>
              <Link to="">Careers for Grogin</Link>
            </li>

            <li>
              <Link to="">About Grogin</Link>
            </li>

            <li>
              <Link to="">Inverstor Relations</Link>
            </li>

            <li>
              <Link to="">Grogin Devices</Link>
            </li>

            <li>
              <Link to="">Customer reviews</Link>
            </li>

            <li>
              <Link to="">Social Responsibility</Link>
            </li>

            <li>
              <Link to="">Social Responsibility</Link>
            </li>

            <li>
              <Link to="">Store Locations</Link>
            </li>
          </ul>
        </div>

        <div className="box app">
          <h4 className="title">Download our app</h4>

          <div className="apps-box">
            <Link className="app-box">
              <FaGooglePlay className="icon" />

              <div className="spans">
                <span>Get it on</span>

                <span>Google Play</span>
              </div>
            </Link>

            <Link className="app-box">
              <FaApple className="icon" />

              <div className="spans">
                <span>Download on the</span>

                <span>Apple Store</span>
              </div>
            </Link>
          </div>

          <Sociallinks />
        </div>
      </div>
    </div>
  );
}

export default BodyFooter;
