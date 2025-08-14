// Import Components
import Button from "../../common/button/Button";

// Import Link
import { Link } from "react-router-dom";

function Orders() {
  return (
    <div className="orders">
      <div className="head">
        <h4 className="title">
          Your <span>Orders</span>
        </h4>
      </div>
      <div className="cover">
        <p>
          No order has been made yet.{" "}
          <Link to="/shop">
            <Button btnTitle="Browse Products" />
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Orders;
