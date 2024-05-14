import styled from "styled-components";
import { Container } from "@mui/material";

export const ProductPageWrapper = styled(Container)`
	&&& {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		color: #fff;
		position: relative;
		color: #000;
		padding: 30px 0;

		.btn-back {
			position: absolute;
			top: 30px;
			left: 10px;
			width: 36px;
			transform: rotate(180deg);

			&:hover,
			&:focus {
				svg {
					transform: translateX(10px);
				}
			}

			svg {
				fill: #000;
				transform: translateX(0);
				transition: transform 0.8s;
			}
		}
	}
`;

export const ProductInfo = styled.div`
	padding: 0;
	margin-top: 14px;
	max-width: 900px;
	line-height: 1.1;
	letter-spacing: 2px;
	word-spacing: 1px;
	text-align: center;

	.product-page__title {
		font-size: 26px;
		padding: 30px 0;
		font-weight: 700;
		padding: 0 40px;
	}

	.product-page__image {
		width: 100%;
		max-width: 400px;
		margin-top: 20px;
	}

	.product-page__category {
		font-size: 18px;
		margin-top: 10px;
	}

	.product-page__rating {
		font-size: 16px;
		margin-top: 10px;
	}

	.product-page__price {
		font-size: 20px;
		margin: 20px 0;
	}

	.product-page__info {
		font-size: 18px;
	}

	.product-page__success-message {
		color: green;
		font-weight: bold;
		margin-top: 10px;
	}
`;
