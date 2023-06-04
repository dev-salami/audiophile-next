import { createSlice } from "@reduxjs/toolkit";
import Data from "../../data";
import { useEffect } from "react";
const initialState = {
	cartItems: [],
	showCart: false,
	amount: 5670,
	total: 0,
	isLoading: true,
};
const saveInCart = () => {
	console.log("Please enter");
};
saveInCart();
// useEffect((console.log(initialState)
// ),[initialState])
const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		toggleCart: (state, { payload }) => {
			state.showCart = !state.showCart;
			// console.log(payload);
		},
		addtoCart: (state, { payload }) => {
			const productAdded = Data.find((item) => item.link === payload.name);
			const data = { ...productAdded, count: payload.count };
			state.cartItems = [...state.cartItems, data];
		},
		toggleProductCount: (state, { payload }) => {
			state.cartItems = payload;
		},
		clearCart: (state, { payload }) => {
			state.cartItems = [];
			state.amount = 0;
		},
		calculateAmount: (state, { payload }) => {
			if (state.cartItems.length > 0) {
				const productAmount = state.cartItems.map((item) => {
					return item.count * item.price;
				});
				state.amount = productAmount.reduce((acc, cur) => acc + cur);
				console.log(state.amount);
			} else {
				state.amount = 0;
			}
			// state.amount = totalAmount;
			// console.log(state.amount);
		},
	},
});
export const {
	toggleCart,
	addtoCart,
	toggleProductCount,
	calculateAmount,
	clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
