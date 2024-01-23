import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const checklistsSlice = createSlice({
  name: "Checklistslice",
  initialState,
  reducers: {
    fetching: (state, action) => {
      const { cardId, checklists } = action.payload;
      const existingChecklist = state.find(
        (checklists) => checklists.cardId === cardId
      );
      if (!existingChecklist) {
        state.push({ cardId, checklists });
      }
    },
    addingChecklist: (state, action) => {
      const { cardId, checklists } = action.payload;
      state.map((checklistObj) => {
        if (checklistObj.cardId === cardId) {
          checklistObj.checklists.push(checklists);
        }
      });
    },
    deletingChecklist: (state, action) => {
      const { cardId, checklists } = action.payload;
      state.map((checklistObj) => {
        if (checklistObj.cardId === cardId) {
          checklistObj.checklists = checklists;
        }
      });
    },
  },
});

export const { fetching, addingChecklist, deletingChecklist } =
  checklistsSlice.actions;
export default checklistsSlice.reducer;
