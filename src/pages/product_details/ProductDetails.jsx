// Import Components
import ProductInfo from "../../components/ui/product_info/ProductInfo";
import ProductDescriptionAndReviews from "../../components/ui/product_decription_reviews/ProductDescriptionAndReviews";
import NewArrivals from "../../components/ui/new_arrivals/NewArrivals";

// Import Hooks
import { useParams } from "react-router";

function ProductDetails() {
  const { id } = useParams();

  return (
    <div className="product-details-page">
      <div className="container">
        <ProductInfo id={id} />

        <ProductDescriptionAndReviews id={id} />

        <NewArrivals url="data.json" />
      </div>
    </div>
  );
}

export default ProductDetails;
