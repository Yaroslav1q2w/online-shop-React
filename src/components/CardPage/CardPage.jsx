import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ProductPageWrapper, ProductInfo } from "./StyledCardPage";
import { ReactComponent as RightArrow } from "./images/right-arrow.svg";
import axios from "axios";
import Loader from "../Loader";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addToCart } from "../../reducers";
import Modal from "../Modal";

function CardPage() {
	const { id } = useParams();
	const [productDetails, setProductDetails] = useState(null);
	const [isModal, setIsModal] = useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const goBack = () => navigate(-1);

	useEffect(() => {
		const fetchProductDetails = async () => {
			try {
				const response = await axios.get(
					`https://fakestoreapi.com/products/${id}`
				);

				setProductDetails(response.data);
			} catch (error) {
				console.error("Error fetching product details:", error);
			}
		};

		fetchProductDetails();
	}, [id]);

	const handleAddToCart = () => {
		dispatch(addToCart(productDetails));
		setIsModal(!isModal);
	};

	if (!productDetails) {
		return <Loader />;
	}

	return (
		<>
			<ProductPageWrapper>
				<Link className="btn-back" onClick={goBack}>
					<RightArrow />
				</Link>

				<ProductInfo>
					<h2 className="product-page__title">{productDetails.title}</h2>
					<img
						className="product-page__image"
						src={productDetails.image}
						alt={productDetails.title}
					/>
					<p className="product-page__category">{productDetails.category}</p>
					<p className="product-page__rating">
						Rating: {productDetails.rating.rate} ({productDetails.rating.count}{" "}
						reviews)
					</p>
					<p className="product-page__price"> ${productDetails.price}</p>
					<p className="product-page__info">{productDetails.description}</p>
					<Button
						onClick={handleAddToCart}
						variant="contained"
						color="success"
						size="large"
					>
						Придбати
					</Button>
				</ProductInfo>
			</ProductPageWrapper>

			{isModal && (
				<Modal
					text={`Ви успішно додали ${productDetails.title} до кошику`}
					onClick={() => setIsModal(!isModal)}
				></Modal>
			)}
		</>
	);
}

export default CardPage;
