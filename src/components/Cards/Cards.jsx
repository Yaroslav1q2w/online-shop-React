import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { fetchCards } from "../../reducers";
import Card from "./Card";
import Sidebar from "../Sidebar";
import { ContainerWrapp } from "./StyledCards";
import { todoSelector, isLoadingSelector } from "../../selectors";
import { Grid, Pagination, Stack } from "@mui/material";
import Loader from "../Loader";

const Cards = () => {
	const dispatch = useDispatch();
	const todos = useSelector(todoSelector);
	const isLoading = useSelector(isLoadingSelector);
	const [page, setPage] = useState(1);
	const [selectedCategory, setSelectedCategory] = useState(null);

	const [searchParams] = useSearchParams();
	const postQuery = searchParams.get("search") || "";

	useEffect(() => {
		dispatch(fetchCards());
	}, []);

	useEffect(() => {
		setPage(1);
	}, [selectedCategory, postQuery]);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleCategoryChange = (category) => {
		setSelectedCategory(category != null ? category.toLowerCase() : null);
	};

	const handleSearch = (term) => {
		searchParams.set("search", term);
	};

	if (isLoading) {
		return <Loader />;
	}

	const startIndex = (page - 1) * 6;
	const endIndex = startIndex + 6;

	const filteredCards = todos
		.filter((card) => !selectedCategory || card.category === selectedCategory)
		.filter(
			(card) =>
				!postQuery || card.title.toLowerCase().includes(postQuery.toLowerCase())
		);

	const visibleCards = filteredCards.slice(startIndex, endIndex);

	return (
		<ContainerWrapp>
			<Grid container spacing={3}>
				<Grid item xs={12} md={3}>
					<Sidebar
						onCategoryChange={handleCategoryChange}
						onSearch={handleSearch}
					/>
				</Grid>
				<Grid item xs={12} md={9}>
					<Grid container spacing={3} sx={{ padding: "20px" }}>
						{visibleCards.map((card) => (
							<Grid item key={card.id} xs={12} sm={6} md={4}>
								<Card cardProps={card} />
							</Grid>
						))}
					</Grid>
					<Stack spacing={2} sx={{ marginTop: "20px" }}>
						<Pagination
							count={Math.ceil(filteredCards.length / 6)}
							page={page}
							onChange={handleChangePage}
						/>
					</Stack>
				</Grid>
			</Grid>
		</ContainerWrapp>
	);
};

export default Cards;
