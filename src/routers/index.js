import { Route, Routes } from "react-router-dom";
import Cards from "../components/Cards";
import CardPage from "../components/CardPage";
import ShoppingCart from "../components/ShoppingCart";
import OrderPage from "../components/OrderPage";

const RootRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<Cards />} />
			<Route path="/product/:id" element={<CardPage />} />
			<Route path="/shopping-cart" element={<ShoppingCart />} />
			<Route path="/order-page" element={<OrderPage />} />
		</Routes>
	);
};

export default RootRouter;
