// Import Style File
import "./shop_filter.scss";

import { useState } from "react";

// Import Matrial Ui Components
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";

// Import React Icons
import { GoPlus } from "react-icons/go";

function ShopFilterUi({
  price,
  handlePrice,
  categoriesData,
  handleCategories,
  rate,
  handleRateState,
}) {
  const [expanded, setExpanded] = useState(1);

  const handleChange = (id) => (eve, isExpanded) => {
    setExpanded(isExpanded ? id : null);
  };

  return (
    <div className="shop-filter">
      <div className="price-filter box">
        <h3 className="title">Widget price filter</h3>

        <div className="min-max">
          <div className="price-box">
            <span className="key">Min price</span>

            <span className="value">{price[0]}</span>
          </div>

          <span className="sign">-</span>

          <div className="price-box">
            <span className="key">Max price</span>

            <span className="value">{price[1]}</span>
          </div>
        </div>

        <Box className="range">
          <Slider
            className="slide"
            value={price}
            onChange={handlePrice}
            min={0}
            max={50}
            step={1}
            defaultValue={[0, 50]}
          />
        </Box>

        <div className="static-price">
          <p>
            Price: ${price[0]} - ${price[1]}
          </p>
        </div>
      </div>

      <div className="categories-filter box">
        <h3 className="title">Products categories</h3>

        <div className="categories-filter-content">
          {categoriesData ? (
            <>
              {categoriesData.map((item) => {
                if (item.subCategories) {
                  return (
                    <Accordion
                      expanded={expanded === item.id}
                      key={item.id}
                      className="accordion"
                      onChange={handleChange(item.id)}
                    >
                      <AccordionSummary
                        expandIcon={<GoPlus className="icon" />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        className="accordion-summary"
                      >
                        <Typography component="span" className="">
                          <div
                            className="row"
                            key={item.id}
                            onClick={() => {
                              handleCategories(item.id);
                            }}
                          >
                            <span
                              className={`shape ${item.active ? "active" : ""}`}
                            ></span>

                            <li className="category">{item.category}</li>
                          </div>
                        </Typography>
                      </AccordionSummary>

                      <AccordionDetails>
                        <div className="sub-categories">
                          {item.subCategories.map((sub) => {
                            return (
                              <div
                                className="row"
                                key={sub.id}
                                onClick={() => {
                                  handleCategories(item.id, sub.id);
                                }}
                              >
                                <span
                                  className={`shape ${
                                    sub.active ? "active" : ""
                                  }`}
                                ></span>

                                <li className="sub-category">{sub.subCate}</li>
                              </div>
                            );
                          })}
                        </div>
                      </AccordionDetails>
                    </Accordion>
                  );
                } else {
                  return (
                    <div
                      className="row"
                      key={item.id}
                      onClick={() => {
                        handleCategories(item.id);
                      }}
                    >
                      <span
                        className={`shape ${item.active ? "active" : ""}`}
                      ></span>

                      <li className="category">{item.category}</li>
                    </div>
                  );
                }
              })}
            </>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="rate-filter box">
        <h3 className="title">Products rated</h3>

        <div className="rate-filter-content">
          {rate.map((item) => {
            return (
              <div
                className="row"
                key={item.id}
                onClick={() => {
                  handleRateState(item.id);
                }}
              >
                <span className={`shape ${item.active ? "active" : ""}`}></span>

                <span className="more-than">More than</span>

                <Rating
                  className="rating"
                  name="half-rating-read"
                  defaultValue={item.rate}
                  precision={0.5}
                  readOnly
                  style={{ fontSize: "16px" }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ShopFilterUi;
