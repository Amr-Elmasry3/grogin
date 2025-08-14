// Import Style file
import "./bottom_footer.scss";

function BottomFooter() {
  return (
    <div className="bottom-footer">
      <div className="container">
        <p>© 2025 Grogin. All rights reserved.</p>

        <div className="payments">
          <img
            src="https://klbtheme.com/grogin/wp-content/uploads/2025/01/payment.svg"
            alt="visa..."
          />

          <img
            src="https://klbtheme.com/grogin/wp-content/uploads/2025/01/payment2.svg"
            alt="master-card..."
          />

          <img
            src="https://klbtheme.com/grogin/wp-content/uploads/2025/01/payment3.svg"
            alt="paypal..."
          />

          <img
            src="https://klbtheme.com/grogin/wp-content/uploads/2025/01/payment4.svg"
            alt="skrill..."
          />

          <img
            src="https://klbtheme.com/grogin/wp-content/uploads/2025/01/payment5.svg"
            alt="klarna..."
          />
        </div>
      </div>
    </div>
  );
}

export default BottomFooter;
