// Import Style File
import "./best_sellers.scss";

import React from "react";

// Import Components
import MainHeading from "../../common/main_heading/MainHeading";
import PromoSection from "../../common/promo_section/PromoSection";
import ProductCard from "../../common/product_card/ProductCard";
import Progress from "../../common/Progress";

// Import Matrial Ui Components
import Grid from "@mui/material/Grid";

// Import Custom Hooks
import { useFetch } from "../../../hooks/useFetch";

function BestSellers({ url }) {
  const { data, isLoading } = useFetch(url);

  return (
    <div className="best-sellers">
      <MainHeading
        title="Best Sellers"
        subTitle="Some of the new products arriving this weeks"
      />

      <div
        className="best-sellers-content"
        style={{ border: isLoading ? "none" : null }}
      >
        {isLoading ? (
          <Progress height="370px" />
        ) : (
          <>
            {data && data.products ? (
              <Grid container>
                {data.products.slice(70, 78).map((item, index) => {
                  if (index === 2 || index === 6) {
                    return (
                      <React.Fragment key={item.id}>
                        <Grid size={{ sm: 12, md: 12, lg: 3 }}>
                          <div className="sell-box">
                            <PromoSection
                              start={index === 2 ? 9 : 10}
                              end={index === 2 ? 10 : 11}
                            />
                          </div>
                        </Grid>

                        <Grid size={{ sm: 12, md: 6, lg: 9 / 4 }} key={item.id}>
                          <div className="sell-box">
                            <ProductCard product={item} />
                          </div>
                        </Grid>
                      </React.Fragment>
                    );
                  } else {
                    return (
                      <Grid size={{ sm: 12, md: 6, lg: 9 / 4 }} key={item.id}>
                        <div className="sell-box">
                          <ProductCard product={item} />
                        </div>
                      </Grid>
                    );
                  }
                })}
              </Grid>
            ) : (
              ""
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default BestSellers;
