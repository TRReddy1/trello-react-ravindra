import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const checkitemsSlice = createSlice({
  name: "Checkitemsslice",
  initialState,
  reducers: {
    fetching: (state, action) => {
      const { checklistId, checkitems } = action.payload;
      const existingChecklist = state.find(
        (Checkitems) => Checkitems.checklistId === checklistId
      );
      if (!existingChecklist) {
        state.push({ checklistId, checkitems });
      }
    },
    addingCheckitem: (state, action) => {
      const { checklistId, checkitems } = action.payload;
      state.map((CheckitemObj) => {
        if (CheckitemObj.checklistId === checklistId) {
          CheckitemObj.checkitems.push(checkitems);
        }
      });
    },
    deletingCheckitem: (state, action) => {
      const { checklistId, checkitemId } = action.payload;
      state.map((CheckitemObj) => {
        if (CheckitemObj.checklistId === checklistId) {
          var updated = CheckitemObj.checkitems.filter(
            (item) => item.id !== checkitemId
          );

          CheckitemObj.checkitems = updated;
        }
      });
    },
  },
});

export const { fetching, addingCheckitem, deletingCheckitem } =
  checkitemsSlice.actions;
export default checkitemsSlice.reducer;
