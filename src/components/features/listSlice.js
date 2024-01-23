import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const listSlice = createSlice({
  name: "listslice",
  initialState,
  reducers: {
    fetching: (state, action) => {
      return action.payload;
    },
    addingList: (state, action) => {
      return [...state, action.payload];
    },
    deletingList: (state, action) => {
      return state.filter((li) => li.id !== action.payload.id);
    },
  },
});

export const { fetching, addingList, deletingList } = listSlice.actions;
export default listSlice.reducer;
