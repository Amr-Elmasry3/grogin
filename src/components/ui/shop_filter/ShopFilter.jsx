// Import Ui
import ShopFilterUi from "./ShopFilterUi";

// Import Hooks
import { useState, useEffect } from "react";

// Import Custom Hooks
import { useFetch } from "../../../hooks/useFetch";
import { useFilterCategories } from "../../../hooks/useFilterCategories";

// Import Redux Hooks
import { useSelector, useDispatch } from "react-redux";

// Import Shop Slice Reducers
import {
  handleFilter,
  handleFilteredProducts,
  resetDisplayDetails,
} from "../../../features/shopSlice";

// Import Search Slice Category
import { setSearchCategory } from "../../../features/searchSlice";

function ShopFilter() {
  const [price, setPrice] = useState([0, 50]);
  const [categoriesData, setCategoriesData] = useState(null);
  const [rateState, setRateState] = useState([
    { id: 1, rate: 4, active: false },
    { id: 2, rate: 3, active: false },
    { id: 3, rate: 2, active: false },
  ]);

  const { data, isLoading } = useFetch("data.json");

  const search = useSelector((store) => {
    return store.search;
  });

  const dispatch = useDispatch();
  const handleFilterCategories = useFilterCategories();

  // Handle Categories State
  useEffect(() => {
    if (!isLoading && data) {
      setCategoriesData(data.categories);
    }
  }, [isLoading, data]);

  // Handle Search Value
  useEffect(() => {
    if (!isLoading && data) {
      dispatch(
        handleFilter({
          key: "searchValue",
          value: search.searchValue,
          category: "searchValue",
        })
      );

      dispatch(handleFilteredProducts());
      dispatch(resetDisplayDetails());
    }
  }, [search.searchValue, isLoading, data, dispatch]);

  // Handle Search Category
  useEffect(() => {
    if (
      !isLoading &&
      data &&
      search.searchCategory &&
      categoriesData // ensure categoriesData is loaded
    ) {
      const { id, type, category } = search.searchCategory;
      // Reset Category Search
      dispatch(setSearchCategory());

      // Create a deep copy to avoid mutating state directly
      const newCategoriesData = JSON.parse(JSON.stringify(categoriesData));

      if (type === "main") {
        newCategoriesData[id - 1].active = true;

        handleFilterCategories(
          "categories",
          newCategoriesData[id - 1].category,
          "categories",
          "main"
        );
      } else if (type === "sub") {
        let subId = 0;

        newCategoriesData[id - 1].subCategories.forEach((item) => {
          if (item.subCate === category) {
            item.active = true;
            subId = item.id;
          }
        });

        handleFilterCategories(
          "categories",
          {
            sub: newCategoriesData[id - 1].subCategories[subId - 1].subCate,
            main: newCategoriesData[id - 1].category,
          },
          "categories",
          "sub"
        );
      }

      // Only update if data actually changed to avoid infinite loop
      if (
        JSON.stringify(categoriesData) !== JSON.stringify(newCategoriesData)
      ) {
        setCategoriesData(newCategoriesData);

        dispatch(handleFilteredProducts());
        dispatch(resetDisplayDetails());
      }
    }
  }, [
    isLoading,
    data,
    search.searchCategory,
    categoriesData,
    dispatch,
    handleFilterCategories,
  ]);

  const handlePrice = (event, newValue) => {
    setPrice(newValue);

    dispatch(
      handleFilter({
        key: "price",
        value: newValue,
        category: "price",
      })
    );

    dispatch(handleFilteredProducts());
    dispatch(resetDisplayDetails());
  };

  const handleCategories = (id, subId) => {
    const newCategoriesData = [...categoriesData];

    if (subId) {
      newCategoriesData[id - 1].active = true;

      newCategoriesData[id - 1].subCategories[subId - 1].active =
        !newCategoriesData[id - 1].subCategories[subId - 1].active;

      handleFilterCategories(
        "categories",
        {
          sub: newCategoriesData[id - 1].subCategories[subId - 1].subCate,
          main: newCategoriesData[id - 1].category,
        },
        "categories",
        "sub"
      );
    } else {
      newCategoriesData[id - 1].active = !newCategoriesData[id - 1].active;

      handleFilterCategories(
        "categories",
        newCategoriesData[id - 1].category,
        "categories",
        "main"
      );
    }

    setCategoriesData(newCategoriesData);
  };

  const handleRateState = (id) => {
    const newRateState = [...rateState];

    newRateState.map((item) => {
      return item.id === id
        ? (item.active = !item.active)
        : (item.active = false);
    });

    setRateState(newRateState);

    dispatch(
      handleFilter({
        key: "rate",
        value: newRateState[id - 1].active ? newRateState[id - 1].rate : 0,
        category: "rate",
      })
    );

    dispatch(handleFilteredProducts());
    dispatch(resetDisplayDetails());
  };

  return (
    <>
      <ShopFilterUi
        price={price}
        handlePrice={handlePrice}
        categoriesData={categoriesData}
        handleCategories={handleCategories}
        rate={rateState}
        handleRateState={handleRateState}
      />
    </>
  );
}

export default ShopFilter;
