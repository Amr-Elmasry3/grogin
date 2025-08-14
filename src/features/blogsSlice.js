// Import Data
import { blogs } from "../Data";

// Import Functions
import { HandlePaginationDetails } from "../utils/HandlePaginationDetails";

import { createSlice } from "@reduxjs/toolkit";

export const blogsSlice = createSlice({
  name: "blogs",
  initialState: {
    data: window.localStorage.getItem("grogin_blogsDetails")
      ? JSON.parse(window.localStorage.getItem("grogin_blogsDetails")).data
      : blogs,
    idNow: window.localStorage.getItem("grogin_blogsDetails")
      ? JSON.parse(window.localStorage.getItem("grogin_blogsDetails")).idNow
      : null,
    count: 2,
    displayDetails: { to: 1, from: 2, total: blogs.length, pageNum: 1 },
  },
  reducers: {
    addComment: (state, action) => {
      const { name, comment, commentId } = action.payload;
      const oldCount = state.data[commentId - 1].comments.count;
      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];

      // Handle Comment Date
      const date = new Date();
      const year = date.getFullYear();
      const day = date.getDate();
      const monthNumber = date.getMonth();
      const month = months[monthNumber + 1];

      state.data[commentId - 1].comments.count = oldCount + 1;
      state.data[commentId - 1].comments.data.push({
        id: oldCount + 1,
        name: name,
        comment: comment,
        date: `${month} ${day}, ${year}`,
      });
    },

    handleDisplayDetails: (state, action) => {
      const oldTo = state.displayDetails.to;
      const oldFrom = state.displayDetails.from;
      const oldPage = state.displayDetails.pageNum;
      const total = state.displayDetails.total;

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

    setId: (state, action) => {
      state.idNow = action.payload;
    },

    setInStorage: (state) => {
      window.localStorage.setItem("grogin_blogsDetails", JSON.stringify(state));
    },
  },
});

export const { addComment, handleDisplayDetails, setId, setInStorage } =
  blogsSlice.actions;

export default blogsSlice.reducer;
