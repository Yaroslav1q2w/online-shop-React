import { List, ListItem, ListItemText, TextField } from "@mui/material";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const Sidebar = ({ onCategoryChange, onSearch }) => {
	const categories = [
		"All",
		"Electronics",
		"Jewelery",
		"Men's Clothing",
		"Women's Clothing",
	];

	const handleCategoryClick = (category) => {
		onCategoryChange(category === "All" ? null : category);
	};

	const [searchParams, setSearchParams] = useSearchParams();
	const searchTerm = searchParams.get("search") || "";

	const handleSearchChange = (event) => {
		setSearchParams({ search: event.target.value });
	};

	useEffect(() => {
		onSearch(searchTerm);
	}, [searchTerm, onSearch]);

	return (
		<div>
			<List>
				{categories.map((category) => (
					<ListItem
						button
						key={category}
						onClick={() => handleCategoryClick(category)}
					>
						<ListItemText primary={category} />
					</ListItem>
				))}
			</List>

			<TextField
				label="Search"
				variant="outlined"
				value={searchTerm}
				onChange={handleSearchChange}
			/>
		</div>
	);
};

export default Sidebar;
