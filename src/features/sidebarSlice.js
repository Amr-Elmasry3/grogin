import { createSlice } from "@reduxjs/toolkit";

export const sidebarSlice = createSlice({
  name: "sidbar",
  initialState: {
    isOpen: false,
  },
  reducers: {
    handleSidebar: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { handleSidebar } = sidebarSlice.actions;

export default sidebarSlice.reducer;
