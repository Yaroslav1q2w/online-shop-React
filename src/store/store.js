import { configureStore } from "@reduxjs/toolkit";
import { todoReducer, shoppingCartReducer } from "../reducers";

const store = configureStore({
	reducer: {
		todos: todoReducer,
		shoppingCart: shoppingCartReducer,
	},
});

export default store;
