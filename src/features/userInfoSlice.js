import { createSlice } from "@reduxjs/toolkit";

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: {
    accounts: window.localStorage.getItem("grogin_userInfo")
      ? JSON.parse(window.localStorage.getItem("grogin_userInfo")).accounts
      : [],

    accountNow: window.localStorage.getItem("grogin_userInfo")
      ? JSON.parse(window.localStorage.getItem("grogin_userInfo")).accountNow
      : {},

    isLogin: window.localStorage.getItem("grogin_userInfo")
      ? JSON.parse(window.localStorage.getItem("grogin_userInfo")).isLogin
      : false,
  },
  reducers: {
    setInfo: (state, action) => {
      state.accounts.push({ ...action.payload });
    },

    setAccountNow: (state, action) => {
      state.accountNow = action.payload;
    },

    handleLogin: (state) => {
      state.isLogin = true;
    },

    setInStorage: (state) => {
      window.localStorage.setItem("grogin_userInfo", JSON.stringify(state));
    },

    handleLogout: (state) => {
      state.isLogin = false;
    },
  },
});

export const {
  setInfo,
  setInStorage,
  handleLogin,
  setAccountNow,
  handleLogout,
} = userInfoSlice.actions;

export default userInfoSlice.reducer;
