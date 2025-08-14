// Import Style File
import "./product_card.scss";

// Import Compoents
import CardActions from "./card_actions/CardActions";

// Import Matrial Ui Components
import Rating from "@mui/material/Rating";

// Import Link
import { Link } from "react-router-dom";

function ProductCard({ product, children }) {
  return (
    <div className="product-card">
      {product.discount ? (
        <span className="discount">{product.discount}%</span>
      ) : (
        ""
      )}

      <div className="img-box">
        <img src={product.images[0]} alt={`img${product.id}`} />

        <CardActions product={product} />

        {product.badge ? (
          <span className={`badge ${product.badge.replace(" ", "-")}`}>
            {product.badge}
          </span>
        ) : (
          ""
        )}
      </div>

      <div className="details">
        <Link to={`/product-details/${product.id}`} className="name">
          {product.name}
        </Link>

        <div className="rate-box">
          <Rating
            name="read-only"
            value={product.rate}
            readOnly
            style={{ fontSize: "16px" }}
          />

          <span className="count">{product.reviews.count}</span>
        </div>

        <div className="price-box">
          <p className="new-price">
            $
            {product.discount ? (
              <>
                {(
                  product.price -
                  product.price * (product.discount / 100)
                ).toFixed(2)}
                <span className="old-price">${product.price}</span>
              </>
            ) : (
              product.price
            )}
          </p>
        </div>

        {children ? children : ""}
      </div>
    </div>
  );
}

export default ProductCard;
