import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
  name: "basket",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.price =
          parseInt(newItem.salePrices[0].value) * existingItem.quantity;
      } else {
        state.items.push({
          ...newItem,
          quantity: 1,
          price: parseInt(newItem.salePrices[0].value),
        });
      }
    },
    removeItem: (state, action) => {
      const itemIdToRemove = action.payload;
      state.items = state.items.filter((item) => item.id !== itemIdToRemove);
    },
    decrementItem: (state, action) => {
      const itemIdToDecrement = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === itemIdToDecrement
      );

      if (existingItem) {
        existingItem.quantity -= 1;

        if (existingItem.quantity === 0) {
          state.items = state.items.filter(
            (item) => item.id !== itemIdToDecrement
          );
        }
      }
    },
  },
});

export const { addItem, removeItem, decrementItem } = basketSlice.actions;
export default basketSlice.reducer;
