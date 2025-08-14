import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchValue: "",
    searchCategory: null,
    resultsIsOpen: false,
  },
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },

    setSearchCategory: (state, action) => {
      if (action.payload) {
        const id = action.payload.id;
        const type = action.payload.type;
        const category = action.payload.category;

        state.searchCategory = { id, type, category };
      } else {
        state.searchCategory = null;
      }
    },

    handleResultsBox: (state, action) => {
      const value = action.payload;

      if (!value) {
        state.resultsIsOpen = false;
      } else {
        state.resultsIsOpen = true;
      }
    },
  },
});

export const { setSearchValue, setSearchCategory, handleResultsBox } =
  searchSlice.actions;

export default searchSlice.reducer;
