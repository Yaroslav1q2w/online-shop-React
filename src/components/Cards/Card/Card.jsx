import { CardContent, CardMedia, Button } from "@mui/material";
import { CardWrapp, LinkItem, ButtonBlock, Text, Title } from "./StyledCard";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../reducers";
import { useState } from "react";
import Modal from "../../Modal";

const Card = ({ cardProps }) => {
	const { id, title, category, price, image } = cardProps;

	const [isModal, setIsModal] = useState(false);
	const dispatch = useDispatch();

	const handleAddToCart = () => {
		dispatch(addToCart(cardProps));
		setIsModal(!isModal);
	};

	return (
		<>
			<CardWrapp>
				<LinkItem to={`/product/${id}`}>
					<CardMedia component="img" height="200" image={image} alt={title} />
					<CardContent>
						<Title>{title}</Title>
						<Text>{category}</Text>
						<Text>Price: {price}$</Text>
					</CardContent>
				</LinkItem>

				<ButtonBlock>
					<Button
						variant="contained"
						color="success"
						size="large"
						onClick={handleAddToCart}
					>
						Придбати
					</Button>
				</ButtonBlock>
			</CardWrapp>

			{isModal && (
				<Modal
					text={`Ви успішно додали ${title} до кошику`}
					onClick={() => setIsModal(!isModal)}
				></Modal>
			)}
		</>
	);
};

export default Card;
