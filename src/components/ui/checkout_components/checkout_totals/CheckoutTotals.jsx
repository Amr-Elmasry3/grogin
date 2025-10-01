// Import Style File
import "./checkout_totals.scss";

// Import Components
import EmptyBox from "../../../common/empty_box/EmptyBox";

function CheckoutTotals({ cart }) {
  return (
    <div className="cart-totals">
      <h1 className="title">Cart Totals</h1>

      <div className="cart-totals-content">
        <div className="cart-totals-head">
          <span>Products</span>

          <span>Total</span>
        </div>

        <div className="cart-totals-body">
          {[...cart.products].length ? (
            <>
              {cart.products.map((item) => {
                return (
                  <div className="product-box" key={item.id}>
                    <div className="product-img">
                      <img
                        src={item.images[0]}
                        alt={`img${item.id}...`}
                        loading="lazy"
                      />
                    </div>

                    <div className="info">
                      <span className="name">{item.name}</span>

                      <span className="count">x{item.count}</span>
                    </div>

                    <span className="total">
                      $
                      {(
                        item.count *
                        (item.price - item.price * (item.discount / 100))
                      ).toFixed(2)}
                    </span>
                  </div>
                );
              })}
            </>
          ) : (
            <EmptyBox page="checkout" />
          )}
        </div>

        <div className="cart-totals-footer">
          <div className="box">
            <span className="key">SubTotal</span>

            <span className="value">${cart.subTotal}</span>
          </div>

          <div className="box">
            <span className="key">Shipping</span>

            <span className="value">${cart.subTotal >= 100 ? 30 : 0}</span>
          </div>

          <div className="box">
            <span className="key">Total</span>

            <span className="value">
              $
              {cart.subTotal >= 100
                ? (cart.subTotal - 30).toFixed(2)
                : cart.subTotal}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutTotals;
