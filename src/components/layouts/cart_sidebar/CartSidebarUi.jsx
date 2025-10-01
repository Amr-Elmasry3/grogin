// Import Style File
import "./cart_sidebar.scss";

// Import Components
import CloseIcon from "../../common/close_icon/CloseIcon";
import EmptyBox from "../../common/empty_box/EmptyBox";

// Import Link
import { Link } from "react-router-dom";

function CartSidebarUi({
  cart,
  removeProduct,
  isOpen,
  handleClick,
  isLogin,
  checkLogin,
}) {
  return (
    <div className={`cart-sidebar ${isOpen ? "open" : ""}`}>
      <div className="cart-head">
        <span>Shopping Cart</span>

        <CloseIcon
          func={() => {
            handleClick();
          }}
        />
      </div>

      <div className="free-shipping">
        <p>
          Add
          <span>
            $
            {100 - cart.subTotal >= 0
              ? (100 - cart.subTotal).toFixed(2)
              : "0.00"}
          </span>
          to cart and get free shipping!
        </p>
      </div>

      <div className="cart-body">
        {[...cart.products].length ? (
          <>
            {cart.products.map((item) => {
              return (
                <div className="product" key={item.id}>
                  <div className="remove">
                    <CloseIcon
                      func={() => {
                        removeProduct(item, "cart");
                      }}
                    />
                  </div>

                  <div className="img-box">
                    <img
                      src={item.images[0]}
                      alt={`img${item.id}...`}
                      loading="lazy"
                    />
                  </div>

                  <div className="details">
                    <p className="title">{item.name}</p>

                    <p className="price">
                      {item.discount ? (
                        <>
                          $
                          {(
                            item.price -
                            item.price * (item.discount / 100)
                          ).toFixed(2)}
                        </>
                      ) : (
                        item.price
                      )}
                      <span className="count">x{item.count}</span>
                    </p>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <EmptyBox page="cart" />
        )}
      </div>

      <div className="cart-footer">
        <p className="sub-total">
          Subtotal: <span>${cart.subTotal.toFixed(2)}</span>
        </p>

        <div className="btns-box">
          <Link to="/cart" onClick={handleClick}>
            <button className="cart-btn">View Cart</button>
          </Link>

          {isLogin ? (
            <Link to="/checkout" onClick={handleClick}>
              <button className="checkout-btn">Chceckout</button>
            </Link>
          ) : (
            <button
              className="checkout-btn"
              onClick={() => {
                checkLogin();
                handleClick();
              }}
            >
              Chceckout
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default CartSidebarUi;
