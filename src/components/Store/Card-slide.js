import { createSlice } from "@reduxjs/toolkit";

// Create card methods slide
const cartSlice = createSlice({
    name: 'card',
    initialState: {
        items: [],
        totalQuantity: 0,
        changed: false,
    },
    reducers: {
        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
          },
        // Add card (+)
        addItemToCard(state, action){
             // get action from user after selected item
            const newItem = action.payload;
            // Check if existing item
            const existingItem = state.items.find((item) => item.id === newItem.id);

            state.totalQuantity++;
            state.changed = true;
            // If other item -> add new item object
            if (!existingItem) {
              state.items.push({
                id: newItem.id,
                price: newItem.price,  // default = total price
                quantity: 1,
                totalPrice: newItem.price, //  // default = price
                name: newItem.title,
              });
            // Else -> update to existing item
            } else {
              existingItem.quantity++;
              existingItem.totalPrice = existingItem.totalPrice + newItem.price;
          }  
        },
        // Remove card (-)
        removeItemToCard(state, action){
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
            state.totalQuantity--;
            state.changed = true;
            if (existingItem.quantity === 1) {
              state.items = state.items.filter((item) => item.id !== id);
            } else {
              existingItem.quantity--;
              existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        }
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice;