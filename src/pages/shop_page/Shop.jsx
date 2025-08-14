// Import Style File
import "./shop.scss";

// Import Components
import ShopFilter from "../../components/ui/shop_filter/ShopFilter";
import ShopContent from "../../components/ui/shop_content/ShopContent";
import ErrorBoundary from "../../components/error_boundary/ErrorBoundary";

function Shop() {
  return (
    <div className="shop-page">
      <div className="container">
        <ErrorBoundary>
          <ShopFilter />
        </ErrorBoundary>

        <ErrorBoundary>
          <ShopContent />
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default Shop;
