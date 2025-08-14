// Import Style File
import "./other_links.scss";

// Import Link
import { Link } from "react-router-dom";

// Import Components
import Categories from "../../../common/categories/Categories";
import ProductCard from "../../../common/product_card/ProductCard";

function OtherLinksUi({
  links,
  handleLinksState,
  products,
  isLoading,
  trending,
  handleTrendingPro,
  almost,
  handleAlmostPro,
}) {
  return (
    <div className="other-links">
      <div className="container">
        <div
          style={{
            display:
              window.location.pathname === "/grogin/shop" ? "none" : "block",
          }}
        >
          <Categories />
        </div>

        <div className="main-links">
          {links.map((item) => {
            return (
              <Link
                to={item.link}
                className={`link ${item.active ? "active" : ""}`}
                key={item.id}
                onClick={() => {
                  handleLinksState(item.id);
                }}
              >
                {item.title}
              </Link>
            );
          })}
        </div>

        <div className="products-category">
          <p
            onMouseEnter={() => {
              handleTrendingPro(true);
            }}
            onMouseLeave={() => {
              handleTrendingPro(false);
            }}
          >
            Trending Products
          </p>

          <p
            onMouseEnter={() => {
              handleAlmostPro(true);
            }}
            onMouseLeave={() => {
              handleAlmostPro(false);
            }}
          >
            Almost Finished <span className="sale">sale</span>
          </p>

          <div
            className="products-box"
            style={{ display: trending || almost ? "flex" : "none" }}
            onMouseEnter={() => {
              trending ? handleTrendingPro(true) : handleAlmostPro(true);
            }}
            onMouseLeave={() => {
              trending ? handleTrendingPro(false) : handleAlmostPro(false);
            }}
          >
            {isLoading ? (
              <span>Loading</span>
            ) : (
              <>
                {products ? (
                  <>
                    {products.map((item) => {
                      return (
                        <div className="box" key={item.id}>
                          <ProductCard product={item} />
                        </div>
                      );
                    })}
                  </>
                ) : (
                  ""
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OtherLinksUi;
