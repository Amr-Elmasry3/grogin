// Import Style file
import "./product_info.scss";

// Import Components
import Button from "../../common/button/Button";

// Import Matrial Ui Components
import Rating from "@mui/material/Rating";

// Import React Icons
import { FiShoppingBag } from "react-icons/fi";
import { FaRegCreditCard } from "react-icons/fa6";
import { MdSecurity } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { IoIosGitCompare } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

function ProductInfoUi({
  product,
  isLoading,
  mainImg,
  handleMainImg,
  checkProduct,
  addProduct,
  removeProduct,
  quntity,
  handleQuntity,
}) {
  return (
    <div className="product-info">
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <>
          {product ? (
            <>
              {" "}
              <div className="img-box">
                {product.discount ? (
                  <span className="discount">{product.discount}%</span>
                ) : (
                  ""
                )}

                {product.badge ? (
                  <span className={`badge ${product.badge.replace(" ", "-")}`}>
                    {product.badge}
                  </span>
                ) : (
                  ""
                )}

                <img
                  src={mainImg ? mainImg : product.images[0]}
                  alt={`img${product.id}`}
                  className="main-img"
                />

                {[...product.images].length > 1 ? (
                  <div className="small-imgs">
                    {product.images.map((item, index) => {
                      return (
                        <img
                          src={item}
                          alt={`img${index + 1}...`}
                          key={index + 1}
                          onClick={(eve) => {
                            handleMainImg(eve.target.src);
                          }}
                        />
                      );
                    })}
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="details-box">
                <h2 className="name">{product.name}</h2>

                <div className="global-info">
                  <div className="rate-box box">
                    <Rating
                      className="rating"
                      name="half-rating-read"
                      defaultValue={product.rate}
                      precision={0.5}
                      readOnly
                      style={{ fontSize: "15px" }}
                    />

                    <span className="rate">{product.rate.toFixed(2)}</span>

                    <span className="count-reviews">
                      {product.reviews.count}
                    </span>
                  </div>

                  {product.store ? (
                    <div className="store-box box">
                      <span className="key">Store: </span>{" "}
                      <span className="value">{product.store}</span>
                    </div>
                  ) : (
                    ""
                  )}

                  <div className="sku-box box">
                    <span className="key">Sku: </span>{" "}
                    <span className="value">{product.sku}</span>
                  </div>
                </div>

                <p className="description">
                  Vivamus adipiscing nisl ut dolor dignissim semper. Nulla
                  luctus malesuada tincidunt. Class aptent taciti sociosqu ad
                  litora torquent Vivamus adipiscing nisl ut dolor dignissim
                  semper.
                </p>

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

                {product.countAdded ? (
                  <div className="count-people-added">
                    <FiShoppingBag className="icon" />

                    <p>
                      This product has been added to{" "}
                      <span>{product.countAdded} people's</span> carts.
                    </p>
                  </div>
                ) : (
                  ""
                )}

                <div className="cart-action">
                  {checkProduct(product.id, "cart") ? (
                    <div className="quntity">
                      <div
                        className="decrease-icon"
                        onClick={() => {
                          handleQuntity("subtract", product);
                        }}
                      >
                        <FaMinus className="icon" />
                      </div>

                      <span className="count">{quntity}</span>

                      <div
                        className="increase-icon"
                        onClick={() => {
                          handleQuntity("add", product);
                        }}
                      >
                        <FaPlus className="icon" />
                      </div>
                    </div>
                  ) : (
                    ""
                  )}

                  <Button
                    btnTitle={`${
                      checkProduct(product.id, "cart")
                        ? "Remove from cart"
                        : "Add to cart"
                    }`}
                    func={() => {
                      if (checkProduct(product.id, "cart")) {
                        removeProduct(product, "cart");
                      } else {
                        addProduct(product, "cart");
                      }
                    }}
                  />
                </div>

                <div className="payment-info">
                  <div className="payment box">
                    <FaRegCreditCard className="icon" />

                    <p className="payment">
                      <span>Payment.</span>Payment upon receipt of goods,
                      Payment by card in the department, Google Pay, Online
                      card, -5% discount in case of payment
                    </p>
                  </div>

                  <div className="security box">
                    <MdSecurity className="icon" />

                    <p className="payment">
                      <span>Warranty.</span>The Consumer Protection Act does not
                      provide for the return of this product of proper quality.
                    </p>
                  </div>
                </div>

                <div className="actions">
                  <div className="wishlist box">
                    <div
                      className={`icon-box ${
                        checkProduct(product.id, "wishlist") ? "added" : ""
                      }`}
                      onClick={() => {
                        if (checkProduct(product.id, "wishlist")) {
                          removeProduct(product, "wishlist");
                        } else {
                          addProduct(product, "wishlist");
                        }
                      }}
                    >
                      <FaRegHeart className="icon" />
                    </div>

                    <span>Add to wishlist</span>
                  </div>

                  <div className="compare box">
                    <div
                      className={`icon-box ${
                        checkProduct(product.id, "compare") ? "added" : ""
                      }`}
                      onClick={() => {
                        if (checkProduct(product.id, "compare")) {
                          removeProduct(product, "compare");
                        } else {
                          addProduct(product, "compare");
                        }
                      }}
                    >
                      <IoIosGitCompare className="icon" />
                    </div>

                    <span>Compare</span>
                  </div>
                </div>
              </div>{" "}
            </>
          ) : (
            ""
          )}
        </>
      )}
    </div>
  );
}

export default ProductInfoUi;
