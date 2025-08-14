// Import Style File
import "./shop_content.scss";

// Import Components
import ShopContentHeadr from "./ShopContentHeadr";
import ShopContentBody from "./ShopContentBody";
import ShopContentFooter from "./ShopContentFooter";

// Import Hooks
import { useState, useEffect } from "react";

// Import Redux Hooks
import { useSelector, useDispatch } from "react-redux";

import {
  fetchData,
  handleGridStyle,
  handleDisplayDetails,
  sortProductsByPrice,
  sortProductsByRate,
} from "../../../features/shopSlice";

function ShopContent() {
  const shop = useSelector((choose) => {
    return choose.shop;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const [gridStyle, setGridStyle] = useState([
    { id: 1, style: "five", grid: ["", "", "", ""], active: true },
    { id: 2, style: "four", grid: ["", "", ""], active: false },
    { id: 3, style: "three", grid: ["", ""], active: false },
  ]);

  const [sortState, setSortState] = useState({
    data: [
      { id: 1, type: "price", sort: "low to high", active: false },
      { id: 2, type: "price", sort: "high to low", active: false },
      { id: 3, type: "rate", sort: "low to high", active: false },
      { id: 4, type: "rate", sort: "high to low", active: false },
    ],
    sortNow: "",
    isOpen: false,
  });

  const handleStyle = (id) => {
    const newGridStyle = [...gridStyle];

    newGridStyle.map((item) => {
      return item.id === id ? (item.active = true) : (item.active = false);
    });

    setGridStyle(newGridStyle);

    dispatch(handleGridStyle(newGridStyle[id - 1].grid.length + 1));
  };

  const handleSortState = (id) => {
    if (id) {
      const newSortState = { ...sortState };

      newSortState.sortNow =
        newSortState.data[id - 1].type +
        " by " +
        newSortState.data[id - 1].sort;

      newSortState.data.map((item) => {
        return item.id === id ? (item.active = true) : (item.active = false);
      });

      newSortState.isOpen = !newSortState.isOpen;

      setSortState(newSortState);

      // Handle Products In Shop
      // Sort By Price
      if (newSortState.data[id - 1].type === "price") {
        if (newSortState.data[id - 1].sort === "low to high") {
          dispatch(
            sortProductsByPrice({ arr: shop.filteredProducts, sort: "low" })
          );
        } else if (newSortState.data[id - 1].sort === "high to low") {
          dispatch(
            sortProductsByPrice({ arr: shop.filteredProducts, sort: "high" })
          );
        }
      }
      // Sort By Rate
      else if (newSortState.data[id - 1].type === "rate") {
        if (newSortState.data[id - 1].sort === "low to high") {
          dispatch(
            sortProductsByRate({ arr: shop.filteredProducts, sort: "low" })
          );
        } else if (newSortState.data[id - 1].sort === "high to low") {
          dispatch(
            sortProductsByRate({ arr: shop.filteredProducts, sort: "high" })
          );
        }
      }
    } else {
      setSortState({ ...sortState, isOpen: !sortState.isOpen });
    }
  };

  // Shop Slice Functions
  const setDisplaySettings = (event, page) => {
    dispatch(handleDisplayDetails(page));

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="shop-content">
      <ShopContentHeadr
        style={gridStyle}
        handleGridStyle={handleStyle}
        sort={sortState}
        handleSortState={handleSortState}
        shop={shop}
      />

      <ShopContentBody shop={shop} />

      <ShopContentFooter shop={shop} setDisplaySettings={setDisplaySettings} />
    </div>
  );
}

export default ShopContent;
