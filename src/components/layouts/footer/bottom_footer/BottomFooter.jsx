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
            loading="lazy"
          />

          <img
            src="https://klbtheme.com/grogin/wp-content/uploads/2025/01/payment2.svg"
            alt="master-card..."
            loading="lazy"
          />

          <img
            src="https://klbtheme.com/grogin/wp-content/uploads/2025/01/payment3.svg"
            alt="paypal..."
            loading="lazy"
          />

          <img
            src="https://klbtheme.com/grogin/wp-content/uploads/2025/01/payment4.svg"
            alt="skrill..."
            loading="lazy"
          />

          <img
            src="https://klbtheme.com/grogin/wp-content/uploads/2025/01/payment5.svg"
            alt="klarna..."
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default BottomFooter;
