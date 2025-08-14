// Import Style file
import "./checkout.scss";

// Import Components
import CheckoutTotals from "../../components/ui/checkout_components/checkout_totals/CheckoutTotals";
import CheckoutForm from "../../components/ui/checkout_components/checkout_form/CheckoutForm";

// Import Redux Hooks
import { useSelector } from "react-redux";

function Checkout() {
  const cart = useSelector((store) => {
    return store.cart;
  });

  return (
    <div className="checkout-page">
      <div className="container">
        <CheckoutForm />

        <CheckoutTotals cart={cart} />
      </div>
    </div>
  );
}

export default Checkout;
