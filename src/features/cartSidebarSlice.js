import { createSlice } from "@reduxjs/toolkit";

export const cartSidebarSlice = createSlice({
  name: "cartSidebar",
  initialState: {
    isOpen: false,
  },
  reducers: {
    handleCartToggle: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { handleCartToggle } = cartSidebarSlice.actions;

export default cartSidebarSlice.reducer;
