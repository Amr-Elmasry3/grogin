// Import Matrial Ui Components
import Rating from "@mui/material/Rating";

// Import Components
import Progress from "../../../common/Progress";
import AddReview from "./add_review/AddReview";

// Import React Icons
import { FaStar } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";

function ProductReviews({ product, isLoading }) {
  return (
    <div className="product-reviews">
      {isLoading ? (
        <Progress height="200px" />
      ) : (
        <>
          {product ? (
            <>
              <p className="head">
                {product.reviews.count} for {product.name}
              </p>

              <div className="rate-details">
                <span className="rate">{product.rate.toFixed(2)}</span>

                <div className="average-box">
                  <Rating
                    className="rating"
                    name="half-rating-read"
                    defaultValue={product.rate}
                    precision={0.5}
                    readOnly
                    style={{ fontSize: "28px" }}
                  />

                  <span className="average">
                    Average of {product.reviews.count} reviews
                  </span>
                </div>

                <div className="rates-count">
                  <div className="box">
                    <FaStar className="icon" />

                    <span className="key">5</span>

                    <div className="progress">
                      <span
                        className="child"
                        style={{
                          width: `${
                            (product.reviews.countInfo[5] /
                              product.reviews.count) *
                            100
                          }%`,
                        }}
                      ></span>
                    </div>

                    <span className="value">
                      {product.reviews.countInfo[5]}
                    </span>
                  </div>

                  <div className="box">
                    <FaStar className="icon" />

                    <span className="key">4</span>

                    <div className="progress">
                      <span
                        className="child"
                        style={{
                          width: `${
                            (product.reviews.countInfo[4] /
                              product.reviews.count) *
                            100
                          }%`,
                        }}
                      ></span>
                    </div>

                    <span className="value">
                      {product.reviews.countInfo[4]}
                    </span>
                  </div>

                  <div className="box">
                    <FaStar className="icon" />

                    <span className="key">3</span>

                    <div className="progress">
                      <span
                        className="child"
                        style={{
                          width: `${
                            (product.reviews.countInfo[3] /
                              product.reviews.count) *
                            100
                          }%`,
                        }}
                      ></span>
                    </div>

                    <span className="value">
                      {product.reviews.countInfo[3]}
                    </span>
                  </div>

                  <div className="box">
                    <FaStar className="icon" />

                    <span className="key">2</span>

                    <div className="progress">
                      <span
                        className="child"
                        style={{
                          width: `${
                            (product.reviews.countInfo[2] /
                              product.reviews.count) *
                            100
                          }%`,
                        }}
                      ></span>
                    </div>

                    <span className="value">
                      {product.reviews.countInfo[2]}
                    </span>
                  </div>

                  <div className="box">
                    <FaStar className="icon" />

                    <span className="key">1</span>

                    <div className="progress">
                      <span
                        className="child"
                        style={{
                          width: `${
                            (product.reviews.countInfo[1] /
                              product.reviews.count) *
                            100
                          }%`,
                        }}
                      ></span>
                    </div>

                    <span className="value">
                      {product.reviews.countInfo[1]}
                    </span>
                  </div>
                </div>
              </div>

              <div className="reviews-details">
                {product.reviews.data.map((item) => {
                  return (
                    <div className="box" key={item.id}>
                      <div className="img-box">
                        <FaUserAlt className="icon" />
                      </div>

                      <div className="details">
                        <Rating
                          className="rating"
                          name="half-rating-read"
                          defaultValue={item.rate}
                          precision={0.5}
                          readOnly
                          style={{ fontSize: "18px" }}
                        />

                        <p className="name-date">
                          {item.name} -{" "}
                          <span className="date">{item.date}</span>
                        </p>

                        <p className="review-content">{item.review}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <AddReview />
            </>
          ) : (
            ""
          )}
        </>
      )}
    </div>
  );
}

export default ProductReviews;
