// Import Redux Hooks
import { useDispatch } from "react-redux";

// Import Shop Slice Reducers
import {
  handleFilter,
  handleFilteredProducts,
  resetDisplayDetails,
} from "../features/shopSlice";

export function useFilterCategories() {
  const dispatch = useDispatch();

  const handleFilterCategories = (key, value, category, categoryType) => {
    dispatch(
      handleFilter({
        key,
        value,
        category,
        categoryType,
      })
    );

    dispatch(handleFilteredProducts());
    dispatch(resetDisplayDetails());
  };

  return handleFilterCategories;
}
