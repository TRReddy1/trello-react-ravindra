import { configureStore } from "@reduxjs/toolkit";
import boardsReducer from "../features/boardsSlice";
import listsReducer from "../features/listSlice";
import cardsReducer from "../features/cardsSlice";
import checklistsReducer from "../features/checklistsSlice";
import checkitemsReducer from "../features/checkitemsSlice";

export const store = configureStore({
  reducer: {
    boards: boardsReducer,
    lists: listsReducer,
    cards: cardsReducer,
    checklists: checklistsReducer,
    checkitems: checkitemsReducer,
  },
});
