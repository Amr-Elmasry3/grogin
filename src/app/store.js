import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "../features/sidebarSlice";
import cartSlice from "../features/cartSlice";
import cartSidebarSlice from "../features/cartSidebarSlice";
import wishlistSlice from "../features/wishlistSlice";
import compareSlice from "../features/compareSlice";
import toastifySlice from "../features/toastifySlice";
import userInfoSlice from "../features/userInfoSlice";
import shopSlice from "../features/shopSlice";
import loginModelSlice from "../features/loginModelSlice";
import blogsSlice from "../features/blogsSlice";
import searchSlice from "../features/searchSlice";

export default configureStore({
  reducer: {
    sidebar: sidebarReducer,
    cart: cartSlice,
    cartSidebar: cartSidebarSlice,
    wishlist: wishlistSlice,
    compare: compareSlice,
    toastify: toastifySlice,
    userInfo: userInfoSlice,
    shop: shopSlice,
    loginModel: loginModelSlice,
    blogs: blogsSlice,
    search: searchSlice,
  },
  devTools: true,
});
