// Import Components
import MyPagination from "../../common/pagination/MyPagination";

function ShopContentFooter({ shop, setDisplaySettings }) {
  return (
    <div className="shop-content-footer">
      <MyPagination
        count={
          shop.isLoading
            ? 0
            : Math.ceil([...shop.filteredProducts].length / shop.count)
        }
        func={setDisplaySettings}
        page={shop.displayDetails.pageNum}
      />
    </div>
  );
}

export default ShopContentFooter;
