// Import Style File
import "./featured_products.scss";

// Import Components
import MainHeading from "../../common/main_heading/MainHeading";
import ProductCard from "../../common/product_card/ProductCard";
import Progress from "../../common/Progress";

// Import Custom Hook
import { useFetch } from "../../../hooks/useFetch";
import { useTimer } from "../../../hooks/useTimer";

function FeaturedProducts({ url }) {
  const { data, isLoading } = useFetch(url);
  const { timer } = useTimer("Nov 03 2025, 00:00:00");

  return (
    <div className="featured-products">
      <MainHeading
        title="Featured Products"
        subTitle="Do not miss the current offers until the end of March."
      />

      <div
        className="featured-prodcuts-content"
        style={{
          border: isLoading ? "none" : null,
          display: isLoading ? "block" : null,
        }}
      >
        {isLoading ? (
          <Progress height="300px" />
        ) : (
          <>
            {data ? (
              <>
                {data.products.slice(19, 25).map((item) => {
                  return (
                    <div className="box" key={item.id}>
                      <ProductCard product={item}>
                        <ul className="time">
                          <li className="days">{timer.days}</li>
                          <li className="hours">{timer.hours}</li>
                          <li className="minutes">{timer.minutes}</li>
                          <li className="seconds">{timer.seconds}</li>
                        </ul>
                      </ProductCard>
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
  );
}

export default FeaturedProducts;
