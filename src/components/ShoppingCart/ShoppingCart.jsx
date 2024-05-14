import { useDispatch, useSelector } from "react-redux";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import {
	removeCart,
	decreaseCount,
	addToCart,
} from "../../reducers/shoppingCart.reducer";
import { shoppingCartSelector } from "../../selectors";
import {
	ShoppingCartZero,
	CardWrapp,
	ButtonBlock,
	Text,
	Title,
	Header,
	Quantity,
	TotalPriceElem,
	ContainerWrapper,
	ButtonSubmit,
	HeaderBlock,
} from "./StyledShoppingCart";
import { Button, CardContent, CardMedia, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
	const dispatch = useDispatch();
	const cartItems = useSelector(shoppingCartSelector);

	const totalPrice = cartItems.reduce(
		(acum, elem) => acum + elem.price * elem.quantity,
		0
	);

	const formattedTotalPrice = totalPrice.toFixed(2);

	return (
		<ContainerWrapper>
			<Header>Кошик</Header>
			<HeaderBlock>
				{cartItems.length > 0 && (
					<Link to={"/order-page"}>
						<ButtonSubmit variant="outlined">Оформити замовлення</ButtonSubmit>
					</Link>
				)}
				<TotalPriceElem>Загальна сума: {formattedTotalPrice} $</TotalPriceElem>
			</HeaderBlock>

			{cartItems.length < 1 ? (
				<ShoppingCartZero>
					<ShoppingCartIcon sx={{ color: "#000", fontSize: 150 }} />
					<h3>Кошик порожній</h3>
				</ShoppingCartZero>
			) : (
				<Grid container spacing={3} sx={{ padding: "20px" }}>
					{cartItems.map((card) => (
						<Grid item key={card.id} xs={12} sm={6} md={4}>
							<CardWrapp>
								<CardMedia
									component="img"
									height="200"
									image={card.image}
									alt={card.title}
								/>
								<CardContent>
									<Title>{card.title}</Title>
									<Quantity>
										<RemoveCircleOutlineIcon
											sx={{ fontSize: 30, cursor: "pointer" }}
											onClick={() => dispatch(decreaseCount(card))}
										/>
										{card.quantity}
										<ControlPointIcon
											sx={{ fontSize: 30, cursor: "pointer" }}
											onClick={() => dispatch(addToCart(card))}
										/>
									</Quantity>
									<Text>Price: {card.price}$</Text>
								</CardContent>

								<ButtonBlock>
									<Button
										variant="contained"
										color="success"
										size="large"
										onClick={() => dispatch(removeCart(card))}
									>
										Вилучити
									</Button>
								</ButtonBlock>
							</CardWrapp>
						</Grid>
					))}
				</Grid>
			)}
		</ContainerWrapper>
	);
};

export default ShoppingCart;
