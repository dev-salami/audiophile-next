import { createSlice } from "@reduxjs/toolkit";
import Data from "../../data";
import { useEffect } from "react";
const initialState = {
	cartItems: [],
	showCart: false,
	amount: 1,
	total: 0,
	isLoading: true,
};
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
			const product = Data.find((item) => item.link === payload.name);

			console.log(payload);
		},
		calculateAmount: (state, { payload }) => {
			if (state.cartItems.length > 0) {
				const productAmount = state.cartItems.map((item) => {
					return item.count * item.price;
				});
				state.amount = productAmount.reduce((acc, cur) => acc + cur);
				console.log(state.amount);
			} else {
			}
			// state.amount = totalAmount;
			// console.log(state.amount);
		},
	},
});
export const { toggleCart, addtoCart, toggleProductCount, calculateAmount } =
	cartSlice.actions;
export default cartSlice.reducer;
