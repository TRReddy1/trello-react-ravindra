import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const boardsSlice = createSlice({
  name: "boardsSlice",
  initialState,
  reducers: {
    fetching: (state, action) => {
      return action.payload;
    },
    createNewBoard: (state, action) => {
      return [...state, action.payload];
    },
  },
});

export const { fetching, createNewBoard } = boardsSlice.actions;
export default boardsSlice.reducer;
