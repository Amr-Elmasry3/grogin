// Import Style File
import "./search.scss";

// Import Components
import MyInput from "../my_input/MyInput";

// Import React Icons
import { IoSearchSharp } from "react-icons/io5";

// Import Link
import { Link } from "react-router-dom";

function SearchUi({
  searchValue,
  handleSearchValue,
  searchResults,
  handleSearchResults,
  isOpen,
  handleOpen,
  handleClickSearch,
}) {
  return (
    <div className="search-box">
      <MyInput
        type="text"
        value={searchValue}
        name="searchValue"
        placholder="Search for products"
        handleChange={(value) => {
          handleSearchValue(value);
          handleSearchResults(value);
          handleOpen(value);
        }}
      />

      <IoSearchSharp className="icon" onClick={handleClickSearch} />

      <div className={`search-results ${isOpen ? "open" : ""}`}>
        {[...searchResults].length ? (
          <>
            {searchResults.map((item) => {
              return (
                <div className="product" key={item.id}>
                  <img src={item.images[0]} alt={`img${item.id}`} />

                  <Link to={`/product-details/${item.id}`} className="name">
                    {item.name}
                  </Link>

                  <div className="price-box">
                    <p className="new-price">
                      $
                      {item.discount ? (
                        <>
                          {(
                            item.price -
                            item.price * (item.discount / 100)
                          ).toFixed(2)}
                          <span className="old-price">${item.price}</span>
                        </>
                      ) : (
                        item.price
                      )}
                    </p>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <span className="no-products">
            No products found for "{searchValue}"
          </span>
        )}
      </div>
    </div>
  );
}

export default SearchUi;
