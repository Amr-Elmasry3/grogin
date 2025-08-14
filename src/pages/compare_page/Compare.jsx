// Import Style File
import "./compare.scss";

// Import Components
import CloseIcon from "../../components/common/close_icon/CloseIcon";
import EmptyBox from "../../components/common/empty_box/EmptyBox";

// Import Custom Hooks
import { useRemoveProduct } from "../../hooks/useRemoveProduct";

// Import Redux Hooks
import { useSelector } from "react-redux";

function Compare() {
  const products = useSelector((store) => {
    return store.compare.products;
  });

  const removeProduct = useRemoveProduct();

  return (
    <div className="compare-page">
      <div className="container">
        {[...products].length ? (
          <div className="table-cover">
            <div className="my-table">
              <div className="main-box img-box">
                <span className="title">Img</span>

                <ul className="list">
                  {products.map((item) => {
                    return (
                      <div className="product-img " key={item.id}>
                        <img src={item.images[0]} alt={`img${item.id}...`} />
                      </div>
                    );
                  })}
                </ul>
              </div>

              <div className="main-box category-box">
                <span className="title  ">Category</span>

                <ul className="list">
                  {products.map((item) => {
                    return (
                      <span className="category" key={item.id}>
                        {item.category.main}
                      </span>
                    );
                  })}
                </ul>
              </div>

              <div className="main-box title-box">
                <span className="title">Name</span>

                <ul className="list">
                  {products.map((item) => {
                    return (
                      <span className="name" key={item.id}>
                        {item.name}
                      </span>
                    );
                  })}
                </ul>
              </div>

              <div className="main-box price-box ">
                <span className="title  ">Price</span>

                <ul className="list">
                  {products.map((item) => {
                    return (
                      <span className="price" key={item.id}>
                        $
                        {(
                          item.price -
                          item.price * (item.discount / 100)
                        ).toFixed(2)}
                      </span>
                    );
                  })}
                </ul>
              </div>

              <div className="main-box description-box ">
                <span className="title  ">Description</span>

                <ul className="list">
                  {products.map((item) => {
                    return (
                      <span className="description" key={item.id}>
                        {item.description[0]}
                      </span>
                    );
                  })}
                </ul>
              </div>

              <div className="main-box remove-box ">
                <span className="title ">Remove</span>

                <ul className="list">
                  {products.map((item) => {
                    return (
                      <div className="close" key={item.id}>
                        <CloseIcon
                          func={() => {
                            removeProduct(item, "compare");
                          }}
                        />
                      </div>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <EmptyBox page="compare" />
        )}
      </div>
    </div>
  );
}

export default Compare;
