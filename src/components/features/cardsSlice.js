import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cardsSlice = createSlice({
  name: "cardslice",
  initialState,
  reducers: {
    fetching: (state, action) => {
      const { id, cards } = action.payload;
      const existingList = state.find((list) => list.id === id);
      if (!existingList) {
        state.push({ id: id, cards: cards });
      }
    },
    addingCard: (state, action) => {
      const { id, cards } = action.payload;
      state.map((list) => {
        if (list.id === id) {
          list.cards.push(cards);
        }
      });
    },
    deletingCard: (state, action) => {
      const { cardId, listId } = action.payload;
      state.map((list) => {
        if (list.id === listId) {
          const Upcards = list.cards.filter((card) => card.id !== cardId);
          list.cards = Upcards;
        }
      });
    },
  },
});

export const { fetching, addingCard, deletingCard } = cardsSlice.actions;
export default cardsSlice.reducer;
