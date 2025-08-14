import { createSlice } from "@reduxjs/toolkit";

// Import Toast Components
import { toast } from "react-toastify";

export const toastifySlice = createSlice({
  name: "toastify",
  initialState: {
    message: "hello toastify",
    type: "error",
  },
  reducers: {
    setMessage: (state, action) => {
      state.message = action.payload;
    },

    setType: (state, action) => {
      state.type = action.payload;
    },

    notify: (state) => {
      toast[state.type](state.message, {
        autoClose: 5000,
      });
    },
  },
});

export const { setMessage, setType, notify } = toastifySlice.actions;

export default toastifySlice.reducer;
