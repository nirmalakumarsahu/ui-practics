import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cartItems: [],
	cartItemsCount: 0
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state: any, action) => {
			state.cartItems.push(action.payload);
			state.cartItemsCount = state.cartItems.length;
		},
	}
});

export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;