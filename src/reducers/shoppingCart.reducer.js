import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	items: [],
};

const shoppingCartReducer = createSlice({
	name: "shoppingCart",
	initialState,
	reducers: {
		addToCart: (state, { payload }) => {
			const existingItem = state.items.find((item) => item.id === payload.id);

			if (existingItem) {
				existingItem.quantity++;
			} else {
				state.items.push({ ...payload, quantity: 1 });
			}
		},
		removeCart: (state, { payload }) => {
			state.items = state.items.filter((item) => item.id !== payload.id);
		},

		decreaseCount(state, { payload }) {
			const cardId = state.items.find((el) => el.id === payload.id);
			if (cardId.quantity === 1) {
				return;
			} else {
				cardId.quantity--;
			}
		},
		clearCart: (state) => {
			state.items = [];
		},
	},
});

export const { addToCart, removeCart, clearCart, decreaseCount } =
	shoppingCartReducer.actions;

export default shoppingCartReducer.reducer;
