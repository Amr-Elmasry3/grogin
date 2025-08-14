function FreeShipping({ subTotal }) {
  return (
    <div className={`cart-free-shipping ${subTotal >= 100 ? "done" : ""}`}>
      <p>
        Add
        <span>
          ${100 - subTotal >= 0 ? (100 - subTotal).toFixed(2) : "0.00"}
        </span>
        to cart and get free shipping!
      </p>

      <div className="shipping-progress">
        <span style={{ width: `${subTotal}%` }}></span>
      </div>
    </div>
  );
}

export default FreeShipping;
