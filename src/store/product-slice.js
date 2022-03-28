import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
    name: 'product',
    initialState: { 
      item: [], 
      isSearch: false, 
      isFilter: false 
    },
    reducers: {
        search(state, action) {
            isSearch = true;
        },
        filter(state, action) {
            isFilter = true;
        },
    },
});

export const productAction = productSlice.actions;

export default productSlice;
