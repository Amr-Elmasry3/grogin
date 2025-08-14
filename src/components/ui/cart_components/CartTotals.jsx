// Import Components
import Button from "../../common/button/Button";

// Import Link
import { Link } from "react-router-dom";

function CartTotals({ subTotal }) {
  return (
    <div className="cart-totals">
      <span className="title">Cart Totals</span>

      <div className="details">
        <div className="box">
          <span className="key">Cart Subtotal</span>

          <span className="value">{subTotal.toFixed(2)}</span>
        </div>

        <div className="box">
          <span className="key">Shiping</span>

          <span className="value">${subTotal >= 100 ? 25 : 0}</span>
        </div>

        <div className="box">
          <span className="key">Total</span>

          <span className="value">
            $
            {subTotal >= 100 ? (subTotal - 20).toFixed(2) : subTotal.toFixed(2)}
          </span>
        </div>
      </div>

      <div className="cart-totals-btns">
        <Link to="/shop">
          <Button btnTitle="Shopping" />
        </Link>

        <Link to="/checkout">
          <Button btnTitle="CheckOut" />
        </Link>
      </div>
    </div>
  );
}

export default CartTotals;
