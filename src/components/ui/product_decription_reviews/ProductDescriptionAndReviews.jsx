// Import Style File
import "./product_description_reviews.scss";

// Import React Lazy
import React, { Suspense } from "react";

// Import Components
import Progress from "../../common/Progress";
const ProductDescription = React.lazy(() =>
  import("./product_description/ProductDescription")
);
const ProductReviews = React.lazy(() =>
  import("./product_reviews/ProductReviews")
);

// Import Hooks
import { useState } from "react";

// Import Custom Hooks
import { useFetch } from "../../../hooks/useFetch";

function ProductDescriptionAndReviews({ id }) {
  const { data, isLoading } = useFetch("data.json");

  const [tapsState, setTagsState] = useState({
    data: [
      { id: 1, tap: "Description", active: true },
      { id: 2, tap: "Reviews", active: false },
    ],

    tapNow: "Description",
  });

  const handleTapsState = (id, title) => {
    const newTapsState = { ...tapsState };

    newTapsState.tapNow = title;

    newTapsState.data.map((item) => {
      return item.id === id ? (item.active = true) : (item.active = false);
    });

    setTagsState(newTapsState);
  };

  return (
    <div className="product-description-reviews">
      <div className="taps">
        {tapsState.data.map((item) => {
          return (
            <h3
              className={`tap-title ${item.active ? "active" : ""}`}
              key={item.id}
              onClick={() => {
                handleTapsState(item.id, item.tap);
              }}
            >
              {item.tap}
            </h3>
          );
        })}
      </div>

      {tapsState.tapNow === "Description" ? (
        <Suspense fallback={<Progress height="200px" />}>
          <ProductDescription
            product={data ? data.products[id - 1] : null}
            isLoading={isLoading}
          />
        </Suspense>
      ) : tapsState.tapNow === "Reviews" ? (
        <Suspense fallback={<Progress height="200px" />}>
          <ProductReviews
            product={data ? data.products[id - 1] : null}
            isLoading={isLoading}
          />
        </Suspense>
      ) : (
        ""
      )}
    </div>
  );
}

export default ProductDescriptionAndReviews;
