import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Import Functions
import { CapitalizeFirstLetter } from "../utils/CapitalizeFirstLetter";
import { LowerCaseFirstLetter } from "../utils/LowerCaseFirstLetter";
import { QuickSort } from "../utils/QuickSort";
import { HandlePaginationDetails } from "../utils/HandlePaginationDetails";

export const fetchData = createAsyncThunk("shop", async () => {
  try {
    const response = await axios.get("data.json");
    return response.data.products;
  } catch (error) {
    return error;
  }
});

export const shopSlice = createSlice({
  name: "shop",
  initialState: {
    allProducts: [],
    filteredProducts: [],
    filter: {
      searchValue: "",
      categories: [],
      price: 0,
      rate: 0,
    },
    displayDetails: { to: 0, from: 0, total: 0, pageNum: 0 },
    gridStyle: 5,
    count: 15,
    isLoading: false,
  },
  reducers: {
    handleGridStyle: (state, action) => {
      state.gridStyle = action.payload;
    },

    handleDisplayDetails: (state, action) => {
      const oldTo = state.displayDetails.to;
      const oldFrom = state.displayDetails.from;
      const oldPage = state.displayDetails.pageNum;
      const total = state.filteredProducts.length;

      const newPage = action.payload;

      const { newTo, newFrom } = HandlePaginationDetails(
        oldTo,
        oldFrom,
        oldPage,
        total,
        newPage,
        state.count
      );

      state.displayDetails = {
        to: newTo,
        from: newFrom,
        total: total,
        pageNum: newPage,
      };
    },

    handleFilter: (state, action) => {
      const key = action.payload.key;
      const value = action.payload.value;
      const category = action.payload.category;

      const categoryType = action.payload.categoryType
        ? action.payload.categoryType
        : "";

      if (
        category === "searchValue" ||
        category === "price" ||
        category === "rate"
      ) {
        state.filter[key] = value;
      } else if (category === "categories") {
        if (categoryType === "main") {
          if (!state.filter.categories.length) {
            state.filter.categories = [
              ...state.filter.categories,
              { main: value, sub: [] },
            ];
          } else {
            let found = false;
            for (let x = 0; x < state.filter.categories.length; x++) {
              const cat = state.filter.categories[x];
              const isSameMain = cat.main === value;
              const hasNoSub = ![...cat.sub].length;
              const hasSub = [...cat.sub].length;

              if (isSameMain && hasNoSub) {
                state.filter.categories.splice(x, 1);
                found = true;
                break;
              } else if (isSameMain && hasSub) {
                // If main exists and has subcategories, do nothing (keep as is)
                found = true;
                break;
              }
            }
            if (!found) {
              state.filter.categories = [
                ...state.filter.categories,
                { main: value, sub: [] },
              ];
            }
          }
        } else if (categoryType === "sub") {
          if (!state.filter.categories.length) {
            state.filter.categories.push({
              main: value.main,
              sub: [value.sub],
            });
          } else {
            let found = false;
            for (let x = 0; x < state.filter.categories.length; x++) {
              const cat = state.filter.categories[x];
              if (cat.main === value.main) {
                const subIndex = cat.sub.indexOf(value.sub);
                if (subIndex !== -1) {
                  cat.sub.splice(subIndex, 1);
                  // If after removal, sub is empty, remove the main category
                  if (cat.sub.length < 1 && !cat.main) {
                    state.filter.categories.splice(x, 1);
                  }
                } else {
                  cat.sub.push(value.sub);
                }
                found = true;
                break;
              }
            }
            if (!found) {
              state.filter.categories.push({
                main: value.main,
                sub: [value.sub],
              });
            }
          }
        }
      }
    },

    resetDisplayDetails: (state) => {
      const newDataLenght = state.filteredProducts.length;

      if (newDataLenght === 0) {
        state.displayDetails.to = 0;
        state.displayDetails.from = 0;
        state.displayDetails.total = 0;
        state.displayDetails.pageNum = 0;
      } else if (newDataLenght > 0 && newDataLenght < state.count) {
        state.displayDetails.to = 1;
        state.displayDetails.from = newDataLenght;
        state.displayDetails.total = newDataLenght;
        state.displayDetails.pageNum = 1;
      } else if (newDataLenght > 0 && newDataLenght >= state.count) {
        state.displayDetails.to = 1;
        state.displayDetails.from = state.count;
        state.displayDetails.total = newDataLenght;
        state.displayDetails.pageNum = 1;
      }
    },

    handleFilteredProducts: (state) => {
      const searchValue = state.filter.searchValue;
      const categories = state.filter.categories;
      const price = state.filter.price;
      const rate = state.filter.rate;

      const newFilteredData = state.allProducts.filter((item) => {
        const categoryResult = categories.some(
          (category) =>
            (!category.main && ![...category.sub].length) ||
            (category.main === item.category.main &&
              ![...category.sub].length) ||
            (!category.main && [...category.sub].includes(item.category.sub)) ||
            (category.main === item.category.main &&
              [...category.sub].includes(item.category.sub))
        );

        return (
          (item.name.startsWith(CapitalizeFirstLetter(searchValue)) ||
            item.name.startsWith(LowerCaseFirstLetter(searchValue)) ||
            !searchValue) &&
          (!rate || item.rate >= rate) &&
          (!categories.length || categoryResult) &&
          (!price || (item.price >= price[0] && item.price <= price[1]))
        );
      });

      state.filteredProducts = newFilteredData;
    },

    sortProductsByPrice: (state, action) => {
      const sort = action.payload.sort;
      const arr = action.payload.arr;

      state.filteredProducts = QuickSort(arr, "price", sort);
    },

    sortProductsByRate: (state, action) => {
      const sort = action.payload.sort;
      const arr = action.payload.arr;

      state.filteredProducts = QuickSort(arr, "rate", sort);
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.allProducts = action.payload;
      state.filteredProducts = action.payload;
      state.displayDetails = {
        to: 1,
        from: 15,
        total: action.payload ? [...action.payload].length : 0,
        pageNum: 1,
      };
      state.isLoading = false;
    });
    builder.addCase(fetchData.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const {
  handleGridStyle,
  handleDisplayDetails,
  handleFilter,
  handleFilteredProducts,
  resetDisplayDetails,
  sortProductsByPrice,
  sortProductsByRate,
} = shopSlice.actions;

export default shopSlice.reducer;
