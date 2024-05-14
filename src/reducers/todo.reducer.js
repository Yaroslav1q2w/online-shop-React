import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	todos: [],
	isLoading: true,
};

export const fetchCards = createAsyncThunk("todos/fetchCards", async () => {
	const response = await axios.get("https://fakestoreapi.com/products");
	return response.data;
});

const todoReducer = createSlice({
	name: "todos",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchCards.pending, (state) => {
			state.isLoading = true;
			state.todos = [];
		});
		builder.addCase(fetchCards.fulfilled, (state, { payload }) => {
			state.todos = payload;
			state.isLoading = false;
		});
	},
});

export default todoReducer.reducer;
