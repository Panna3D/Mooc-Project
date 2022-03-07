import { configureStore } from "@reduxjs/toolkit";

import cardSlide from './Card-slide';
import uiSlice from './Ui-slide';

// Declared a Store
const store = configureStore({
    reducer: {ui: uiSlice.reducer, card: cardSlide.reducer},
});

export default store;

