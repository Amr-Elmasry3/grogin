// Import Ui
import CategoriesUi from "./CategoriesUi";

// Import React Memo
import { memo } from "react";

// Import Hooks
import { useEffect, useState } from "react";

// Import Custom Hooks
import { useFetch } from "../../../hooks/useFetch";

// Import Redux Hook
import { useDispatch } from "react-redux";

// Import Search Slice Category
import { setSearchCategory } from "../../../features/searchSlice";

function Categories({ closeSidebar }) {
  const [categoriesData, setCategoriesData] = useState(null);

  const { data, isLoading } = useFetch("data.json");

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoading && data) {
      setCategoriesData(data.categories);
    }
  }, [isLoading, data]);

  const handleCategories = (id) => {
    const newCategoriesData = [...categoriesData];

    newCategoriesData.map((item) => {
      return item.id === id
        ? (item.active = !item.active)
        : (item.active = false);
    });

    setCategoriesData(newCategoriesData);
  };

  const handleSearchCategory = (id, type, category) => {
    dispatch(setSearchCategory({ id, type, category }));

    closeSidebar ? closeSidebar() : null;
  };

  return (
    <>
      {
        <CategoriesUi
          data={categoriesData}
          isLoading={isLoading}
          handleCategories={handleCategories}
          handleSearchCategory={handleSearchCategory}
        />
      }
    </>
  );
}

export default memo(Categories);
