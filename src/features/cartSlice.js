import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: window.localStorage.getItem("grogin_cart")
      ? JSON.parse(window.localStorage.getItem("grogin_cart")).products
      : [],
    count: window.localStorage.getItem("grogin_cart")
      ? JSON.parse(window.localStorage.getItem("grogin_cart")).count
      : 0,
    subTotal: window.localStorage.getItem("grogin_cart")
      ? JSON.parse(window.localStorage.getItem("grogin_cart")).subTotal
      : 0,
  },
  reducers: {
    addProductToCart: (state, action) => {
      state.products.push({ ...action.payload, count: 1 });
    },

    removeProductFromCart: (state, action) => {
      const id = action.payload;

      for (let x = 0; x < state.products.length; x++) {
        if (state.products[x].id === id) {
          state.products.splice(x, 1);
          break;
        }
      }
    },

    setInStorageCart: (state) => {
      window.localStorage.setItem("grogin_cart", JSON.stringify(state));
    },

    setCount: (state, action) => {
      const process = action.payload;

      if (process === "add") {
        state.count += 1;
      } else if (process === "subtract") {
        state.count -= 1;
      }
    },

    calcSubTotal: (state, action) => {
      const price = action.payload.price;

      const process = action.payload.process;
      let newSubTotal = 0;

      if (process === "add") {
        newSubTotal = Number(state.subTotal) + Number(price);

        state.subTotal = Number(newSubTotal);
      } else if (process === "subtract") {
        newSubTotal = Number(state.subTotal) - Number(price);
        state.subTotal = Number(newSubTotal);
      }
    },

    increaseProductCount: (state, action) => {
      const id = action.payload;

      for (let x = 0; x < [...state.products].length; x++) {
        if (id === state.products[x].id) {
          state.products[x].count += 1;
          break;
        }
      }
    },

    decreaseProductCount: (state, action) => {
      const id = action.payload;

      for (let x = 0; x < [...state.products].length; x++) {
        if (id === state.products[x].id && state.products[x].count > 1) {
          state.products[x].count -= 1;
        }
      }
    },
  },
});

export const {
  addProductToCart,
  removeProductFromCart,
  setInStorageCart,
  setCount,
  calcSubTotal,
  increaseProductCount,
  decreaseProductCount,
} = cartSlice.actions;

export default cartSlice.reducer;
