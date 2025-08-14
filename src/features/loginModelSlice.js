import { createSlice } from "@reduxjs/toolkit";

export const loginModelSlice = createSlice({
  name: "loginModel",
  initialState: {
    isOpen: false,
    message: "Please login to continue...",
  },
  reducers: {
    handleModel: (state) => {
      state.isOpen = !state.isOpen;
    },

    setModelMessage: (state, action) => {
      state.message = action.payload;
    },
  },
});

export const { handleModel, setModelMessage } = loginModelSlice.actions;

export default loginModelSlice.reducer;
