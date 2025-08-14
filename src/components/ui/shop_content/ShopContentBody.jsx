// Import Components
import ProductCard from "../../common/product_card/ProductCard";
import Progress from "../../common/Progress";
import EmptyBox from "../../common/empty_box/EmptyBox";

function ShopContentBody({ shop }) {
  return (
    <div
      className="shop-content-body"
      style={{
        gridTemplateColumns: ![...shop.filteredProducts].length
          ? "repeat(1, 1fr)"
          : shop.gridStyle === 5 && [...shop.filteredProducts].length
          ? "repeat(auto-fill, minmax(170px, 1fr))"
          : shop.gridStyle === 4 && [...shop.filteredProducts].length
          ? "repeat(auto-fill, minmax(200px, 1fr))"
          : "repeat(auto-fill, minmax(250px, 1fr))",
        border: shop.isLoading ? "none" : null,
      }}
    >
      {shop.isLoading ? (
        <Progress height="200px" />
      ) : (
        <>
          {[...shop.filteredProducts].length ? (
            <>
              {shop.filteredProducts
                .slice(shop.displayDetails.to - 1, shop.displayDetails.from)
                .map((item) => {
                  return (
                    <div key={item.id}>
                      <ProductCard product={item} />
                    </div>
                  );
                })}
            </>
          ) : (
            <EmptyBox page="shop" />
          )}
        </>
      )}
    </div>
  );
}

export default ShopContentBody;
