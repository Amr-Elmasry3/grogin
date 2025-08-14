// Import Style File
import "./cart.scss";

// Import Components
import FreeShipping from "../../components/ui/cart_components/FreeShipping";
import CartTable from "../../components/ui/cart_components/CartTable";
import CartTotals from "../../components/ui/cart_components/CartTotals";

// Import Redux Hooks
import { useSelector } from "react-redux";

function Cart() {
  const cart = useSelector((store) => {
    return store.cart;
  });

  return (
    <div className="cart-page">
      <div className="container">
        <FreeShipping subTotal={cart.subTotal} />

        <CartTable products={cart.products} />

        <CartTotals subTotal={cart.subTotal} />
      </div>
    </div>
  );
}

export default Cart;
